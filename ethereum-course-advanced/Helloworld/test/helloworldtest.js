const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", async function(){
  it("should initialize correctly", async function(){
    let instance = await HelloWorld.deployed();
    let message = await instance.getMessage();
    assert( message === "Changing the contract message: Hi Majo"
    , "Message should be Changing the contract message: Hi Majo" );
  });
  it("should set message correctly", async function(){
    let instance = await HelloWorld.deployed();
    await instance.setMessage("Testing message");
    let message = await instance.getMessage();
    assert( message === "Testing message"
    , "Message should be the same as we set it to last" );
  });
});
