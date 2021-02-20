const TweetStorage = artifacts.require('TweetStorage')
const TweetController = artifacts.require('TweetController')
const utils = require('../utils')
const { assertVMException } = utils

contract('tweets', () => {

    it("Can create tweet with controller", async () => {
      const controller = await TweetController.deployed()

      const tx = await controller.createTweet(1, "Hello from my twitter clone!")

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

})