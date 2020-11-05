const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", async function(){
  it("should initialize correctly", async function(){
    let instance = await HelloWorld.deployed();
    let message = await instance.getMessage();
    assert( message === "Changing the contract message: Hi Majo");  
  });
});
