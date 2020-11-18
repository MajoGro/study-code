const People = artifacts.require("People");
const truffleAssert = require("truffle-assertions");

contract("People", async function(accounts){

  let instance;

  before(async function(){
    instance = await People.deployed();
  });

  it("shouldn't create a person with age over 150 years", async function(){
    let instance = await People.deployed();
    await truffleAssert.fails(instance.createPerson("Bob", 200, 190, {value: web3.utils.toWei("1", "ether")}), truffleAssert.ErrorType.REVERT);
  });
  it("shouldn't create a person without payment", async function(){
    let instance = await People.deployed();
    await truffleAssert.fails(instance.createPerson("Bob", 50, 190, {value: 1000}), truffleAssert.ErrorType.REVERT);
  });
  it("should set senior status correctly", async function(){
    let instance = await People.deployed();
    await instance.createPerson("Bob", 65, 190, {value: web3.utils.toWei("1", "ether")});
    let result = await instance.getPerson();
    assert(result.senior === true, "senior level not set");
  });
  it("should set age correctly", async function(){
    let instance = await People.deployed();
    let result = await instance.getPerson();
    assert(result.age.toNumber() === 65, "Age not set correctly");
  });
  it("should not allow non-owner to delete people", async function(){
    let instance = await People.deployed();
    await instance.createPerson("Lisa", 35, 160, {from: accounts[1], value: web3.utils.toWei("1", "ether")});
    await truffleAssert.fails(instance.deletePerson(accounts[1], {from: accounts[1]}), truffleAssert.ErrorType.REVERT);
  });
  it("should allow the owner to delete people", async function(){
    let instance = await People.new();
    await instance.createPerson("Lisa", 35, 160, {from: accounts[1], value: web3.utils.toWei("1", "ether")});
    await truffleAssert.passes(instance.deletePerson(accounts[1], {from: accounts[0]}));
  });
});
