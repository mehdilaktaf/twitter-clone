// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/tweets/TweetStorage.sol";

contract TestTweetStorage {
	TweetStorage tweetStorage;

	constructor() public {
		tweetStorage = new TweetStorage();
		tweetStorage.setControllerAddr(address(this));
	}

	function testCreateTweet() public {
		uint256 _userId = 1;
		uint256 _expectedTweetId = 1;

		Assert.equal(
			tweetStorage.createTweet(_userId, "Hello from my twitter clone!"),
			_expectedTweetId,
			"Should create tweet with ID 1"
		);
	}
}
