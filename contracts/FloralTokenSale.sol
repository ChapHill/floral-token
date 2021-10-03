//specify version of solidity 
pragma solidity >=0.4.22 <0.9.0;

import "./FloralToken.sol";

contract FloralTokenSale {

    //state variables
    address admin;
    FloralToken public tokenContract;
    uint public tokenPrice;

    constructor(FloralToken _tokenContract, uint _tokenPrice) public{
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }
}