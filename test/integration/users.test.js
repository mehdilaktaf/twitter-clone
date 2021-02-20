const UserStorage = artifacts.require('UserStorage')
const UserController = artifacts.require('UserController') 
const utils = require('../utils.js')
const { assertVMException } = utils
contract('users', () => {

  it("Can create user with controller", async () => {
    const controller = await UserController.deployed()

    const username = web3.utils.fromAscii("mehdi")
    const tx = await controller.createUser(username)

    assert.isOk(tx)
  });
  
  it("Can't create user without controller", async () => {
    const storage = await UserStorage.deployed()

    try {
      const username = web3.utils.fromAscii("mehdi")
      await storage.createUser(username)
      assert.fail()
    } catch (err) {
      assertVMException(err);
    }
  });

  it("Can get user", async () => {
    const storage = await UserStorage.deployed()
    const userId = 1
    
    // Get the userInfo array
    const userInfo = await storage.profiles.call(userId)

    const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')

    assert.equal(username, "mehdi")
  });

  

})