const FloralToken = artifacts.require("./FloralToken.sol");
const FloralTokenSale = artifacts.require("./FloralTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(FloralToken, 500000).then(function() {
    let tokenPrice = 150000000000000; //price in wei
    return deployer.deploy(FloralTokenSale, FloralToken.address, tokenPrice);
  }); //sets total supply to 500,000 and tokenPrice (once converted) to around .50 USD
};


//WEI TO ETHER TO USD:

// 150000000000000 wei = 0.00015 ether
// 0.00015 ETHER = .51 USD