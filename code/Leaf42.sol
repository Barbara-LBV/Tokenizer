
// SPDX-License-Identifier: MIT // reusable code
pragma solidity ^0.8.3;

import "@openzeppelin/contracts@4.9.6/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.9.6/access/Ownable.sol";

contract Leaf42 is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Leaf42", "LF42") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }
}