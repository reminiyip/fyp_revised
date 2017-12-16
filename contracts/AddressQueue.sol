pragma solidity ^0.4.13;

// `delete` can't shrink the array length
// `push` insert the element based on its length
//  it's difficut to manipuate a dynamic array due to these 2 factors, hence here I use a large static array
library AddressQueue {

	// unit8 can represent 0 to 255, if the queue holds 256 addresses, this will cause overflow
	struct AddressQueueData {
		address[255] queue;
		uint8 size;
	}

	function size(AddressQueueData storage self) constant public returns(uint8) {
		return self.size; 
	}

	function isEmpty(AddressQueueData storage self) constant public returns(bool) {
		if(self.size == 0) return true;
		return false;
	}

	function isFull(AddressQueueData storage self) constant public returns(bool) {
		if(self.size == 255) return true;
		return false;
	}

	function get(AddressQueueData storage self, uint8 index) 
		isIndexSmallerThanSize(self, index)
		public returns(address) 
	{
		return self.queue[index]; 
	}

	function enqueue(AddressQueueData storage self, address addr) 
		isNotFull(self)
		public
	{
		self.queue[self.size] = addr;
		self.size++;
	}

	function dequeue(AddressQueueData storage self) 
		isNotEmpty(self)
		public returns (address) 
	{
		address addr = self.queue[0];
		for(uint8 i = 0; i < self.size - 1; i++) {
			self.queue[i] = self.queue[i+1]; 
		}
		self.size--;
		return addr;
	}

	function indexOf(AddressQueueData storage self, address addr) constant public returns (int) {
		for(uint8 i = 0; i < self.size; i++) {
			if(self.queue[i] == addr) return i;
		}
		return -1;
	}

	function remove(AddressQueueData storage self, uint8 index) 
		isIndexSmallerThanSize(self, index)
		public
	{
		for(uint8 i = index; i < self.size - 1; i++) {
			self.queue[i] = self.queue[i+1];
		}
		self.size--;
	}

	function jumpQueueAtHead(AddressQueueData storage self, address addr) 
		isNotFull(self)
		public
	{
		for(uint i = self.size; i > 0; i--) {
			self.queue[i] = self.queue[i-1];
		}
		self.queue[0] = addr;
		self.size++;
	}

	function generateRandomIndexWithinSize(AddressQueueData storage self, uint seed) constant public returns(uint8) {
		uint randomFirst = uint(block.blockhash(block.number - 1));
		uint randomSecond = uint(keccak256(seed)); 
		return uint8((randomFirst + randomSecond) % self.size);
	}

	modifier isNotEmpty(AddressQueueData storage self) {
		require(!isEmpty(self));
		_; 
	}

	modifier isNotFull(AddressQueueData storage self) {
		require(!isFull(self));
		_; 
	}

	modifier isIndexSmallerThanSize(AddressQueueData storage self, uint8 index) {
		require(index < self.size);
		_; 
	}
}