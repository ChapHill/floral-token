//specify version of solidity 
pragma solidity >=0.4.22 <0.9.0;

contract FloralToken {

    string public tokenName = "Floral Token";
    string public tokenSymbol = "FLOR";

    //state variable
    uint public totalSupply;    

    //must trigger when tokens are transferred
    event Transfer(address indexed _from, address indexed _to, uint _value);

    //key value pairing
    mapping(address => uint) public balanceOf;

    //constructor
    //set the total supply to the initial supply (in ./migrations)
    constructor(uint _initialSupply) public{
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    function transfer(address _to, uint _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value); //if user doesn't have enough
        balanceOf[msg.sender] -= _value; //subtracts balance from sender
        balanceOf[_to] += _value; //adds to balance to recipient

        emit Transfer(msg.sender, _to, _value);

        return true;
    }
}