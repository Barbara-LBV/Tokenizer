# Deploiement

- **Reseau** : Sepolia (testnet Ethereum)
- **Compilateur** : Solidity ^0.8.3, via Remix (IDE en ligne)
- **Dépendances** : OpenZeppelin Contracts 4.9.6 (`ERC20`, `Ownable`)

## Smart Contract
- adresse : 0x9B3433C9Da2AdFEf515cdC1cFbF9335C883a04a2
- explorateur : https://sepolia.etherscan.io/address/0x9B3433C9Da2AdFEf515cdC1cFbF9335C883a04a2
- ticker : LF42
- hash du deploiement : 0x742c23ff0499024c781ae218e8cabca74ad0743dd431346b4ee66e6804a0a9e8
- paramètre du constructeur : `initialSupply = 1000`
- ABI : voir [abi.json](abi.json)

## Compte
- adresse (owner/déployeur) : 0xBc1dAD0bd6d6CA9a77408D9d990232d9f6689590

## Instructions
Pour reproduire ce déploiement :
1. Ouvrir [Remix](https://remix.ethereum.org/) et importer le fichier [Leaf42.sol](../code/Leaf42.sol).
2. Compiler avec le compilateur Solidity `0.8.3`.
3. Dans l'onglet "Deploy & Run Transactions", choisir l'environnement **Injected Provider - MetaMask** et se connecter au réseau **Sepolia**.
4. Récupérer des ETH de test via un faucet (ex : [Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)).
5. Déployer le contrat `Leaf42` en renseignant la valeur du paramètre `initialSupply` (ici `1000`).
6. Confirmer la transaction dans MetaMask, puis vérifier le contrat sur [Sepolia Etherscan](https://sepolia.etherscan.io/) à l'aide de l'adresse ci-dessus.

Alternative automatisée : les scripts [remix_compile.js](remix_compile.js) et [remix_deploy.js](remix_deploy.js) (à placer dans le dossier `scripts` du workspace Remix, puis à lancer l'un après l'autre via clic droit > "Run") permettent de recompiler puis redéployer le contrat sans repasser par l'interface manuelle — pratique car l'environnement "Remix VM" ne conserve pas les contrats déployés d'une session à l'autre.
