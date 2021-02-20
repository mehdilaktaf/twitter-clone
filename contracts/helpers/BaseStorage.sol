// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

// Import the Owned contract:
import "./Owned.sol";

contract BaseStorage is Owned {
	address public controllerAddr;

	function setControllerAddr(address _controllerAddr) public onlyOwner {
		controllerAddr = _controllerAddr;
	}

	modifier onlyController() {
		require(msg.sender == controllerAddr);
		_;
	}
}
