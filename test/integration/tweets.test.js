const TweetStorage = artifacts.require('TweetStorage')
const TweetController = artifacts.require('TweetController')
const utils = require('../utils')
const { assertVMException } = utils
const UserController = artifacts.require("UserController") 


contract('tweets', () => {

  before(async () => {
    const userCtrl = await UserController.deployed();
    
    const username = web3.utils.fromAscii("mehdi")
    const firstName = web3.utils.fromAscii("Mehdi")
    const lastName = web3.utils.fromAscii("Laktaf")
    
    await userCtrl.createUser(
      username,
      firstName,
      lastName,
      "I like coding stuff",
      "example@example.com"
    );
  });

    it("Can create tweet with controller", async () => {
      const controller = await TweetController.deployed()

      const tx = await controller.createTweet("Hello from my twitter clone!")

      assert.isOk(tx)
    });

    it("Can't create tweet without controller", async () => {
        const storage = await TweetStorage.deployed()
    
        try {
          const tx = await storage.createTweet(1, "mehdi")
          assert.fail();
        } catch (err) {
          assertVMException(err);
        }
      })

    it("Can get tweet", async () => {
        const storage = await TweetStorage.deployed()

        const tweet = await storage.tweets.call(1) // Get the data
        const { id, text, userId } = tweet // Destructure the data

        // Check if the different parts contain the expected values:
        assert.equal(parseInt(id), 1)
        assert.equal(text, "Hello from my twitter clone!")
        assert.equal(parseInt(userId), 1)
    })

    it("Can get all tweets IDs from user", async () => {
      const storage = await TweetStorage.deployed()
  
      const userId = 1
      const ids = await storage.getTweetIdsFromUser.call(userId)
  
      const expectedTweetId = 1
  
      assert.isOk(Array.isArray(ids))
      assert.equal(ids[0], expectedTweetId)
    })

    it("Can get tweet ID based on index", async () => {
      const storage = await TweetStorage.deployed()
  
      const tweetId = await storage.tweetIds.call(0)
  
      assert.equal(tweetId, 1)
    })

})