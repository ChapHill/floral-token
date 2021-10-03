//specify version of solidity 
pragma solidity >=0.4.22 <0.9.0;

import "./FloralToken.sol";

contract FloralTokenSale {

    //state variables
    address admin;
    FloralToken public tokenContract;
    uint public tokenPrice; //cost of a single token
    uint public tokensSold; //amount of tokens sold

    event Sell(address _buyer, uint _amount);

    constructor(FloralToken _tokenContract, uint _tokenPrice) public{
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    //multiplication
    //safe arithmetic
    //https://github.com/dapphub/ds-math
    //essentially prevents interger overflow
    function mul(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x, "ds-math-mul-overflow");
    }

    //purchase tokens
    function purchaseTokens(uint _amount) public payable {

        require(msg.value == mul(_amount, tokenPrice));
        require(tokenContract.balanceOf(address(this)) >= _amount); //does contract have enough tokens?
        require(tokenContract.transfer(msg.sender, _amount));

        tokensSold += _amount;
        emit Sell(msg.sender, _amount);
    }
}