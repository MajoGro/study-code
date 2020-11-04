pragma solidity 0.5.16;

contract HelloWorld{

    string public message = "Hello World";

    function getMessage() public view returns(string memory){
        return message;
    }
    function setMessage(string memory newMessage) public payable {
      require(msg.value >= 1 ether);
      message = newMessage;
    }
}
