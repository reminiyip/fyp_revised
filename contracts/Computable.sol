pragma solidity ^0.4.13;
import "./AddressQueue.sol";

contract Computable {

	address public commander; 
	uint public computationFeesThreshold;
	uint public computationPeriodInSecond;
	uint public computationEndTime;
	uint public checkingPeriodInSecond;
	uint public checkingEndTime;
	uint8 public requestCeilingPerRequester;
	bool public isComputationStarted;
	AddressQueue.AddressQueueData internal requesters;

	function Computable(uint _computationFeesThreshold, uint _computationPeriodInSecond, uint _checkingPeriodInSecond, uint8 _requestCeilingPerRequester) public {
		commander = msg.sender;
		computationFeesThreshold = _computationFeesThreshold;
		computationPeriodInSecond = _computationPeriodInSecond;
		checkingPeriodInSecond = _checkingPeriodInSecond;
		requestCeilingPerRequester = _requestCeilingPerRequester;
	}

	function declareComputationStart() 
		isCommander(msg.sender)
		isNotDeclaredComputation()
		public
	{
		computationEndTime = now + computationPeriodInSecond;
		checkingEndTime = computationEndTime + checkingPeriodInSecond;
		isComputationStarted = true;
	}

	function declareCheckingEnd()
		isCommander(msg.sender)
		isDeclaredComputation()
		onlyAfter(checkingEndTime)
	{
		isComputationStarted = false;
	}

	function addRequester(address addr) 
		isCommander(msg.sender)
		isNotRequester(addr)
		public
	{
		AddressQueue.enqueue(requesters, addr); 
	}

	function getRequestersSize() constant public returns(uint8) {
		return AddressQueue.size(requesters); 
	}

	function setComputationFeesThreshold(uint _computationFeesThreshold)
		isCommander(msg.sender)
		public
	{
		computationFeesThreshold = _computationFeesThreshold; 
	}

	function setComputationPeriodInSecond(uint _computationPeriodInSecond) 
		isCommander(msg.sender)
		public
	{
		computationPeriodInSecond = _computationPeriodInSecond;
	}

	function setCheckingPeriodInSecond(uint _checkingPeriodInSecond)
		isCommander(msg.sender)
		public
	{
		checkingPeriodInSecond = _checkingPeriodInSecond; 
	}

	function setRequestCeilingPerRequester(uint8 _requestCeilingPerRequester)
		isCommander(msg.sender)
		public
	{
		requestCeilingPerRequester = _requestCeilingPerRequester; 
	}

	modifier isCommander(address addr) {
		require(addr == commander);
		_; 
	}

	modifier onlyAfter(uint time) { 
		require(now > time);
		_; 
	}

	modifier isDeclaredComputation() {
		require(isComputationStarted == true);
		_;
	}

	modifier isNotDeclaredComputation() {
		require(isComputationStarted == false); 
		_; 
	}

	modifier isNotRequester(address addr) {
		require(AddressQueue.indexOf(requesters, addr) == -1);
		_;
	}
}