//specify version of solidity 
pragma solidity >=0.4.22 <0.9.0;

contract FloralToken {

    string public tokenName = "Floral Token";
    string public tokenSymbol = "FLOR";

    //state variable
    uint public totalSupply;    

    //must trigger when tokens are transferred
    event Transfer(address indexed _from, address indexed _to, uint _value);

    event Approval(address indexed _owner, address indexed _spender, uint _value);

    //key value pairing
    mapping(address => uint) public balanceOf; //returns amount of tokens owned by account
    mapping(address => mapping(address => uint)) public allowance; //returns remaining # of tokens that spender will be allowed to spend on behalf of owner

    //constructor
    //set the total supply to the initial supply (in ./migrations)
    constructor(uint _initialSupply) public{
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    function approve(address _spender, uint _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    //transfer tokens from one account to another
    function transfer(address _to, uint _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value); //if user doesn't have enough
        balanceOf[msg.sender] -= _value; //subtracts balance from sender
        balanceOf[_to] += _value; //adds to balance to recipient

        emit Transfer(msg.sender, _to, _value);

        return true;
    }


    //moves the amount of tokens from sender to recipient using the allowance mechanism
    function transferFrom(address _from, address _to, uint _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }
}