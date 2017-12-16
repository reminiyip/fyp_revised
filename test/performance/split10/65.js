var RegressionDataComputation = artifacts.require("./RegressionDataComputation.sol");

contract('performance 65', function(accounts) {

	this.web3.eth.getGasPrice(function(error, result) {
		console.log("Gas Price is " + Number(result) + " wei")
	})

	RegressionDataComputation.new(20, 60, 10, 10, 30, 5, 2).then(function(instance) {
		regressionDataComputation = instance
		return regressionDataComputation.register({from: accounts[1], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[2], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[3], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[4], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[5], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[6], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[7], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[8], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[9], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[10], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[11], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[12], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[13], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[14], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[15], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[16], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[17], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[18], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[19], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[20], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[21], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[22], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[23], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[24], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[25], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[26], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[27], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[28], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[29], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[30], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[31], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[32], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[33], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[34], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[35], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[36], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[37], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[38], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[39], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[40], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[41], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[42], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[43], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[44], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[45], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[46], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[47], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[48], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[49], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[50], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[51], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[52], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[53], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[54], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[55], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[56], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[57], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[58], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[59], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[60], value: 20})
	}).then(function() {
		return regressionDataComputation.addDataStorer(accounts[61])
	}).then(function() {
		return regressionDataComputation.addRequester(accounts[61])
	}).then(function() {
		return regressionDataComputation.store([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([2, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([3, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([4, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([5, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([6, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([7, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([8, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([9, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([10, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([11, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([12, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([13, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([14, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([15, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([16, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([17, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([18, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([19, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([20, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([21, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([22, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([23, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([24, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([25, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([26, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([27, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([28, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([29, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([30, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([31, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([32, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([33, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([34, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([35, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([36, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([37, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([38, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([39, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([40, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([41, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([42, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([43, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([44, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([45, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([46, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([47, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([48, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([49, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([50, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([51, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([52, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([53, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([54, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([55, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([56, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([57, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([58, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([59, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([60, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([61, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([62, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([63, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([64, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([65, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([66, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([67, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([68, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([69, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([70, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([71, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([72, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([73, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([74, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([75, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([76, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([77, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([78, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([79, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([80, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([81, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([82, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([83, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([84, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([85, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([86, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([87, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([88, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([89, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([90, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([91, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([92, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([93, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([94, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([95, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([96, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([97, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([98, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {	
		return regressionDataComputation.store([99, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.store([100, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[61]})
	}).then(function() {
		return regressionDataComputation.request(123, [2017, 1, 1], [2017, 1, 1], {from: accounts[61], value: 10})
	}).then(function() {
		return regressionDataComputation.declareComputationStart()
	}).then(function() {
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[1]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[2]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[3]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[4]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[5]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[6]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[7]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[8]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[9]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[10]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[11]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[12]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[13]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[14]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[15]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[16]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[17]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[18]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[19]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[20]})
	}).then(function(result) {
		console.log(Number(result))	
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[21]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[22]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[23]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[24]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[25]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[26]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[27]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[28]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[29]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[30]})
	}).then(function(result) {
		console.log(Number(result))	
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[31]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[32]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[33]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[34]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[35]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[36]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[37]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[38]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[39]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[40]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[41]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[42]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[43]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[44]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[45]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[46]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[47]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[48]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[49]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[50]})
	}).then(function(result) {
		console.log(Number(result))	
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[51]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[52]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[53]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[54]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[55]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[56]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[57]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[58]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[59]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[60]})
	}).then(function(result) {
		console.log(Number(result))	
		return regressionDataComputation.getComputationNodesSize.call()
	}).then(function(result) {
		console.log("Total number of computation parties: " + Number(result))
		return regressionDataComputation.getTotalNumberOfShares.call()
	}).then(function(result) {
		console.log("Total number of shares: " + Number(result))
	})
})