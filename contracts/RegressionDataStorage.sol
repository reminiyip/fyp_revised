pragma solidity ^0.4.13;
import "./Registrable.sol";
import "./DateChecker.sol";
import "./AddressQueue.sol";
import "./RegressionShareManagement.sol"; 

contract RegressionDataStorage is Registrable {

	uint8 public splitSize;
	AddressQueue.AddressQueueData internal dataStorers;
	RegressionShareManagement.RegressionShareWarehouse internal data; 

	function RegressionDataStorage(uint _depositThreshold, uint8 _computationNodesCeiling, uint8 _splitSize)
		Registrable(_depositThreshold, _computationNodesCeiling)
		public
	{
		if(_splitSize == 1) _splitSize = 2;
		if(_computationNodesCeiling >= _splitSize)
			splitSize = _splitSize;
		else
			splitSize = _computationNodesCeiling;
	}

	function store(int[] x, int[] y, int[] xy, int[] xsq, uint[3] date)
		isEqualSplitSize(x.length)
		isEqualSplitSize(y.length)
		isEqualSplitSize(xy.length)
		isEqualSplitSize(xsq.length)
		isValidDate(date)
		isDataStorer(msg.sender)
		isComputationNodesSizeEqualOrAboveSplitSize()
		public
	{
		// work around for stack too deep exception
		pushRegressionShares(msg.sender, x, y, xy, xsq, date); 
	}

	// override
	function withdraw() public {
		super.withdraw();
		reallocate(msg.sender); 
	}

	// override
	function setDepositThreshold(uint depositThreshold) public {
		super.setDepositThreshold(depositThreshold);
		for(uint8 i = 0; i < AddressQueue.size(chosens); i++) {
			reallocate(AddressQueue.get(chosens, i)); 
		}
	}

	// override
	function setComputationNodesCeiling(uint8 computationNodesCeiling) public {
		super.setComputationNodesCeiling(computationNodesCeiling);
		for(uint8 i = 0; i < AddressQueue.size(chosens); i++) {
			reallocate(AddressQueue.get(chosens, i)); 
		}
	}

	function setSplitSize(uint8 _splitSize)
		isInitiator(msg.sender)
		isEqualOrBelowComputationNodesCeiling(_splitSize)
		public
	{
		splitSize = _splitSize; 
	}

	function addDataStorer(address addr) 
		isInitiator(msg.sender)
		isNotDataStorer(addr)
		public 
	{
		AddressQueue.enqueue(dataStorers, addr); 
	}

	function restore() 
		isComputationNodesSizeEqualOrAboveSplitSize()
		isInitiator(msg.sender)
		public
	{
		reallocate(msg.sender); 
	}

	function checkSharesSize()
		isRegisteredOrIsInitiator(msg.sender)
		constant public returns(uint)
	{
		return RegressionShareManagement.checkNumberOfShares(data, msg.sender);
	}

	function getDataStorersSize() constant public returns(uint8) {
		return AddressQueue.size(dataStorers); 
	}

	function getTotalNumberOfShares() constant public returns(uint) {
		return RegressionShareManagement.checkTotalNumberOfShares(data); 
	}

	function pushRegressionShares(address _owner, int[] _x, int[] _y, int[] _xy, int[] _xsq, uint[3] _date) private {
		int last = -1;
		uint count = 0;
		uint seed = 0;

		while(count < splitSize) {			
			uint8 randomIndex = AddressQueue.generateRandomIndexWithinSize(computationNodes, seed); 
			if(randomIndex != last) {
				address chosen = AddressQueue.get(computationNodes, randomIndex);
				RegressionShareManagement.addShare(data, chosen, _owner, _x[count], 
					_y[count], _xy[count], _xsq[count], _date); 

				count++;
				last = randomIndex;
			}
			seed++;
		}
	}

	function reallocate(address addr) internal {
		// let the initiator to hold the shares of data when computationNodes size < splitSize
		if(AddressQueue.size(computationNodes) < splitSize) {
			for(uint i = 0; i < RegressionShareManagement.checkNumberOfShares(data, addr); i++)
				RegressionShareManagement.copyShare(data, initiator, addr, i); 
		} else { 
			int last = -1;
			uint count = 0;
			uint seed = 0;
			while(count < RegressionShareManagement.checkNumberOfShares(data, addr)) {
				uint8 randomIndex = AddressQueue.generateRandomIndexWithinSize(computationNodes, seed); 
				if(randomIndex != last) {
					address chosen = AddressQueue.get(computationNodes, randomIndex); 
					RegressionShareManagement.copyShare(data, chosen, addr, count); 
					count++;
					last = randomIndex;
				}
				seed++; 
			}
		}
		RegressionShareManagement.deleteShares(data, addr); 
	}

	modifier isEqualSplitSize(uint size) {
		require(size == splitSize);
		_;
	}

	modifier isValidDate(uint[3] date) {
		require(DateChecker.isValidDate(date)); 
		_;
	}

	modifier isDataStorer(address addr) {
		require(AddressQueue.indexOf(dataStorers, addr) != -1); 
		_; 
	}

	modifier isNotDataStorer(address addr) {
		require(AddressQueue.indexOf(dataStorers, addr) == -1); 
		_; 
	}

	modifier isComputationNodesSizeEqualOrAboveSplitSize() {
		require(AddressQueue.size(computationNodes) >= splitSize); 
		_;
	}

	modifier isEqualOrBelowComputationNodesCeiling(uint8 size) {
		require(size <= computationNodesCeiling && size > 1);
		_; 
	}

	modifier isRegisteredOrIsInitiator(address addr) {
		require(nodes[addr] != 0 || addr == initiator);
		_;  
	}
}