// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
	UserStorage userStorage;

	constructor() public {
		userStorage = new UserStorage();
		userStorage.setControllerAddr(address(this));
	}

	function testCreateFirstUser() public {
		uint256 _expectedId = 1;

		Assert.equal(
			userStorage.createUser(
				address(0),
				"mehdi",
				"Mehdi",
				"Laktaf",
				"I like coding stuff",
				"test@test.com"
			),
			_expectedId,
			"Should create user with ID 1"
		);
	}
}
