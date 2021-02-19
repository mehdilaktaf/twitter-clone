const UserStorage = artifacts.require('UserStorage')

contract('users', () => {
  
  it("Can create user", async () => {
    const storage = await UserStorage.deployed()

    const username = web3.utils.fromAscii("mehdi")
    const tx = await storage.createUser(username)

    assert.isOk(tx) 
  });

  // Add the following test:
  it("Can get user", async () => {
    const storage = await UserStorage.deployed()
    const userId = 1
    
    // Get the userInfo array
    const userInfo = await storage.profiles.call(userId)

    const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')

    assert.equal(username, "mehdi")
  });

  

})