var RegressionDataComputation = artifacts.require("./RegressionDataComputation.sol");

contract('performance 23', function(accounts) {

	this.web3.eth.getGasPrice(function(error, result) {
		console.log("Gas Price is " + Number(result) + " wei")
	})

	RegressionDataComputation.new(20, 100, 3, 10, 30, 5, 2).then(function(instance) {
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
		return regressionDataComputation.register({from: accounts[61], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[62], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[63], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[64], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[65], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[66], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[67], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[68], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[69], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[70], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[71], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[72], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[73], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[74], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[75], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[76], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[77], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[78], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[79], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[80], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[81], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[82], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[83], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[84], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[85], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[86], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[87], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[88], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[89], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[90], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[91], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[92], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[93], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[94], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[95], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[96], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[97], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[98], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[99], value: 20})
	}).then(function() {
		return regressionDataComputation.register({from: accounts[100], value: 20})
	}).then(function() {
		return regressionDataComputation.addDataStorer(accounts[101])
	}).then(function() {
		return regressionDataComputation.addRequester(accounts[101])
	}).then(function() {
		return regressionDataComputation.store([1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([2, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([3, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {	
		return regressionDataComputation.store([4, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([5, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([6, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([7, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([8, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {	
		return regressionDataComputation.store([9, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([10, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([11, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([12, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([13, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {	
		return regressionDataComputation.store([14, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([15, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([16, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([17, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([18, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {	
		return regressionDataComputation.store([19, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([20, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([21, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([22, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([23, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {	
		return regressionDataComputation.store([24, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([25, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([26, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([27, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([28, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {	
		return regressionDataComputation.store([29, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.store([30, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [2017, 1, 1], {from: accounts[101]})
	}).then(function() {
		return regressionDataComputation.request(123, [2017, 1, 1], [2017, 1, 1], {from: accounts[101], value: 10})
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

		return regressionDataComputation.compute.estimateGas(123, {from: accounts[61]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[62]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[63]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[64]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[65]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[66]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[67]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[68]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[69]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[70]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[71]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[72]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[73]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[74]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[75]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[76]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[77]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[78]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[79]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[80]})
	}).then(function(result) {
		console.log(Number(result))	
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[81]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[82]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[83]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[84]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[85]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[86]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[87]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[88]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[89]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[90]})
	}).then(function(result) {
		console.log(Number(result))	
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[91]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[92]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[93]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[94]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[95]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[96]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[97]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[98]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[99]})
	}).then(function(result) {
		console.log(Number(result))
		return regressionDataComputation.compute.estimateGas(123, {from: accounts[100]})
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