var AddressQueue = artifacts.require("./AddressQueue.sol");
var DateChecker = artifacts.require("./DateChecker.sol");
var RegressionShareManagement = artifacts.require("./RegressionShareManagement.sol");
var DateBasedRequestManagement = artifacts.require("./DateBasedRequestManagement.sol");
var RegressionResultManagement = artifacts.require("./RegressionResultManagement.sol"); 

var Registrable = artifacts.require("./Registrable.sol");
var RegressionDataStorage = artifacts.require("./RegressionDataStorage.sol");
var Computable = artifacts.require("./Computable.sol");
var DateBasedComputable = artifacts.require("./DateBasedComputable.sol");
var RegressionDataComputation = artifacts.require("./RegressionDataComputation.sol");

module.exports = function(deployer) {
  deployer.deploy(AddressQueue);
  deployer.link(AddressQueue, [Registrable, RegressionDataStorage, Computable, DateBasedComputable, RegressionDataComputation]);

  deployer.deploy(DateChecker);
  deployer.link(DateChecker, [RegressionDataStorage, DateBasedComputable, RegressionDataComputation]);

  deployer.deploy(RegressionShareManagement); 
  deployer.link(RegressionShareManagement, [RegressionDataStorage, RegressionDataComputation]);

  deployer.deploy(DateBasedRequestManagement);
  deployer.link(DateBasedRequestManagement, [DateBasedComputable, RegressionDataComputation]);

  deployer.deploy(RegressionResultManagement);
  deployer.link(RegressionResultManagement, [RegressionDataComputation]);

  deployer.deploy(Registrable);
  deployer.deploy(RegressionDataStorage);
  deployer.deploy(Computable);
  deployer.deploy(DateBasedComputable); 
  deployer.deploy(RegressionDataComputation); // 5503960
};
