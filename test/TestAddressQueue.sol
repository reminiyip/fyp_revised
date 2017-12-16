pragma solidity ^0.4.13;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/AddressQueue.sol";

contract TestAddressQueue {

	AddressQueue.AddressQueueData testAddressQueueOne; 
	AddressQueue.AddressQueueData testAddressQueueTwo; 
	AddressQueue.AddressQueueData testAddressQueueThree; 

	function testInitialUsingDeployedContract() {
		Assert.equal(uint(AddressQueue.size(testAddressQueueOne)), 0, "address queue size should be 0");
		Assert.equal(AddressQueue.isEmpty(testAddressQueueOne), true, "address queue should be empty");
	}

	function testEnqueue() {
		AddressQueue.enqueue(testAddressQueueOne, address(1)); 
		Assert.equal(uint(AddressQueue.size(testAddressQueueOne)), 1, "address queue size should be 1 after enqeueueing an item");
		Assert.equal(AddressQueue.isEmpty(testAddressQueueOne), false, "address queue should not be empty after enqueueing an item");
		Assert.equal(AddressQueue.get(testAddressQueueOne, 0), address(1), "the first item should be an address of 0x1");
	}

	function testJumpQueueAtHead() {
		AddressQueue.jumpQueueAtHead(testAddressQueueOne, address(2)); 
		Assert.equal(uint(AddressQueue.size(testAddressQueueOne)), 2, "address queue size should be 2 after an item jumps the queue");
		Assert.equal(AddressQueue.get(testAddressQueueOne, 0), address(2), "the first item should be an address of 0x2");
	}

	function testDequeue() {
		address addr = AddressQueue.dequeue(testAddressQueueOne);
		Assert.equal(uint(AddressQueue.size(testAddressQueueOne)), 1, "address queue size should be 1 after dequeueing an item");
		Assert.equal(addr, address(2), "the dequeued item should be an address of 0x2");
	}

	function testIndexOfAndRemove() {
		for(int i = 10; i > 0; i--) 
			AddressQueue.enqueue(testAddressQueueTwo, address(i));

		int indexForAddressSeven = AddressQueue.indexOf(testAddressQueueTwo, address(7)); 
		Assert.equal(indexForAddressSeven, 3, "address of 0x7 should have an index of 3");

		AddressQueue.remove(testAddressQueueTwo, uint8(indexForAddressSeven)); 
		Assert.equal(AddressQueue.indexOf(testAddressQueueTwo, address(7)), -1, "address of 0x7 should have an index of -1 after being removed");
		Assert.equal(uint(AddressQueue.size(testAddressQueueTwo)), 9, "address queue size should be 9 after removing an item");
	}

	// the gas limit forbids me to loop from 0 to 255
	function testHalfFull() {
		for(int i = 0; i < 128; i++)
			AddressQueue.enqueue(testAddressQueueThree, address(i));
		Assert.equal(uint(AddressQueue.size(testAddressQueueThree)), 128, "address queue size should be 128");
		Assert.equal(AddressQueue.isFull(testAddressQueueThree), false, "address queue should be half-full after enqueueing 128 items");
	}

	function testFull() {
		for(int i = 128; i < 255; i++)
			AddressQueue.enqueue(testAddressQueueThree, address(i));
		Assert.equal(uint(AddressQueue.size(testAddressQueueThree)), 255, "address queue size should be 255");
		Assert.equal(AddressQueue.isFull(testAddressQueueThree), true, "address queue should be full after enqueueing another 127 items");
	}

	// may have better way to test
	function testRandomIndex() {
		uint8 randomOne = AddressQueue.generateRandomIndexWithinSize(testAddressQueueOne, AddressQueue.size(testAddressQueueOne)); 
		uint8 randomTwo = AddressQueue.generateRandomIndexWithinSize(testAddressQueueTwo, AddressQueue.size(testAddressQueueTwo)); 
		uint8 randomThree = AddressQueue.generateRandomIndexWithinSize(testAddressQueueThree, AddressQueue.size(testAddressQueueThree)); 

		Assert.equal(uint(randomOne), 0, "the random index should be 0 when the size is 1");
		Assert.isBelow(uint(randomTwo), uint(AddressQueue.size(testAddressQueueTwo)), "the random index should < 9 when the size is 9");
		Assert.isBelow(uint(randomThree), uint(AddressQueue.size(testAddressQueueThree)), "the random index should < 255 when the size is 255");
	}
}