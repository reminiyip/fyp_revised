pragma solidity ^0.4.13;

library RegressionResultManagement {

	struct RegressionResult {
		address submitter;
		int x;
		int y;
		int xy;
		int xsq;
	}

	struct SubmissionRecord {
		uint requestID; 
		address submitter;
	}

	struct RegressionResultWarehouse {
		mapping(uint => mapping(address => bool)) submittedFlags;
		mapping(uint => RegressionResult[]) results;
		
		SubmissionRecord[] records;
		uint[] requestIDs; 
	}

	function cleanDelete(RegressionResultWarehouse storage self) {
		for(uint i = 0; i < self.records.length; i++)
			delete self.submittedFlags[self.records[i].requestID][self.records[i].submitter];
		for(uint j = 0; j < self.requestIDs.length; j++)
			delete self.results[self.requestIDs[j]];
		delete self.records;
		delete self.requestIDs;
	}

	function submitResult(RegressionResultWarehouse storage self, uint _requestID, address _submitter, int _x, int _y, int _xy, int _xsq) 
		isNotSubmitted(self, _requestID, _submitter)
		public 
	{
		if(self.results[_requestID].length == 0)
			self.requestIDs.push(_requestID);

		self.results[_requestID].push(RegressionResult({
			submitter: _submitter,
			x: _x,
			y: _y,
			xy: _xy,
			xsq: _xsq
		}));
		self.submittedFlags[_requestID][_submitter] = true;

		self.records.push(SubmissionRecord({
			requestID: _requestID,
			submitter: _submitter
		}));
	}

	function getSubmittedNumber(RegressionResultWarehouse storage self, uint requestID) public constant returns(uint) {
		return self.results[requestID].length; 
	}

	function getSummation(RegressionResultWarehouse storage self, uint requestID) public constant returns (int[4]) {

		int finalX = 0;
		int finalY = 0;
		int finalXY = 0;
		int finalXSQ = 0;

		for(uint i = 0; i < self.results[requestID].length; i++) {
			finalX += self.results[requestID][i].x;
			finalY += self.results[requestID][i].y;
			finalXY += self.results[requestID][i].xy;
			finalXSQ += self.results[requestID][i].xsq;
		}

		return [finalX, finalY, finalXY, finalXSQ]; 
	}

	function isSubmitted(RegressionResultWarehouse storage self, uint requestID, address addr) public constant returns(bool) {
		return self.submittedFlags[requestID][addr]; 
	}

	modifier isNotSubmitted(RegressionResultWarehouse storage self, uint requestID, address addr) {
		require(self.submittedFlags[requestID][addr] == false);
		_; 
	}
}