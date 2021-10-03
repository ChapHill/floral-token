const FloralToken = artifacts.require("./FloralToken.sol");

contract("FloralToken test", async accounts => {
    it("should set the total supply to 500000", async () => {
        const instance = await FloralToken.deployed();
        const totalSupply = await instance.totalSupply();
        assert.equal(totalSupply.toNumber(), 500000);
    });

    it("should put the entire supply of FloralTokens in the first account", async () => {
        const instance = await FloralToken.deployed();
        const balance = await instance.balanceOf(accounts[0]);
        assert.equal(balance.toNumber(), 500000);
    });

    it("should transfer 1000 tokens from the first account to the second account", async () => {
        const instance = await FloralToken.deployed();
        await instance.transfer(accounts[1], 1000, {from: accounts[0]});
        const balance = await instance.balanceOf(accounts[1])
        assert.equal(balance.toNumber(), 1000);
    });
    
    // it("should 50000 tokens in the first account", async () => {
    //     const instance = await FloralToken.deployed();
    //     const balance = await instance.balanceOf(accounts[0]);
    //     assert.equal(balance.toNumber(), 50000);
    // });

    // it("should put 100 tokens in the second account", async () => {
    //     const instance = await FloralToken.deployed();
    //     const balance = await instance.balanceOf(accounts[1]);
    //     assert.equal(balance.toNumber(), 100);
    // });

    // it("should put 2000 tokens in the third account", async () => {
    //     const instance = await FloralToken.deployed();
    //     const balance = await instance.balanceOf(accounts[2]);
    //     assert.equal(balance.toNumber(), 500000);
    // });

    it("should have the name Floral Token", async() => {
        const instance = await FloralToken.deployed();
        const name = await instance.tokenName();
        assert.equal(name, "Floral Token")
    });
});
