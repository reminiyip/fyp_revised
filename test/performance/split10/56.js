var RegressionDataComputation = artifacts.require("./RegressionDataComputation.sol");

contract('performance 56', function(accounts) {

	this.web3.eth.getGasPrice(function(error, result) {
		console.log("Gas Price is " + Number(result) + " wei")
	})

	RegressionDataComputation.new(20, 30, 10, 10, 30, 5, 2).then(function(instance) {
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
		return regressionDataComputation.addDataStorer(accounts[31])
	}).then(function() {
		return regressionDataComputation.addRequester(accounts[31])
	}).then(function() {
		return regressionDataComputation.store([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[31]})
	}).then(function() {
		return regressionDataComputation.store([2, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[31]})
	}).then(function() {
		return regressionDataComputation.store([3, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[31]})
	}).then(function() {	
		return regressionDataComputation.store([4, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[31]})
	}).then(function() {
		return regressionDataComputation.store([5, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2017, 1, 1], {from: accounts[31]})
	}).then(function() {
		return regressionDataComputation.request(123, [2017, 1, 1], [2017, 1, 1], {from: accounts[31], value: 10})
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
		return regressionDataComputation.getComputationNodesSize.call()
	}).then(function(result) {
		console.log("Total number of computation parties: " + Number(result))
		return regressionDataComputation.getTotalNumberOfShares.call()
	}).then(function(result) {
		console.log("Total number of shares: " + Number(result))
	})
})