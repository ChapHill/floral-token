const FloralToken = artifacts.require("./FloralToken.sol");

module.exports = function (deployer) {
  deployer.deploy(FloralToken);
};
