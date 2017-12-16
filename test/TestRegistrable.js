var Registrable = artifacts.require("./Registrable.sol");

// By default, it will be accounts[0] to invoke the functions
contract('Registrable', function(accounts) {

	it("should initialize with user's provided arguments", function() {
		return Registrable.new(20, 6).then(function(instance) {
			registrable = instance;
			return registrable.depositThreshold.call();
		}).then(function(depositThreshold) {
			assert.equal(depositThreshold, 20, "depositThreshold should be 20");
			return registrable.computationNodesCeiling.call(); 
		}).then(function(computationNodesCeiling) {
			assert.equal(computationNodesCeiling, 6, "computationNodesCeiling should be 6");
			return registrable.initiator.call();
		}).then(function(initiator) {
			assert.equal(initiator, accounts[0], "initiator should be the accounts[0]"); 
		});
	});

	it("'s computationNodesSize, pendingNodesSize and balance should be 0 upon initialization", function() {
		return Registrable.new(20, 6).then(function(instance) {
			registrable = instance;
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "computationNodesSize should be 0"); 
			return registrable.getPendingNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "pendingNodesSize should be 0"); 
			return registrable.checkContractBalance.call();
		}).then(function(balance) {
			assert.equal(balance, 0, "balance should be 0");
		});
	});

	it("should accept node with sufficient deposit, reject re-registration, reject those without sufficient deposit", function() {
		return Registrable.new(20, 6).then(function(instance) {
			registrable = instance;
			return registrable.register({from: accounts[1], value: 30});
		}).then(function() {
			return registrable.getComputationNodesSize.call(); 
		}).then(function(size) {
			assert.equal(size, 1, "computationNodesSize should be 1");
			return registrable.register({from: accounts[1], value: 30});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to re-registration");
			return registrable.register({from: accounts[2], value: 30});
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "computationNodesSize should be 2");
			return registrable.register({from: accounts[3], value: 10});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to insufficent deposit");
			return registrable.register({from: accounts[3], value: 30});
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 3, "computationNodesSize should be 3");
			return registrable.checkContractBalance.call();
		}).then(function(balance) {
			assert.equal(balance, 90, "balance should be 90");
		});
	});

	it("should add node in pendingNodes queue when registerdNodes queue is full", function() {
		return Registrable.new(20, 2).then(function(instance) {
			registrable = instance;
			return registrable.register({from: accounts[1], value: 30});	
		}).then(function() {
			return registrable.register({from: accounts[2], value: 30});
		}).then(function() {
			return registrable.register({from: accounts[3], value: 30});
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "computationNodesSize should be 2");
			return registrable.getPendingNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "pendingNodesSize should be 1");
			return registrable.checkContractBalance.call();
		}).then(function(balance) {
			assert.equal(balance, 90, "balance should be 90");
		});
	});

	it("should allow withdrawal and disallow re-withdrawal", function() {
		return Registrable.new(20, 2).then(function(instance) {
			registrable = instance;
			return registrable.register({from: accounts[1], value: 30});
		}).then(function() {
			return registrable.register({from: accounts[2], value: 30});
		}).then(function() {
			return registrable.checkContractBalance.call();
		}).then(function(balance) {
			assert.equal(balance, 60, "balance should be 60");
			return registrable.withdraw({from: accounts[1]});
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "computationNodesSize should be 1");
			return registrable.withdraw({from: accounts[1]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to re-withdrawal");	
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "computationNodesSize should be 1");
			return registrable.withdraw({from: accounts[2]});
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "computationNodesSize should be 0");
			return registrable.checkContractBalance.call();
		}).then(function(balance) {
			assert.equal(balance, 0, "balance should be 0");
		});
	});

	it("should allow the initiator to set desposit threshold, then disqualify computation and pending nodes without sufficent deposits", function() {
		return Registrable.new(20, 3).then(function(instance) {
			registrable = instance;
			return registrable.register({from: accounts[1], value: 25});
		}).then(function() {
			return registrable.register({from: accounts[2], value: 40});	
		}).then(function() {
			return registrable.register({from: accounts[3], value: 30});	
		}).then(function() {
			return registrable.register({from: accounts[4], value: 20});
		}).then(function() {
			return registrable.register({from: accounts[5], value: 40});
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 3, "computationNodesSize should be 3");
			return registrable.getPendingNodesSize.call(); 
		}).then(function(size) {
			assert.equal(size, 2, "pendingNodesSize should be 2")
			return registrable.checkContractBalance.call();
		}).then(function(balance) {
			assert.equal(balance, 155, "balance should be 155");
			return registrable.checkPendingTicketNumber.call({from: accounts[2]});
		}).then(function(ticket) {
			assert.equal(ticket, -1, "accounts[2] should have a ticket number of -1");
			return registrable.checkPendingTicketNumber.call({from: accounts[4]});
 		}).then(function(ticket) {
 			assert.equal(ticket, 0, "accounts[4] should have a ticket number of 0");
 			return registrable.checkPendingTicketNumber.call({from: accounts[5]});
 		}).then(function(ticket) {
 			assert.equal(ticket, 1, "accounts[5] should have a ticket number of 1");
			return registrable.setDepositThreshold(35);
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "computationNodesSize should be 2"); 
			return registrable.getPendingNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "pendingNodesSize should be 0");
			return registrable.depositThreshold.call();
		}).then(function(depositThreshold) {
			assert.equal(depositThreshold, 35, "depositThreshold should be 35");
			return registrable.checkContractBalance.call();
		}).then(function(balance) {
			assert.equal(balance, 80, "balance should be 80");
			return registrable.checkPendingTicketNumber.call({from: accounts[2]});
		}).then(function(ticket) {
			assert.equal(ticket, -1, "accounts[2] should have a ticket number of -1");
			return registrable.checkPendingTicketNumber.call({from: accounts[4]});
		}).then(function(ticket) {
			assert.equal(ticket, -1, "accounts[4] should have a ticket number of -1");
			return registrable.checkPendingTicketNumber.call({from: accounts[5]});
		}).then(function(ticket) {
			assert.equal(ticket, -1, "accounts[5] should have a ticket number of -1");
		}); 
	});

	it("should randomly remove computation nodes when the new ceiling < old ceiling == size of computationNodes queue", function() {
		return Registrable.new(20, 2).then(function(instance) {
			registrable = instance;
			return registrable.register({from: accounts[1], value: 25});
		}).then(function() {
			return registrable.register({from: accounts[2], value: 30});
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 2, "computationNodesSize should be 2");
			return registrable.getPendingNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 0, "pendingNodesSize should be 0");
			return registrable.checkContractBalance.call();
		}).then(function(balance) {
			assert.equal(balance, 55, "balance should be 55");
			return registrable.setComputationNodesCeiling(1);
		}).then(function() {
			return registrable.getComputationNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "computationNodesSize should be 1");
			return registrable.getPendingNodesSize.call();
		}).then(function(size) {
			assert.equal(size, 1, "pendingNodesSize should be 1"); 
			return registrable.computationNodesCeiling.call();
		}).then(function(computationNodesCeiling) {
			assert.equal(computationNodesCeiling, 1, "computationNodesCeiling should be 1");
			return registrable.checkContractBalance.call();
		}); 
	});

	it("should allow computation and pending nodes to make contributions", function() {
		return Registrable.new(20, 1).then(function(instance) {
			registrable = instance; 
			return registrable.register({from: accounts[1], value: 25});
		}).then(function() {
			return registrable.register({from: accounts[2], value: 30}); 
		}).then(function() {
			return registrable.checkBalance.call({from: accounts[1]});		
		}).then(function(balance) {
			assert.equal(balance, 25, "accounts[1] should have a balance of 25");
			return registrable.checkBalance.call({from: accounts[2]});
		}).then(function(balance) {
			assert.equal(balance, 30, "accounts[2] should have a balance of 30");
			return registrable.contribute({from: accounts[1], value: 25});
		}).then(function() {
			return registrable.contribute({from: accounts[2], value: 5});
		}).then(function() {
			return registrable.checkBalance.call({from: accounts[1]});
		}).then(function(balance) {
			assert.equal(balance, 50, "accounts[1] should have a balance of 50 after contributing another 25 Wei");
			return registrable.checkBalance.call({from: accounts[2]});
		}).then(function(balance) {
			assert.equal(balance, 35, "accounts[2] should have a balance of 35 after contributing another 5 Wei");
		});
	});
});