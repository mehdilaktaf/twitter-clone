// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
  function testCreateFirstUser() public {
    // Get the deployed contract
    UserStorage _storage = UserStorage(DeployedAddresses.UserStorage());

    uint _expectedId = 1;

    Assert.equal(_storage.createUser("mehdi"), _expectedId, "Should create user with ID 1");
  }
}