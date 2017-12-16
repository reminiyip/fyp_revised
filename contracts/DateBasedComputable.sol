pragma solidity ^0.4.13;
import "./AddressQueue.sol"; 
import "./DateChecker.sol";
import "./DateBasedRequestManagement.sol"; 
import "./Computable.sol";

contract DateBasedComputable is Computable {

	DateBasedRequestManagement.DateBasedRequestWarehouse internal dateBasedRequests;
	mapping(address => uint8) internal numberOfRequests;

	function DateBasedComputable(uint computationFeesThreshold, uint computationPeriodInSecond, uint checkingingPeriodInSecond, uint8 requestCeilingPerRequester)
		Computable(computationFeesThreshold, computationPeriodInSecond, checkingingPeriodInSecond, requestCeilingPerRequester)
		public 
	{
	}

	// duplication will be checkinged in DateBasedSortedList
	function request(uint requestID, uint[3] from, uint[3] to) 
		payable
		isEqualOrAboveComputationFeesThreshold(msg.value)
		isRequester(msg.sender)
		isNumberOfRequestsBelowRequestCeiling(msg.sender)
		isValidFrame(from, to)
		isNotDeclaredComputation()
		public
	{
		DateBasedRequestManagement.insert(dateBasedRequests, requestID, msg.sender, from, to, msg.value);
		numberOfRequests[msg.sender]++;
	}

	function cancel(uint requestID) 
		isRequestOwner(requestID, msg.sender)
		isNotDeclaredComputation()
		public
	{
		uint amount = DateBasedRequestManagement.getSubmittedFees(dateBasedRequests, requestID); 
		DateBasedRequestManagement.remove(dateBasedRequests, requestID); 
		numberOfRequests[msg.sender]--;
		msg.sender.transfer(amount); 
	}

	function getTotalRequestsNumber() constant public returns(uint8) {
		return DateBasedRequestManagement.size(dateBasedRequests); 
	}

	function getRequestNumber() isRequester(msg.sender) constant public returns(uint8) {
		return numberOfRequests[msg.sender]; 
	}

	// override
	function declareCheckingEnd() public {
		for(uint8 i = 0; i < AddressQueue.size(requesters); i++)
			numberOfRequests[AddressQueue.get(requesters, i)] = 0;
		DateBasedRequestManagement.cleanDelete(dateBasedRequests); 
		super.declareCheckingEnd(); 
	}

	modifier isEqualOrAboveComputationFeesThreshold(uint value) {
		require(value >= computationFeesThreshold);
		_;
	}

	modifier isNumberOfRequestsBelowRequestCeiling(address addr) {
		require(numberOfRequests[addr] < requestCeilingPerRequester); 
		_;
	}

	modifier isRequester(address addr) {
		require(AddressQueue.indexOf(requesters, addr) != -1);
		_; 
	}

	modifier isRequestOwner(uint requestID, address addr) {
		require(DateBasedRequestManagement.getRequester(dateBasedRequests, requestID) == addr); 
		_;
	}

	modifier isValidFrame(uint[3] from, uint[3] to) {
		require(DateChecker.isValidDate(from));
		require(DateChecker.isValidDate(to));
		require(DateChecker.compareDate(from, to) <= 0);
		_;
	}
}