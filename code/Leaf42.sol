// SPDX-License-Identifier: MIT 
// reusable code pour eviter les warning sur Remix
pragma solidity ^0.8.3;

// import de la class ERC20 openzeppelin - heritage des fonctions
import "@openzeppelin/contracts@4.9.6/token/ERC20/ERC20.sol"; 

// import de Ownable de la librairie openzeppelin pour gerer les proprietes et privileges
import "@openzeppelin/contracts@4.9.6/access/Ownable.sol";

contract Leaf42 is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Leaf42", "LF42") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }
}