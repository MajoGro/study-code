const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(HelloWorld).then(function(instance){
    instance.setMessage("Changing the contract message: Hi Majo", {value: 1000000, from: accounts[0]}).then(function(){
      console.log("Success");
    }).catch(function(error){
      console.log("error: " + error);
    });
  }).catch(function(error){
    console.log("Deploy failed: " + error);
  });
};
