var RegressionDataComputation = artifacts.require("./RegressionDataComputation.sol");

contract('RegressionDataComputation', function(accounts) {

	function wait(ms) {
		var start = new Date().getTime();
		var end = start;
		while(end < start + ms) {
			end = new Date().getTime(); 
		}
	}

	it("should return the right summation result", function() {
		return RegressionDataComputation.new(20, 6, 3, 10, 2, 2, 2).then(function(instance) {
			regressionDataComputation = instance;
			return regressionDataComputation.register({from: accounts[1], value: 30}); 
		}).then(function() {
			return regressionDataComputation.register({from: accounts[2], value: 30}); 
		}).then(function() {
			return regressionDataComputation.register({from: accounts[3], value: 30}); 
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[4]); 
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[5]); 
		}).then(function() {
			return regressionDataComputation.addRequester(accounts[4]); 
		}).then(function() {
			return regressionDataComputation.store([1, 2, 3], [3, 0, 2], [12, 7, 11], [8, 20, 8], [2017, 10, 2], {from: accounts[4]}); 
		}).then(function() {
			return regressionDataComputation.store([4, 4, 0], [1, 1, 0], [3, 2, 11], [7, 56, 1], [2017, 8, 31], {from: accounts[5]}); 
		}).then(function() {
			return regressionDataComputation.store([2, 1, 1], [5, 4, 4], [4, 3, 45], [2, 9, 5], [2017, 11, 7], {from: accounts[4]}); 
		}).then(function() {
			return regressionDataComputation.store([9, 9, 9], [9, 9, 9], [9, 9, 9], [9, 9, 9], [2014, 8, 31], {from: accounts[5]}); 
		}).then(function() {
			return regressionDataComputation.request(899, [2016, 1, 1], [2018, 10, 1], {from: accounts[4], value: 15});
		}).then(function() {
			return regressionDataComputation.declareComputationStart();
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[1]});
		}).then(function() {
			return regressionDataComputation.checkResult(899, {from: accounts[4]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to insufficient results");
			return regressionDataComputation.compute(899, {from: accounts[2]});
		}).then(function() {
			return regressionDataComputation.checkResult(899, {from: accounts[4]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to insufficient results");
			return regressionDataComputation.compute(899, {from: accounts[3]});
		}).then(function() {
			return regressionDataComputation.checkResult(899, {from: accounts[4]});
		}).then(function(summationArray) {
			assert.equal(summationArray[0], 18, "x should be 18");
			assert.equal(summationArray[1], 20, "y should be 20");
			assert.equal(summationArray[2], 98, "xy should be 98");
			assert.equal(summationArray[3], 116, "xsq shoudl be 116");
			wait(5000);
			return regressionDataComputation.declareCheckingEnd();
		}).then(function() {
			return regressionDataComputation.store([1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4], [2017, 10, 31], {from: accounts[5]}); 
		}).then(function() {
			return regressionDataComputation.request(899, [2016, 1, 1], [2018, 11, 1], {from: accounts[4], value: 15});
		}).then(function() {
			return regressionDataComputation.declareComputationStart();
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[1]});
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[2]});
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[3]});
		}).then(function() {
			return regressionDataComputation.checkResult(899, {from: accounts[4]});
		}).then(function(summationArray) {
			assert.equal(summationArray[0], 21, "x should be 21");
			assert.equal(summationArray[1], 26, "y should be 26");
			assert.equal(summationArray[2], 107, "xy should be 107");
			assert.equal(summationArray[3], 128, "xsq shoudl be 128");
		});
	});

	it("should forbid early and late computation",function() {
		return RegressionDataComputation.new(20, 4, 2, 10, 5, 5, 2).then(function(instance) {
			regressionDataComputation = instance;
			return regressionDataComputation.register({from: accounts[1], value: 30}); 
		}).then(function() {
			return regressionDataComputation.register({from: accounts[2], value: 30}); 
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[4]);  
		}).then(function() {
			return regressionDataComputation.addRequester(accounts[4]); 
		}).then(function() {
			return regressionDataComputation.store([1, 2, 3], [3, 0, 2], [12, 7, 11], [8, 20, 8], [2017, 10, 2], {from: accounts[4]}); 
		}).then(function() {
			return regressionDataComputation.request(899, [2016, 1, 1], [2018, 10, 1], {from: accounts[4], value: 15});
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[1]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to early submission");
			return regressionDataComputation.declareComputationStart();
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[1]});
		}).then(function() {
			wait(6000);
			return regressionDataComputation.compute(899, {from: accounts[2]});			
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to late submission");
			return regressionDataComputation.isSubmitted(899, {from: accounts[1]});
		}).then(function(flag) {
			assert.equal(flag, true, "accounts[1] should have submitted the result");
			return regressionDataComputation.isSubmitted(899, {from: accounts[2]});
		}).then(function(flag) {
			assert.equal(flag, false, "accounts[2] should not have submitted the result");
		});
	});

	it("should forbid computation declaration when the initiator is holding some shares", function() {
		return RegressionDataComputation.new(20, 3, 2, 10, 5, 5, 2).then(function(instance) {
			regressionDataComputation = instance;
			return regressionDataComputation.register({from: accounts[1], value: 20});
		}).then(function() {
			return regressionDataComputation.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[5]);
		}).then(function() {
			return regressionDataComputation.addRequester(accounts[4]); 
		}).then(function() {
			return regressionDataComputation.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataComputation.store([11, 12], [14, 15], [17, 18], [20, 21], [2017, 10, 2], {from: accounts[5]});
		}).then(function() {
			return regressionDataComputation.withdraw({from: accounts[1]});
		}).then(function() {
			return regressionDataComputation.request(899, [2016, 1, 1], [2018, 10, 1], {from: accounts[4], value: 15});
		}).then(function() {
			return regressionDataComputation.register({from: accounts[3], value: 20});
		}).then(function(){
			return regressionDataComputation.declareComputationStart();
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown as the Initiator is holding some shares");
			return regressionDataComputation.restore();
		}).then(function() {
			return regressionDataComputation.declareComputationStart();
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[2]});
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[3]});
		}).then(function() {
			return regressionDataComputation.checkResult(899, {from: accounts[4]});
		}).then(function(summationArray) {
			assert.equal(summationArray[0], 26, "x should be 26");
			assert.equal(summationArray[1], 38, "y should be 38");
			assert.equal(summationArray[2], 50, "xy should be 50");
			assert.equal(summationArray[3], 62, "xsq shoudl be 62");
		});
	});

	it("should fobid any operation related to computation nodes or shares change during computation", function() {
		return RegressionDataComputation.new(20, 3, 2, 10, 5, 5, 2).then(function(instance) {
			regressionDataComputation = instance;
			return regressionDataComputation.register({from: accounts[1], value: 20});
		}).then(function() {
			return regressionDataComputation.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[5]);
		}).then(function() {
			return regressionDataComputation.addRequester(accounts[4]); 
		}).then(function() {
			return regressionDataComputation.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataComputation.store([11, 12], [14, 15], [17, 18], [20, 21], [2017, 10, 2], {from: accounts[5]});
		}).then(function() {
			return regressionDataComputation.request(899, [2016, 1, 1], [2018, 10, 1], {from: accounts[4], value: 15});
		}).then(function() {
			return regressionDataComputation.declareComputationStart();
		}).then(function() {
			return regressionDataComputation.register({from: accounts[3], value: 30});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to registration during computation");
			return regressionDataComputation.withdraw({from: accounts[1]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to withdrawal during computation");
			return regressionDataComputation.setDepositThreshold(30);
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to deposit change during computation");
			return regressionDataComputation.setComputationNodesCeiling(2);
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to computation nodes ceiling change during computation");
			return regressionDataComputation.store([31, 32], [34, 35], [37, 38], [40, 41], [2017, 10, 2], {from: accounts[4]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to shares storing during computation");
			return regressionDataComputation.compute(899, {from: accounts[1]});
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[2]});
		}).then(function() {
			return regressionDataComputation.checkResult(899, {from: accounts[4]});
		}).then(function(summationArray) {
			assert.equal(summationArray[0], 26, "x should be 26");
			assert.equal(summationArray[1], 38, "y should be 38");
			assert.equal(summationArray[2], 50, "xy should be 50");
			assert.equal(summationArray[3], 62, "xsq shoudl be 62");
		});
	});

	it("should penalize the dishonest nodes", function() {
		return RegressionDataComputation.new(20, 3, 2, 10, 2, 2, 2).then(function(instance) {
			regressionDataComputation = instance;
			return regressionDataComputation.register({from: accounts[1], value: 20});
		}).then(function() {
			return regressionDataComputation.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[4]);
		}).then(function() {
			return regressionDataComputation.addDataStorer(accounts[5]);
		}).then(function() {
			return regressionDataComputation.addRequester(accounts[4]); 
		}).then(function() {
			return regressionDataComputation.store([1, 2], [4, 5], [7, 8], [10, 11], [2017, 10, 2], {from: accounts[4]});
		}).then(function() {
			return regressionDataComputation.store([11, 12], [14, 15], [17, 18], [20, 21], [2017, 10, 2], {from: accounts[5]});
		}).then(function() {
			return regressionDataComputation.request(899, [2016, 1, 1], [2018, 10, 1], {from: accounts[4], value: 10});
		}).then(function() {
			return regressionDataComputation.declareComputationStart();
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[1]});
		}).then(function() {
			wait(5000);
			return regressionDataComputation.declareCheckingEnd();
		}).then(function() {
			return regressionDataComputation.checkBalance({from: accounts[1]});
		}).then(function(balance) {
			assert.equal(balance, 20, "accounts[1] should have a balance of $20");
			return regressionDataComputation.checkBalance({from: accounts[2]});
		}).then(function(balance) {
			assert.equal(balance, 25, "accounts[2] should have a balance of $25"); 
			return regressionDataComputation.request(899, [2016, 1, 1], [2018, 10, 1], {from: accounts[4], value: 20});
		}).then(function() {
			return regressionDataComputation.declareComputationStart();
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[1]});
		}).then(function() {
			wait(5000);
			return regressionDataComputation.declareCheckingEnd();
		}).then(function() {
			return regressionDataComputation.checkBalance({from: accounts[2]});
		}).then(function(balance) {
			assert.equal(balance, 0, "accounts[2] should have a balance of $0"); 
			return regressionDataComputation.register({from: accounts[2], value: 30});
		}).then(function() {
			return regressionDataComputation.restore();
		}).then(function() {
			return regressionDataComputation.request(899, [2016, 1, 1], [2018, 10, 1], {from: accounts[4], value: 10});
		}).then(function() {
			return regressionDataComputation.declareComputationStart();
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[1]});
		}).then(function() {
			return regressionDataComputation.compute(899, {from: accounts[2]});
		}).then(function() {
			wait(5000);
			return regressionDataComputation.declareCheckingEnd();
		}).then(function() {
			return regressionDataComputation.checkBalance({from: accounts[2]});
		}).then(function(balance) {
			assert.equal(balance, 30, "accounts[2] should have a balance of $30"); 
		}); 
	})
});