const { expect, assert } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Counter contract", function (){
    let counterContract;

    beforeEach(async function(){
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        await counter.deployed();
        counterContract = counter;
    });
//ADD FUNC    
    it("should add 2 positive numbers", async function(){
        await counterContract.add(12,76);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(total).to.equal(88);
     });
    it("should add 2 negative numbers", async function(){
        await counterContract.add(-42,-24);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(total).to.equal(-66);
    });
    it("should add 1 positive and 1 negative numbers", async function(){
        await counterContract.add(-12,76);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(total).to.equal(64);
    });
    it("should add 1 positive and 1 negative numbers reverse order", async function(){
        await counterContract.add(76,-12);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(total).to.equal(64);
    });
//SUBSTRACT FUNC
    it("should substract 2 positive numbers", async function(){
        await counterContract.substract(12,76);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(substracted).to.equal(-64);
     });
    it("should substract 2 negative numbers", async function(){
        await counterContract.substract(-42,-24);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(substracted).to.equal(-18);
    });
    it("should substract 1 positive and 1 negative numbers", async function(){
        await counterContract.substract(-12,76);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(substracted).to.equal(-88);
    });
    it("should substract 1 positive and 1 negative numbers reverse order", async function(){
        await counterContract.substract(76,-12);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(substracted).to.equal(88);
    });
//MULTİPLY FUNC
     it("should multiply 2 positive numbers", async function(){
        await counterContract.multiply(12,76);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(multiplied).to.equal(912);
     });
    it("should multiply 2 negative numbers", async function(){
        await counterContract.multiply(-42,-24);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(multiplied).to.equal(1008);
    });
    it("should multiply 1 positive and 1 negative numbers", async function(){
        await counterContract.multiply(-12,76);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(multiplied).to.equal(-912);
    });
    it("should multiply 1 positive and 1 negative numbers reverse order", async function(){
        await counterContract.multiply(76,-12);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(multiplied).to.equal(-912);
    });
//DIVISION FUNCTION
    it("should divide 2 positive numbers", async function(){
        await counterContract.divide(12,76);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(divided).to.equal(0);
     });
    it("should divide 2 negative numbers", async function(){
        await counterContract.divide(-42,-24);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(divided).to.equal(1);
    });
    it("should divide 1 positive and 1 negative numbers", async function(){
        await counterContract.divide(-12,76);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(divided).to.equal(0);
    });
    it("should divide 1 positive and 1 negative numbers reverse order", async function(){
        await counterContract.divide(76,-12);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect(divided).to.equal(-6);
    });
    it("should gives error when divided by 0", async function(){
        await counterContract.divide(76,0);
        const [total, substracted, multiplied, divided] = await counterContract.multiReturn();
        expect (counterContract.divide(76,0)).to.be.revertedWith("division with 0 is undefined");
    });  
});