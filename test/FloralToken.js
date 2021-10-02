const FloralToken = artifacts.require("./FloralToken.sol");

contract("FloralToken test", async accounts => {
    it("should set the total supply to 500000", async() => {
        const instance = await FloralToken.deployed();
        const totalSupply = await instance.totalSupply();
        assert.equal(totalSupply.toNumber(), 500000);
    });

    it("should put the entire supply of FloralTokens in the first account", async () => {
        const instance = await FloralToken.deployed();
        const balance = await instance.balanceOf(accounts[0]);
        assert.equal(balance.toNumber(), 500000);
    })
});
