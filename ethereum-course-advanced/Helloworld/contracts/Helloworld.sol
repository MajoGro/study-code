pragma solidity 0.5.16;

contract HelloWorld{

    string message = "Hello World";

    function getMessage() public view returns(string memory){
        return message;
    }
    function setMessage(string memory newMessage) public payable {
      message = newMessage;
    }
}
