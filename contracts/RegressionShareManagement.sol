pragma solidity ^0.4.13;

library RegressionShareManagement {

	struct RegressionShare {
		address owner;
		int x; 
		int y;
		int xy;
		int xsq;
		uint[3] date; 
	}

	struct RegressionShareWarehouse {
		mapping(address => RegressionShare[]) shares;
		uint totalNumberOfShares; 
	}

	function addShare(RegressionShareWarehouse storage self, address _chosen, address _owner, int _x, int _y, int _xy, int _xsq, uint[3] _date) public {
		self.shares[_chosen].push(RegressionShare({
			owner: _owner,
			x: _x,
			y: _y,
			xy: _xy,
			xsq: _xsq,
			date: _date
		}));
		self.totalNumberOfShares++; 
	}

	function deleteShares(RegressionShareWarehouse storage self, address addr) public {
		delete self.shares[addr];
	}

	function copyShare(RegressionShareWarehouse storage self, address newHolder, address oldHolder, uint index) {
		self.shares[newHolder].push(self.shares[oldHolder][index]);
	}

	function checkNumberOfShares(RegressionShareWarehouse storage self, address addr) constant public returns(uint) {
		return self.shares[addr].length; 
	}

	function checkTotalNumberOfShares(RegressionShareWarehouse storage self) constant public returns(uint) {
		return self.totalNumberOfShares; 
	}

	function getShareDate(RegressionShareWarehouse storage self, address addr, uint index) constant public returns(uint[3]) {
		return self.shares[addr][index].date; 
	}

	function getShareX(RegressionShareWarehouse storage self, address addr, uint index) constant public returns(int) {
		return self.shares[addr][index].x;
	}

	function getShareY(RegressionShareWarehouse storage self, address addr, uint index) constant public returns(int) {
		return self.shares[addr][index].y;
	}

	function getShareXY(RegressionShareWarehouse storage self, address addr, uint index) constant public returns(int) {
		return self.shares[addr][index].xy;
	}

	function getShareXSQ(RegressionShareWarehouse storage self, address addr, uint index) constant public returns(int) {
		return self.shares[addr][index].xsq; 
	}
}