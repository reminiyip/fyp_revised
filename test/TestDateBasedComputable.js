var DateBasedComputable = artifacts.require("./DateBasedComputable.sol");

contract('DateBasedComputable', function(accounts) {

	// should have a better way
	function wait(ms) {
		var start = new Date().getTime();
		var end = start;
		while(end < start + ms) {
			end = new Date().getTime(); 
		}
	}

	it("should allow the requester to place and cancel request", function() {
		return DateBasedComputable.new(10, 2, 1, 2).then(function(instance) {
			dateBasedComputable = instance;
			dateBasedComputable.addRequester(accounts[1]); 
		}).then(function() {
			return dateBasedComputable.request(999, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 20}); 
		}).then(function() {
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 1, "there should be 1 request");
			return dateBasedComputable.request(899, [2016, 1, 1], [2016, 10, 1], {from: accounts[2], value: 5}); 
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to non-requester");
			return dateBasedComputable.request(899, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 5}); 
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to insufficient computation fees");
			return dateBasedComputable.request(899, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 20}); 
		}).then(function() {
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 2, "there should be 2 requests");
			return dateBasedComputable.request(799, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 20}); 
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to exceeding request ceiling");
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 2, "there should be 2 requests");
			return dateBasedComputable.getRequestNumber({from: accounts[1]});
		}).then(function(number) {
			assert.equal(number, 2, "accounts[1] should have 2 requests");
			return dateBasedComputable.cancel(999, {from: accounts[1]});
		}).then(function() {
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 1, "there should be a request");
			return dateBasedComputable.getRequestNumber({from: accounts[1]});
		}).then(function(number) {
			assert.equal(number, 1, "accounts[1] should have a request"); 
			return dateBasedComputable.request(899, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 20}); 
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to duplicated request");
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 1, "there should be 1 request");
			return dateBasedComputable.request(799, [2016, 1, 1], [2015, 12, 31], {from: accounts[1], value: 20}); 
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to invalid frame");
			return dateBasedComputable.request(799, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 20}); 
		}).then(function() {
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 2, "there should be 2 requests");
		}); 
	});

	it("should disallow request and cancel after computation start", function() {
		return DateBasedComputable.new(10, 2, 1, 2).then(function(instance) {
			dateBasedComputable = instance;
			dateBasedComputable.addRequester(accounts[1]); 
		}).then(function() {
			return dateBasedComputable.request(999, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 20}); 
		}).then(function() {
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 1, "there should be 1 request");
			return dateBasedComputable.getRequestNumber({from: accounts[1]});
		}).then(function(number) {
			assert.equal(number, 1, "accounts[1] should have a request");
			return dateBasedComputable.declareComputationStart();
		}).then(function() {
			return dateBasedComputable.request(899, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 20}); 
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to placing request during computation time");
			return dateBasedComputable.cancel(999, {from: accounts[1]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to cancelling request during computation time");
			wait(4000);
			return dateBasedComputable.cancel(999, {from: accounts[1]});
		}).catch(function(err) {
			assert.isAbove(err.message.search("invalid opcode"), -1, "Invalid opcode should be thrown due to commander hasn't declared end of computation");
			return dateBasedComputable.getTotalRequestsNumber.call();
		}).then(function(number) {
			assert.equal(number, 1, "there should be 1 request");
			return dateBasedComputable.getRequestNumber({from: accounts[1]});
		}).then(function(number) {
			assert.equal(number, 1, "accounts[1] should have a request");
			return dateBasedComputable.declareCheckingEnd();
		}).then(function() {
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 0, "there should be 0 request");
			return dateBasedComputable.getRequestNumber({from: accounts[1]});
		}).then(function(number) {
			assert.equal(number, 0, "accounts[1] should have no request");
			return dateBasedComputable.request(899, [2016, 1, 1], [2016, 10, 1], {from: accounts[1], value: 20}); 
		}).then(function() {
			return dateBasedComputable.getTotalRequestsNumber.call()
		}).then(function(number) {
			assert.equal(number, 1, "there should be 1 request");
		}); 
	});
});