var RegressionDataComputation = artifacts.require("./RegressionDataComputation.sol");

contract('performance 54', function(accounts) {

	this.web3.eth.getGasPrice(function(error, result) {
		console.log("Gas Price is " + Number(result) + " wei")
	})

	RegressionDataComputation.new(20, 10, 10, 10, 30, 5, 2).then(function(instance) {
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
		return regressionDataComputation.addDataStorer(accounts[11])
	}).then(function() {
		return regressionDataComputation.addRequester(accounts[11])
	}).then(function() {
		return regressionDataComputation.store([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([2, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([3, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([4, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([5, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([6, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([7, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([8, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([9, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([10, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([11, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([12, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([13, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([14, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([15, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([16, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([17, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([18, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([19, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([20, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([21, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([22, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([23, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([24, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([25, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([26, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([27, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([28, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([29, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([30, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([31, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([32, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([33, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([34, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([35, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([36, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([37, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([38, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([39, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([40, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([41, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([42, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([43, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([44, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([45, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([46, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([47, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([48, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([49, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([50, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([51, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([52, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([53, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([54, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([55, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([56, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([57, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([58, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {	
		return regressionDataComputation.store([59, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.store([60, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[11]})
	}).then(function() {
		return regressionDataComputation.request(123, [2017, 1, 1], [2017, 1, 1], {from: accounts[11], value: 10})
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
		return regressionDataComputation.getComputationNodesSize.call()
	}).then(function(result) {
		console.log("Total number of computation parties: " + Number(result))
		return regressionDataComputation.getTotalNumberOfShares.call()
	}).then(function(result) {
		console.log("Total number of shares: " + Number(result))
	})
})