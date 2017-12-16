var Computable = artifacts.require("./Computable.sol");

contract('Computable', function(accounts) {

	// should have a better way
	function wait(ms) {
		var start = new Date().getTime();
		var end = start;
		while(end < start + ms) {
			end = new Date().getTime(); 
		}
	}

	it("should allow the commander to declare computation start and end", function() {
		return Computable.new(10, 2, 1, 2).then(function(instance) {
			computable = instance;
			return computable.declareComputationStart({from: accounts[1]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to non-commander");
			return computable.declareComputationStart();
		}).then(function() {
			return computable.isComputationStarted.call();
		}).then(function(flag) {
			assert.equal(flag, true, "computation started"); 
			wait(1000);
			return computable.declareCheckingEnd();
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to early end declaration");
			wait(3000);
			return computable.declareCheckingEnd();
		}).then(function() {
			return computable.isComputationStarted.call();
		}).then(function(flag) {
			assert.equal(flag, false, "computation ended"); 
		});
	});
});