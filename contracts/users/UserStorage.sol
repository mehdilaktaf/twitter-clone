// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

import "../helpers/BaseStorage.sol";

contract UserStorage is BaseStorage {
	mapping(uint256 => Profile) public profiles;

	struct Profile {
		uint256 id;
		bytes32 username;
	}

	uint256 latestUserId = 0;

	function createUser(bytes32 _username)
		public
		onlyController
		returns (uint256)
	{
		latestUserId++;
		profiles[latestUserId] = Profile(latestUserId, _username);
		return latestUserId;
	}
}
