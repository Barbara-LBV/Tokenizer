

## Smart Contrat
Pour le smart contract en Solidity, j'ai choisi d'importer la class ERC20 depuis
OpenZeppelin, permettant de ne pas avoir à ré-écrire les fonctions nécessaires à 
l'édition d'un smart contract sur Ethereum.
**Economie de code, et source d'erreurs moindre**
```
Usage : un "Smart Contract" permet de s'assure que les tokens envoyes dans la Blockchain a laquelle ils sont lies, sont bien conformes, et "identiques" a ceux deja presents => equivalence, securite, ownership
```

## Plateforme IDE
Pour la plateforme, j'ai choisi Remix en ligne c'est une app web, il n'y a rien a installer de plus 
sur mon ordi. Par ailleurs, Remix dispose de cours et de ressources tres utiles pour debuter, et comprendre les enjeux de la blockchain et de la crypto.
```
Usage : ecrire et tester les "Smart Contracts"
```

## Portefeuille
J'ai opte pour le portefeuille(wallet) Metamask, compatible avec les normes Ethereum et BNB Chain.
Facile a installer - c'est une simple extension compatible avec la plupart des navigateurs.
Puis il suffit de choisir le bon masque.
```
Usage : pour deployer le contrat sur un "testnet" de la blockchain Ethereum, et faire toutes les actions que l'on souhaite sur son compte.
```

## faucet
Un Faucet est un outil qui permet de recuperer des Sepolia ETH (ou n'importe quelle currency) pour faire des tests. N'a pas de valeur reelle.

## Testnet  
Sepolia, pour rester conforme/logique avec les normes Ethereum que j'ai choisi
https://sepolia.etherscan.io/ 
```
usage : plateforme permettant de deployer ses contrats, et tester les actions qui leurs sont liees, et applicables aux tokens, comme les transferts
```
Etherscann Sepolia est en lecture seule pour voir les transfert, Meatmask fait les actions demandees.

## RPC ??
