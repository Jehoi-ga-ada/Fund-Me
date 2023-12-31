const {deployment, deployments, ethers, getNamedAccounts} = require("hardhat")
const {assert} = require("chai")

describe("FundMe", async function (){
    let fundMe
    let deployer
    beforeEach(async function (){
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"])
        fundMe = await ethers.getContract("FundMe", deployer)
        mockV3Aggregator = await ethers.getContract(
            "MockV3Aggregator",
            deployer
        )
    })

    describe("constructor", async function (){
        it("sets the aggregator addresses correctly", async function(){
            const response = await fundMe.priceFeed()
            assert.equal(response, mockV3Aggregator.address)
        })
    })

    describe("fund", async function (){
        it("Fails if you don't send enough ETH", async function(){
            await fundMe.fund()
        })
    })
})