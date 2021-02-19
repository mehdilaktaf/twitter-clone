const TweetStorage = artifacts.require('TweetStorage')

contract('tweets', () => {

        
    before(async () => {
        const tweetStorage = await TweetStorage.deployed()
        await tweetStorage.createTweet(1, "Hello from my twitter clone!")
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