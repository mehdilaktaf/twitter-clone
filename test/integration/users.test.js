const UserStorage = artifacts.require('UserStorage')
const UserController = artifacts.require('UserController') 
const utils = require('../utils.js')
const { assertVMException } = utils
contract('users', () => {

  it("Can create user with controller", async () => {
    const controller = await UserController.deployed()

    const tx = await controller.createUser(
      web3.utils.fromAscii("mehdi"),
      web3.utils.fromAscii("Mehdi"),
      web3.utils.fromAscii("Laktaf"),
      "I like coding stuff",
      "test@test.com"
    )

    assert.isOk(tx)
  })

  it("Can't create user without controller", async () => {
    const storage = await UserStorage.deployed()

    try {
      const tx = await storage.createUser(
        0x0,
        web3.utils.fromAscii("mehdi"),
				web3.utils.fromAscii("Mehdi"),
				web3.utils.fromAscii("Laktaf"),
				"I like coding stuff",
				"test@test.com"
      )
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  })

  it("Can get user", async () => {
    const storage = await UserStorage.deployed()
    const userId = 1
    
    // Get the userInfo array
    const userInfo = await storage.profiles.call(userId)

    const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')

    assert.equal(username, "mehdi")
  });

  

})