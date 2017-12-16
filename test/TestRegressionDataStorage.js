var RegressionDataStorage = artifacts.require("./RegressionDataStorage.sol");

contract('RegressionDataStorage', function(accounts) {

	it("should not initialize with user's provided split size if it is < ceiling", function() {
		return RegressionDataStorage.new(20, 3, 6).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.splitSize.call()
		}).then(function(size) {
			assert.equal(size, 3, "splitSize should be 3"); 
		});
	});

	it("should allow data storer to store shares and disallow non data storer to store shares", function() {
		return RegressionDataStorage.new(20, 6, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.addDataStorer(accounts[1]); 
		}).then(function() {
			return regressionDataStorage.getDataStorersSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "dataStorers size should be 1");
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[3], value: 30});
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[1]}); 
		}).then(function() {
			return regressionDataStorage.getTotalNumberOfShares.call();
		}).then(function(number) {
			assert.equal(number, 2, "totalNumberOfShares should be 2"); 
			return regressionDataStorage.checkSharesSize({from: accounts[2]});
		}).then(function(size) {
			assert.equal(size, 1, "accounts[2] should hold a share"); 
			return regressionDataStorage.checkSharesSize({from: accounts[3]});
		}).then(function(size) {
			assert.equal(size, 1, "accounts[3] should hold a share"); 
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[2]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to non-data storer");
			return regressionDataStorage.getTotalNumberOfShares.call();
		}).then(function(number) {
			assert.equal(number, 2, "totalNumberOfShares should be 2"); 
			return regressionDataStorage.getDataStorersSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "dataStoerersSize should be 1");
		});
	});

	it("should allow the initiator to reset split size", function() {
		return RegressionDataStorage.new(20, 3, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[3]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[3]}); 
		}).then(function() {
			return regressionDataStorage.setSplitSize(4);
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to new split size > ceiling");
			return regressionDataStorage.setSplitSize(3);
		}).then(function() {
			return regressionDataStorage.splitSize.call()
		}).then(function(size) {
			assert.equal(size, 3, "splitSize should be 3"); 
			return regressionDataStorage.store([13, 14], [15, 16], [17, 18], [19, 20], [2017, 10, 2], {from: accounts[3]}); 
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to shares != split size");
			return regressionDataStorage.store([13, 14, 15], [15, 16, 17], [18, 19, 20], [20, 21, 22], [2017, 10, 2], {from: accounts[3]}); 
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to computationNodesSize < splitSize");
			return regressionDataStorage.register({from: accounts[4], value: 30});
		}).then(function() {
			return regressionDataStorage.store([13, 14, 15], [15, 16, 17], [18, 19, 20], [20, 21, 22], [2017, 10, 2], {from: accounts[3]}); 
		}).then(function() {
			return regressionDataStorage.getTotalNumberOfShares.call();
		}).then(function(size) {
			assert.equal(size, 5, "totalNumberOfShares should be 5"); 
		});
	});

	it("should reallocate the shares to the initiator when computationNodesSize < splitSize due to withdrawal", function() {
		return RegressionDataStorage.new(20, 3, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[3]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[3]}); 
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "the initiator should hold 0 share"); 
			return regressionDataStorage.withdraw({from: accounts[1]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "the initiator should hold a share");
			return regressionDataStorage.withdraw({from: accounts[2]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "the initiator should hold 2 shares");
			return regressionDataStorage.register({from: accounts[1], value:30});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call({from: accounts[1]});
		}).then(function(size) {
			assert.equal(size, 0, "accounts[1] should hold 0 shares"); 
		}); 
	});

	it("should reallocate the shares to others when computationNodesSize >= splitSize after withdrawal", function() {
		return RegressionDataStorage.new(20, 3, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[3], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.withdraw({from: accounts[1]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "the initiator should hold 0 share"); 
		});
	});

	it("should enable the pendingNodes to become computationNodes to store shares after withdrawal", function() {
		return RegressionDataStorage.new(20, 2, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 20});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[3], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.store([11, 12], [14, 15], [17, 18], [20, 21], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call({from: accounts[1]});
		}).then(function(size) {
			assert.equal(size, 2, "accounts[1] should hold 2 shares");
			return regressionDataStorage.checkSharesSize.call({from: accounts[2]});
		}).then(function(size) {
			assert.equal(size, 2, "accounts[2] should hold 2 shares");
			return regressionDataStorage.checkSharesSize.call({from: accounts[3]});
		}).then(function(size) {
			assert.equal(size, 0, "accounts[3] should hold 0 share");
			return regressionDataStorage.checkPendingTicketNumber.call({from: accounts[3]});
		}).then(function(ticket) {
			assert.equal(ticket, 0, "accounts[3] should hold have a ticket number of 0");
			return regressionDataStorage.withdraw({from: accounts[1]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call({from: accounts[2]});
		}).then(function(size) {
			assert.equal(size, 3, "accounts[2] should have 3 shares");
			return regressionDataStorage.checkSharesSize.call({from: accounts[3]});
		}).then(function(size) {
			assert.equal(size, 1, "accounts[3] should have 1 share");
			return regressionDataStorage.checkPendingTicketNumber.call({from: accounts[3]});
		}).then(function(ticket) {
			assert.equal(ticket, -1, "accounts[3] should hold have a ticket number of -1");
			return regressionDataStorage.store([31, 32], [34, 35], [37, 38], [40, 41], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call({from: accounts[2]});
		}).then(function(size) {
			assert.equal(size, 4, "accounts[2] should have 4 shares");
			return regressionDataStorage.checkSharesSize.call({from: accounts[3]});
		}).then(function(size) {
			assert.equal(size, 2, "accounts[3] should have 2 shares");
		});
	});

	it("should reallocate the shares to the initiator when setting the deposit threshold leads to disqualification & computationNodesSize < splitSize ", function() {
		return RegressionDataStorage.new(20, 3, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 45});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[3]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[3]}); 
		}).then(function() {
			return regressionDataStorage.setDepositThreshold(35); 
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "the initiator should hold a share"); 
			return regressionDataStorage.checkSharesSize.call({from: accounts[1]});
		}).then(function(size) {
			assert.equal(size, 1, "accounts[1] should hold a share");
			return regressionDataStorage.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "computationNodesSize should be 1");
		});
	}); 

	it("should reallocate the shares to others when setting the deposit threshold leads to disqualification & computationNodesSize >= splitSize", function() {
		return RegressionDataStorage.new(20, 3, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 20});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[3], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.setDepositThreshold(25); 
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "the initiator should hold 0 share"); 
			return regressionDataStorage.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "computationNodesSize should be 2");
		});
	});

	it("should enable the pendingNodes to become computationNodes to store shares after setting the deposit threshold", function() {
		return RegressionDataStorage.new(20, 2, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 20});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[3], value: 30});
		}).then(function() {
			return regressionDataStorage.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "computationNodesSize should be 2");
			return regressionDataStorage.getPendingNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "pendingNodesSize should be 1");
			return regressionDataStorage.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.store([11, 12], [14, 15], [17, 18], [20, 21], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call({from: accounts[1]});
		}).then(function(size) {
			assert.equal(size, 2, "accounts[1] should hold 2 shares"); 
			return regressionDataStorage.checkSharesSize.call({from: accounts[2]});
		}).then(function(size) {
			assert.equal(size, 2, "accounts[2] should hold 2 shares"); 
			return regressionDataStorage.checkSharesSize.call({from: accounts[3]});
		}).then(function(size) {
			assert.equal(size, 0, "accounts[3] should hold 0 share"); 
			return regressionDataStorage.setDepositThreshold(25);
		}).then(function() {
			return regressionDataStorage.store([31, 32], [34, 35], [37, 38], [40, 41], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call({from: accounts[2]});
		}).then(function(size) {
			assert.equal(size, 4, "accounts[2] should hold 4 shares"); 
			return regressionDataStorage.checkSharesSize.call({from: accounts[3]});
		}).then(function(size) {
			assert.equal(size, 2, "accounts[3] should hold 2 shares"); 
		}); 
	});

	it("should reallocate the shares to the initiator when setting the computationNodesCeiling leads to disqualification & computationNodesSize < splitSize", function() {
		return RegressionDataStorage.new(20, 3, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 45});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[3]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[3]}); 
		}).then(function() {
			return regressionDataStorage.setComputationNodesCeiling(1);
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "the initiator should hold a share");
			return regressionDataStorage.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "computationNodesSize should be 1");
		});
	});

	it("should reallocate the shares to others when setting the computationNodesCeiling leads to disqualification & computationNodesSize >= splitSize", function() {
		return RegressionDataStorage.new(20, 3, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 20});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[3], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.setComputationNodesCeiling(2); 
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "the initiator should hold 0 share"); 
			return regressionDataStorage.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "computationNodesSize should be 2");
		});
	});

	it("should allow initiator to restore shares when computationNodesSize >= splitSize",function() {
		return RegressionDataStorage.new(20, 3, 2).then(function(instance) {
			regressionDataStorage = instance;
			return regressionDataStorage.register({from: accounts[1], value: 20});
		}).then(function() {
			return regressionDataStorage.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataStorage.addDataStorer(accounts[5]);
		}).then(function() {
			return regressionDataStorage.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.store([11, 12], [14, 15], [17, 18], [20, 21], [2017, 10, 2], {from: accounts[5]});
		}).then(function() {
			return regressionDataStorage.withdraw({from: accounts[1]});
		}).then(function() {
			return regressionDataStorage.restore()
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to insufficient computationNodes");
			return regressionDataStorage.register({from: accounts[3], value: 30});
		}).then(function() {
			return regressionDataStorage.store([11, 12], [14, 15], [17, 18], [20, 21], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataStorage.checkSharesSize.call({from: accounts[2]});
		}).then(function(size) {
			assert.equal(size, 3, "accounts[2] should hold 3 shares"); 
			return regressionDataStorage.checkSharesSize.call({from: accounts[3]});
		}).then(function(size) {
			assert.equal(size, 1, "accounts[3] should hold a share"); 
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "the initiator should hold 2 shares"); 
			return regressionDataStorage.restore()
		}).then(function(size) {
			return regressionDataStorage.checkSharesSize.call({from: accounts[2]});
		}).then(function(size) {
			assert.equal(size, 4, "accounts[2] should hold 4 shares");
			return regressionDataStorage.checkSharesSize.call({from: accounts[3]});
		}).then(function(size) {
			assert.equal(size, 2, "accounts[3] should hold 2 shares");
			return regressionDataStorage.checkSharesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "the initiator should hold 0 share"); 
		});
	});
}); 