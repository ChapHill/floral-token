const FloralToken = artifacts.require("./FloralToken.sol");

module.exports = function (deployer) {
  deployer.deploy(FloralToken, 500000); //set total supply to 500,000
};
