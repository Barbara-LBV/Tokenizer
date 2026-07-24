# Déploiement

- **Réseau** : Sepolia (testnet Ethereum)
- **Compilateur Remix** : Solidity ^0.8.3, via Remix (IDE en ligne)
- **Compilateur Etherscan** : type Solidity: Standard-json-input - version ^0.8.34, 
- **Licence** : Open SOurce Licence : MIT Licence
- **Dépendances** : OpenZeppelin Contracts 4.9.6 (`ERC20`, `Ownable`)

## Smart Contract
- **Adresse** : 0x9B3433C9Da2AdFEf515cdC1cFbF9335C883a04a2
- **Explorateur** : https://sepolia.etherscan.io/address/0x9B3433C9Da2AdFEf515cdC1cFbF9335C883a04a2
- **Ticker** : LF42
- **Hash du déploiement** : 0x742c23ff0499024c781ae218e8cabca74ad0743dd431346b4ee66e6804a0a9e8
- **Paramètre du constructeur** : `initialSupply = 1000`

## Compte
- **Adresse (owner/déployeur)** : 0xBc1dAD0bd6d6CA9a77408D9d990232d9f6689590

## Instructions
Pour reproduire ce déploiement :
1. Ouvrir [Remix](https://remix.ethereum.org/) et importer le fichier [Leaf42.sol](../code/Leaf42.sol).
2. Compiler avec le compilateur Solidity `0.8.3`.
3. Dans l'onglet "Deploy & Run Transactions", choisir l'environnement **Injected Provider - MetaMask** et se connecter au réseau **Sepolia**.
4. Récupérer des ETH de test via un faucet (ex : [Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)).
5. Déployer le contrat `Leaf42` en renseignant la valeur du paramètre `initialSupply` (ici `1000`).
6. Confirmer la transaction dans MetaMask, puis vérifier le contrat sur [Sepolia Etherscan](https://sepolia.etherscan.io/) à l'aide de l'adresse ci-dessus.




### Alternative automatisée si le contrat a déja été déployé une 1e fois sur Remix : 

Le script [remix_compile.js](remix_compile.js) (à placer dans le dossier `scripts` du workspace Remix, puis à lancer via clique droit > "Run") permet de recompiler le contrat sans repasser par l'interface manuelle — pratique car l'environnement "Remix VM" ne conserve pas les contrats déployés d'une session à l'autre. On peut ensuite recuperer ;e json de la compilation, et verifier le contrat directement sur EtherScan. 
Permet la persistance du Smart Contract, et les fonctions sont aussi accessibles sur la plateforme.
1. Sur la page du contrat sur Sepolia Etherscan, onglet "Contract", cliquer sur "Verify and Publish" (lien bleu, généralement juste sous le message indiquant que le contrat n'est pas encore vérifié).
2. CLiquer l'onglet "Contract", puis sur "Verify and Publish" 
 -Contract Address : déjà pré-rempli normalement
 -Compiler Type : sélectionner "Solidity (Standard-Json-Input)"
 -Compiler Version : la version exacte utilisée dans Remix (ex: v0.8.34+)
 -Open Source License Type : MIT License (MIT) (comme vu précédemment)
3. Upload du json (dans le dossier, Leaf42_compData.js)
4. Cliquer sur "Verify and Publish". Etherscan recompile le code avec les paramètres fournis et compare le bytecode résultant à celui déployé sur la blockchain.
5. Une fois vérifié, retourner sur la page du contrat : une coche verte est visible à côté de "*Contract*" et il est possible d'utiliser les sous-onglets "*Read Contract*" et "*Write Contract*" pour interagir directement avec le contrat (Leaf42) depuis Etherscan.
6. Dans l'onglet "*Read Contract*", connecter le contract avec le portefeuille Metamask via le bouton vert a droite.
Suivre la procedure. Metamask est Etherscan sont desormais connectes.
