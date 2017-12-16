pragma solidity ^0.4.13;
import "./AddressQueue.sol";

// state variables are defaulted to be internal, functions are defaulted to be public
// consider the case which all the thresholds and ceilings are fixed after initialization
// constructor cannot have modifier, this is a temporary work around

contract Registrable {

	uint public depositThreshold;
	uint8 public computationNodesCeiling;
	address public initiator;
	mapping(address => uint) internal nodes;
	AddressQueue.AddressQueueData internal computationNodes; 
	AddressQueue.AddressQueueData internal pendingNodes;
	AddressQueue.AddressQueueData internal chosens;

	function Registrable(uint _depositThreshold, uint8 _computationNodesCeiling) public {
		depositThreshold = _depositThreshold;
		computationNodesCeiling = _computationNodesCeiling;
		initiator = msg.sender;
	}

	function register() 
		payable
		isEqualOrAboveDepositThreshold(msg.value)
		isNotcomputationNode(msg.sender)
		public
	{
		nodes[msg.sender] = msg.value;

		if(AddressQueue.size(computationNodes) < computationNodesCeiling) {
			AddressQueue.enqueue(computationNodes, msg.sender); 
		} else {
			AddressQueue.enqueue(pendingNodes, msg.sender); 
		}
	}

	function withdraw() 
		iscomputationNode(msg.sender)
		public
	{
		uint amount = nodes[msg.sender];
		nodes[msg.sender] = 0;

		uint8 index = uint8(AddressQueue.indexOf(computationNodes, msg.sender)); 
		AddressQueue.remove(computationNodes, index); 

		if(!AddressQueue.isEmpty(pendingNodes))
			AddressQueue.enqueue(computationNodes, AddressQueue.dequeue(pendingNodes)); 

		if(amount > 0) msg.sender.transfer(amount);
	}

	function contribute()
		payable 
		iscomputationNode(msg.sender)
		public
	{
		nodes[msg.sender] += msg.value;
	}

	// return those who get removed from computationNodes
	function setDepositThreshold(uint _depositThreshold) 
		isInitiator(msg.sender)
		public
	{
		delete chosens; 
		depositThreshold = _depositThreshold;

		uint8 originalcomputationNodesSize = AddressQueue.size(computationNodes); 
		uint8 i = 0;
		while(i < originalcomputationNodesSize) {
			address computationNode = AddressQueue.get(computationNodes, 0); 
			uint cAmount = nodes[computationNode]; 
			if(cAmount < depositThreshold) {
				AddressQueue.remove(computationNodes, 0); 
				AddressQueue.enqueue(chosens, computationNode);
				nodes[computationNode] = 0; 
				if(cAmount > 0) computationNode.transfer(cAmount);
			} else 
				AddressQueue.enqueue(computationNodes, AddressQueue.dequeue(computationNodes)); 
			i++;
		}

		uint8 originalPendingNodesSize = AddressQueue.size(pendingNodes); 
		uint8 j = 0;
		while(j < originalPendingNodesSize) {
			address pending = AddressQueue.get(pendingNodes, 0); 
			uint pAmount = nodes[pending];
			if(pAmount < depositThreshold) {
				AddressQueue.remove(pendingNodes, 0); 
				nodes[pending] = 0;
				if(pAmount > 0) pending.transfer(pAmount); 
			} else
				AddressQueue.enqueue(pendingNodes, AddressQueue.dequeue(pendingNodes)); 
			j++;
		}

		approvePendingNodes(); 
	}

	// return those who get removed from computationNodes
	function setComputationNodesCeiling(uint8 _computationNodesCeiling) 
		isInitiator(msg.sender)
		public
	{
		delete chosens;
		computationNodesCeiling = _computationNodesCeiling;

		while(AddressQueue.size(computationNodes) > computationNodesCeiling) {

			uint8 randomIndex = AddressQueue.generateRandomIndexWithinSize(computationNodes, AddressQueue.size(computationNodes));
			address chosen = AddressQueue.get(computationNodes, randomIndex); 
			AddressQueue.remove(computationNodes, randomIndex);
			AddressQueue.jumpQueueAtHead(pendingNodes, chosen); 
			AddressQueue.enqueue(chosens, chosen);
		}

		approvePendingNodes(); 
	}

	function approvePendingNodes() private {
		while(AddressQueue.size(computationNodes) < computationNodesCeiling && !AddressQueue.isEmpty(pendingNodes)) {
			AddressQueue.enqueue(computationNodes, AddressQueue.dequeue(pendingNodes)); 
		}
	}

	function checkContractBalance() isInitiator(msg.sender) constant public returns(uint) {
		return this.balance;
	}

	function checkBalance() constant public returns(uint) {
		return nodes[msg.sender]; 
	}

	function checkPendingTicketNumber() constant public returns(int) {
		return AddressQueue.indexOf(pendingNodes, msg.sender); 
	}

	function getComputationNodesSize() constant public returns(uint8) {
		return AddressQueue.size(computationNodes); 
	}

	function getPendingNodesSize() constant public returns(uint8) {
		return AddressQueue.size(pendingNodes); 
	}

	modifier isInitiator(address addr) {
		require(addr == initiator);
		_; 
	}

	modifier isEqualOrAboveDepositThreshold(uint value) {
		require(value >= depositThreshold);
		_;
	}

	modifier iscomputationNode(address addr) {
		require(nodes[addr] != 0);
		_;
	}

	modifier isNotcomputationNode(address addr) {
		require(nodes[addr] == 0); 
		_;
	}
}