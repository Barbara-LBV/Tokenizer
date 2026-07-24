// SPDX-License-Identifier: MIT 
// licence specifiee pour eviter les warning sur Remix
pragma solidity ^0.8.3;

// import de la class ERC20 openzeppelin - heritage des fonctions
import "@openzeppelin/contracts@4.9.6/token/ERC20/ERC20.sol"; 

// import de Ownable de la librairie openzeppelin pour gerer les proprietes et privileges
import "@openzeppelin/contracts@4.9.6/access/Ownable.sol";

contract Leaf42 is ERC20, Ownable {
    // constructeur : fixe le nom/ticker du token (Leaf42/LF42) et attribue
    // le supply initial au deployeur, qui devient aussi le owner (via Ownable)
    constructor(uint256 initialSupply) ERC20("Leaf42", "LF42") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    // permet au owner de creer (mint) de nouveaux tokens vers une adresse donnee
    // reserve au owner via le modifier "onlyOwner" (privilege issu de Ownable)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }
}