pragma solidity ^0.4.13;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DateChecker.sol";

contract TestDateChecker {

	function testYear() {
		uint[3] memory testDateOne = [uint(0), 1, 1];
		Assert.equal(DateChecker.isValidDate(testDateOne), true, "0000-01-01 is a valid date"); 

		uint[3] memory testDateTwo = [uint(9999), 12, 31]; 
		Assert.equal(DateChecker.isValidDate(testDateTwo), true, "9999-12-31 is a valid date");

		uint[3] memory testDateThree = [uint(10000), 1, 1];
		Assert.equal(DateChecker.isValidDate(testDateThree), false, "10000-01-01 is not a valid date");
	}

	function testMonth() {
		uint[3] memory testDateOne = [uint(2017), 0, 1];
		Assert.equal(DateChecker.isValidDate(testDateOne), false, "2017-0-01 is not a valid date"); 

		uint[3] memory testDateTwo = [uint(2017), 13, 1];
		Assert.equal(DateChecker.isValidDate(testDateTwo), false, "2017-13-01 is not a valid date");
	}

	function testDay() {
		uint[3] memory testDateOne = [uint(2016), 2, 29];
		Assert.equal(DateChecker.isValidDate(testDateOne), true, "2016-02-29 is a valid date");

		uint[3] memory testDateTwo = [uint(2016), 2, 30];
		Assert.equal(DateChecker.isValidDate(testDateTwo), false, "2016-02-30 is not a valid date");

		uint[3] memory testDateThree = [uint(2015), 2, 29];
		Assert.equal(DateChecker.isValidDate(testDateThree), false, "2015-02-29 is not a valid date");
	}

	function testCompareDates() {
		uint[3] memory testDateOne = [uint(2016), 2, 29];
		uint[3] memory testDateTwo = [uint(2016), 2, 29];
		uint[3] memory testDateThree = [uint(2015), 12, 31];
		uint[3] memory testDateFour = [uint(2017), 1, 1];

		Assert.equal(DateChecker.compareDate(testDateOne, testDateTwo), 0, "the two dates should be equal");
		Assert.equal(DateChecker.compareDate(testDateOne, testDateThree), 1, "first date should > second date");
		Assert.equal(DateChecker.compareDate(testDateOne, testDateFour), -1, "first date should < second date");
	}
}