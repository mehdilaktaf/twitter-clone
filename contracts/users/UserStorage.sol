// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

contract UserStorage {
    
    mapping(uint => Profile) profiles;

    struct Profile {
        uint id;
        bytes32 username;
    }

    uint latestUserId = 0;

    function createUser(bytes32 _username) public returns(uint) {
    latestUserId++;  

    profiles[latestUserId] = Profile(latestUserId, _username);

    return latestUserId;
    }

}