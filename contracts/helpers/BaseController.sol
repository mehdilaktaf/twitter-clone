// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

import "./Owned.sol";

contract BaseController is Owned {
	// The Contract Manager's address
	address managerAddr;

	function setManagerAddr(address _managerAddr) public onlyOwner {
		managerAddr = _managerAddr;
	}
}
