//specify version of solidity 
pragma solidity >=0.4.22 <0.9.0;

contract FloralToken {

    string public tokenName = "Floral Token";
    string public tokenSymbol = "FLOR";

    //state variable
    uint public totalSupply;    

    mapping(address => uint) public balanceOf;

    //constructor
    //set the total supply to the initial supply (in ./migrations)
    constructor(uint _initialSupply) public{
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}