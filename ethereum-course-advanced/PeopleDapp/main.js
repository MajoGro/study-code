var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web.eth.Contract(abi, "0xE42bAFbeb7f695686C883E3DBCC050c48E3718AC", {from: accounts[0]});
      console.log(contractInstance);

    });
});
