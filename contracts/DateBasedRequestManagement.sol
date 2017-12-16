pragma solidity ^0.4.13;

library DateBasedRequestManagement {

	struct DateBasedRequest {
		address requester; 
		uint[3] from;
		uint[3] to;
		uint submittedFees;
	}

	struct DateBasedRequestWarehouse {
		mapping(uint => DateBasedRequest) requests;
		uint[255] requestIDs; 
		uint8 size;
	}

	function cleanDelete(DateBasedRequestWarehouse storage self) public {
		for(uint8 i = 0; i < self.size; i++)
			delete self.requests[self.requestIDs[i]]; 
		delete self.requestIDs;
		delete self.size;
	}

	function isEmpty(DateBasedRequestWarehouse storage self) constant public returns(bool) {
		if(self.size == 0) return true;
		return false;
	}

	function isFull(DateBasedRequestWarehouse storage self) constant public returns(bool) {
		if(self.size == 255) return true;
		return false; 
	}
 
	function size(DateBasedRequestWarehouse storage self) constant public returns(uint8) {
		return self.size;
	}

	function insert(DateBasedRequestWarehouse storage self, uint _requestID, address _requester, uint[3] _from, uint[3] _to, uint _submittedFees)
		isNotFull(self)
		isRequestNotExist(self, _requestID)
		public
	{
		self.requestIDs[self.size] = _requestID; 
		self.requests[_requestID] = DateBasedRequest({
			requester: _requester,
			from: _from,
			to: _to, 
			submittedFees: _submittedFees
		});  
		self.size++;
	}

	function remove(DateBasedRequestWarehouse storage self, uint requestID)
		isNotEmpty(self)
		isRequestExist(self, requestID)
		public returns(bool) 
	{
		uint8 removePos = 0;
		for(uint8 i = 0; i < self.size; i++) {
			if(self.requestIDs[i] == requestID) {
				removePos = i;
				break;
			}
		}

		for(uint8 j = removePos; j < self.size - 1; j++) {
			self.requestIDs[j] = self.requestIDs[j+1];
		}
		
		delete self.requests[requestID];
		self.size--;
	}

	function getRequestID(DateBasedRequestWarehouse storage self, uint8 index) 
		isIndexSmallerThanSize(self, index) 
		constant public returns(uint) 
	{
		return self.requestIDs[index]; 
	}

	function getRequester(DateBasedRequestWarehouse storage self, uint requestID) 
		constant public returns(address) 
	{
		return self.requests[requestID].requester;
	}

	function getFrom(DateBasedRequestWarehouse storage self, uint requestID) 
		constant public returns(uint[3]) 
	{
		return self.requests[requestID].from;
	}

	function getTo(DateBasedRequestWarehouse storage self, uint requestID) 
		constant public returns(uint[3]) 
	{
		return self.requests[requestID].to;
	}

	function getSubmittedFees(DateBasedRequestWarehouse storage self, uint requestID) 
		constant public returns(uint) 
	{
		return self.requests[requestID].submittedFees;
	}

	modifier isNotEmpty(DateBasedRequestWarehouse storage self) {
		require(!isEmpty(self));
		_; 
	}

	modifier isNotFull(DateBasedRequestWarehouse storage self) {
		require(!isFull(self));
		_; 
	}

	modifier isRequestNotExist(DateBasedRequestWarehouse storage self, uint requestID) {
		require(self.requests[requestID].requester == 0); 
		_; 
	}

	modifier isRequestExist(DateBasedRequestWarehouse storage self, uint requestID) {
		require(self.requests[requestID].requester != 0);
		_; 
	}

	modifier isIndexSmallerThanSize(DateBasedRequestWarehouse storage self, uint8 index) {
		require(index < self.size);
		_; 
	}
}