const UserStorage = artifacts.require('UserStorage')

contract('Users', () => {
  
  it("Can create user", async () => {
    const storage = await UserStorage.deployed()

    const username = web3.utils.fromAscii("mehdi")
    const tx = await storage.createUser(username)

    assert.isOk(tx) 
  })

})