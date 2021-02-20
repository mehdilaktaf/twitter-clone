// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

contract Owned {
	address public ownerAddr;

	modifier onlyOwner() {
		// Only the current owner can set a new ownerAddr:
		require(msg.sender == ownerAddr);
		_;
	}

	constructor() public {
		ownerAddr = msg.sender;
	}

	function transferOwnership(address _newOwner) public onlyOwner {
		// The new address cannot be null:
		require(_newOwner != address(0));

		ownerAddr = _newOwner;
	}
}
