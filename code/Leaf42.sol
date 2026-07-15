pragma solidity ^0.8.3;

import "@openzeppelin/contracts@4.4.0/token/ERC20/ERC20.sol";

contract Leaf42 is ERC20 {
    constructor(uint256 initialSupply) ERC20("Leaf42", "LF42") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}