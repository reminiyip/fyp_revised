pragma solidity ^0.4.13;
import "./RegressionDataStorage.sol";
import "./DateBasedComputable.sol";
import "./RegressionResultManagement.sol";
import "./DateChecker.sol"; 

// During computation, any operations invovled reallocation of shares & changes in computationNodes shall be forbidden

contract RegressionDataComputation is RegressionDataStorage, DateBasedComputable {

	RegressionResultManagement.RegressionResultWarehouse internal results;
	address[] internal cheaters;
	address[] internal honests; 

	function RegressionDataComputation(
		uint depositThreshold, uint8 computationNodesCeiling, uint8 splitSize, 
		uint computationFeesThreshold, uint computationPeriodInSecond, uint checkingPeriodInSecond, uint8 requestCeilingPerRequester) 
		RegressionDataStorage(depositThreshold, computationNodesCeiling, splitSize)
		DateBasedComputable(computationFeesThreshold, computationPeriodInSecond, checkingPeriodInSecond, requestCeilingPerRequester)
		public
	{
	}

	function compute(uint requestID) 
		isDeclaredComputation()
		iscomputationNode(msg.sender)
		isNotPending(msg.sender)
		onlyBefore(computationEndTime)
		public 
	{
		int X = 0;
		int Y = 0;
		int XY = 0;
		int XSQ = 0;

		uint[3] memory from = DateBasedRequestManagement.getFrom(dateBasedRequests, requestID); 
		uint[3] memory to = DateBasedRequestManagement.getTo(dateBasedRequests, requestID); 

		for(uint i = 0; i < RegressionShareManagement.checkNumberOfShares(data, msg.sender); i++) {

			if(DateChecker.compareDate(from, RegressionShareManagement.getShareDate(data, msg.sender, i)) <= 0 &&
				DateChecker.compareDate(to, RegressionShareManagement.getShareDate(data, msg.sender, i)) >= 0)
			{
				X += RegressionShareManagement.getShareX(data, msg.sender, i); 
				Y += RegressionShareManagement.getShareY(data, msg.sender, i);
				XY += RegressionShareManagement.getShareXY(data, msg.sender, i);
				XSQ += RegressionShareManagement.getShareXSQ(data, msg.sender, i); 
			}
		}
		RegressionResultManagement.submitResult(results, requestID, msg.sender, X, Y, XY, XSQ); 
	}

	function checkResult(uint requestID)
		isRequestOwner(requestID, msg.sender)
		isDeclaredComputation()
		isAllSubmittedResult(requestID)
		public constant returns (int[4])
	{
		return RegressionResultManagement.getSummation(results, requestID); 
	}

	// override
	function declareComputationStart() isInitiatorNotHoldShares() public {
		super.declareComputationStart(); 
	}

	// override
	function declareCheckingEnd() public {
		judge();			
		RegressionResultManagement.cleanDelete(results); 
		super.declareCheckingEnd(); 
	}

	function judge() private {

		for(uint8 i = 0; i < DateBasedRequestManagement.size(dateBasedRequests); i++) {

			uint requestID = DateBasedRequestManagement.getRequestID(dateBasedRequests, i); 
			address requester = DateBasedRequestManagement.getRequester(dateBasedRequests, requestID); 
			uint submittedFees = DateBasedRequestManagement.getSubmittedFees(dateBasedRequests, requestID); 
			uint portion = submittedFees / AddressQueue.size(computationNodes); 

			for(uint8 j = 0; j < AddressQueue.size(computationNodes); j++) {
				address computationNode = AddressQueue.get(computationNodes, j); 
				if(!RegressionResultManagement.isSubmitted(results, requestID, computationNode))
					cheaters.push(computationNode); 
				else
					honests.push(computationNode);
			}

			for(uint k = 0; k < honests.length; k++)
				reward(portion, honests[k]);

			// prevent division by zero
			if(cheaters.length != 0) {
				uint penalty = honests.length * portion / cheaters.length; 
				for(uint l = 0; l < cheaters.length; l++)
					penalize(penalty, cheaters[l], requester);
			}

			uint remaining = submittedFees - honests.length * portion; 
			delete honests;
			delete cheaters;
			if(remaining > 0) requester.transfer(remaining);
		}
	}

	function penalize(uint penalty, address cheater, address requester) internal {

		uint penaltyRevised;
		if(nodes[cheater] < penalty) {
			penaltyRevised = nodes[cheater];
			nodes[cheater] = 0;
		} else {
			penaltyRevised = penalty;
			nodes[cheater] -= penalty; 
		}

		requester.transfer(penaltyRevised); 

		if(nodes[cheater] < depositThreshold) {
			uint amount = nodes[cheater];
			nodes[cheater] = 0;
			uint8 computationNodeIndex = uint8(AddressQueue.indexOf(computationNodes, cheater)); 
			AddressQueue.remove(computationNodes, computationNodeIndex); 
			if(amount > 0) cheater.transfer(amount); 
			reallocate(cheater); 
		}
	}

	function reward(uint portion, address rewardee) internal {
		rewardee.transfer(portion); 
	}

	function isSubmitted(uint requestID) 
		iscomputationNode(msg.sender)
		isNotPending(msg.sender)
		public constant returns(bool) 
	{
		return RegressionResultManagement.isSubmitted(results, requestID, msg.sender);
	}

	// override
	function register() payable isNotDeclaredComputation() public {
		super.register(); 
	}

	// override
	function withdraw() isNotDeclaredComputation() public {
		super.withdraw(); 
	}

	// override
	function setDepositThreshold(uint depositThreshold) isNotDeclaredComputation() public {
		super.setDepositThreshold(depositThreshold);
	}

	// override
	function setComputationNodesCeiling(uint8 computationNodesCeiling) isNotDeclaredComputation() public {
		super.setComputationNodesCeiling(computationNodesCeiling);
	}

	// override
	function setSplitSize(uint8 splitSize) isNotDeclaredComputation() public {
		super.setSplitSize(splitSize);
	}

	// override 
	function store(int[] _x, int[] _y, int[] _xy, int[] _xsq, uint[3] _date) isNotDeclaredComputation() public {
		super.store(_x, _y, _xy, _xsq, _date); 
	}

	// override 
	function restore() isNotDeclaredComputation() public {
		super.restore();
	}

	modifier isInitiatorNotHoldShares() {
		require(RegressionShareManagement.checkNumberOfShares(data, initiator) == 0); 
		_; 
	}

	modifier isNotPending(address addr) {
		require(AddressQueue.indexOf(computationNodes, addr) != -1); 
		_;
	}

	modifier onlyBefore(uint time) { 
		require(now < time);
		_; 
	}

	modifier isAllSubmittedResult(uint requestID) {
		require(RegressionResultManagement.getSubmittedNumber(results, requestID) == AddressQueue.size(computationNodes)); 
		_; 
	}
}