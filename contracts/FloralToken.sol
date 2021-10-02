//specify version of solidity 
pragma solidity >=0.4.22 <0.9.0;

contract FloralToken {

    uint public totalSupply;    //state variable

    //constructor
    constructor() public{
        totalSupply = 100000;  //100,000
    }
}