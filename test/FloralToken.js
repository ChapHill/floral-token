const FloralToken = artifacts.require("./FloralToken.sol");

contract("FloralToken test", async accounts => {
    it("should set the total supply to 100000", async() => {
        const instance = await FloralToken.deployed();
        const totalSupply = await instance.totalSupply();
        assert.equal(totalSupply.toNumber(), 100000);
    });

    
});
