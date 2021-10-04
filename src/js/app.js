App = {
  web3Provider: null,
  contracts: {},
  account: "0x0",

  init: async function () {
    console.log('test..');
    return App.initWeb3();
  },

  //interacts with ther ethereum blockchain
  initWeb3: async function() {
    if (window.ethereum) {
        App.web3Provider = window.ethereum;
        try {
          // Request account access
          await window.ethereum.enable();
        } catch (error) {
          // User denied account access...
          console.error("User denied account access")
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = window.web3.currentProvider;
      }
      // If no injected web3 instance is detected, fall back to Ganache
      else {
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      }
      web3 = new Web3(App.web3Provider);
    
    return App.initContracts();
  },

  initContracts: function() {
    $.getJSON("FloralTokenSale.json", function(floralTokenSale) {
        App.contracts.FloralTokenSale = TruffleContract(floralTokenSale);
        App.contracts.FloralTokenSale.setProvider(App.web3Provider);
        App.contracts.FloralTokenSale.deployed().then(function(floralTokenSale) {
          console.log("Floral Token sale address:", floralTokenSale.address);
        });
      }).done(function() {
        $.getJSON("FloralToken.json", function(floralToken) {
          App.contracts.FloralToken = TruffleContract(floralToken);
          App.contracts.FloralToken.setProvider(App.web3Provider);
          App.contracts.FloralToken.deployed().then(function(floralToken) {
            console.log("Floral Token address:", floralToken.address);
          });
  
          
          return App.render();
        });
      })
  },

  render: function() {
      web3.eth.getCoinbase(function(error, account) {
          if(error == null) {
              console.log('account', account);
              
              App.account = account;
              $("#accountAddress").html("Your address: "  + account);
          }
      })
  }
};

//initializes app in the browser
$(function () {
  $(window).load(function () {
    App.init();
  });
});
