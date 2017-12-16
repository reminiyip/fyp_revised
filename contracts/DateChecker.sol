pragma solidity ^0.4.13;

library DateChecker {

	// Assume that both are valid dates
	function compareDate(uint[3] dateOne, uint[3] dateTwo) constant public returns (int) {

		uint yearOne = dateOne[0];
		uint monthOne = dateOne[1];
		uint dayOne = dateOne[2];

		uint yearTwo = dateTwo[0];
		uint monthTwo = dateTwo[1];
		uint dayTwo = dateTwo[2];

		if(yearOne == yearTwo) {
			if(monthOne == monthTwo) {
				if(dayOne == dayTwo) return 0;
				else if (dayOne < dayTwo) return -1;
				else return 1;
			} else if(monthOne < monthTwo) return -1;
			else return 1;
		} else if(yearOne < yearTwo) return -1;
		else return 1;
	}

	function isValidDate(uint[3] date) constant public returns(bool) {

		uint year = date[0];
		uint month = date[1];
		uint day = date[2];

		if(!(year >= 0 && year <= 9999)) return false;
		if(!(month >= 1 && month <= 12)) return false;

		uint8[12] memory supposedDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		uint8[12] memory supposedDaysForLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		if(isLeapYear(year))
			return (day <= supposedDaysForLeapYear[month - 1] && day >= 1);
		return (day <= supposedDays[month - 1] && day >= 1); 
	}

	function isLeapYear(uint year) constant private returns(bool) {
		bool result = (year % 4 == 0);
		result = result && (year % 100 != 0);
		result = result || (year % 400 == 0);
		return result;
	}
}