# 

## Blockchain
La blockchain est 


## Token





## Smart Contrat
Pour le smart contract en Solidity, j'ai choisi d'importer la class ERC20 depuis
OpenZeppelin, permettant de ne pas avoir à ré-écrire les fonctions nécessaires à 
l'édition d'un smart contract sur Ethereum.
**Economie de code, et source d'erreurs moindre**
```
Usage : un "Smart Contract" permet de s'assure que les tokens envoyes dans la Blockchain a laquelle ils sont lies, sont bien conformes, et "identiques" a ceux deja presents => equivalence, securite, ownership
```

## La Propriete - Ownership
Un jeton/token peut a un proprietaire, et peut etre ceder a qql d'autre, il change alors de proprietaire.
Sa propriete peut aussi etre "cedee", sans qu'il y ait preneur (a verifier)

## Les Privileges
Un token a un proprietaire, qui peut tout de meme ceder des droits de transfert (ou autre) a un autre "compte".
Ainsi, un compte B pourra effectuer des transferts etc a nom du compte A.
Question : ces comptes doivent-ils appartenir a la meme personne (ou non) ?


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

## Faucet
Un Faucet est un outil qui permet de recuperer des Sepolia ETH (ou n'importe quelle currency) pour faire des tests. N'a pas de valeur reelle.

## Testnet  
Sepolia, pour rester conforme/logique avec les normes Ethereum que j'ai choisi
https://sepolia.etherscan.io/ 
```
usage : plateforme permettant de deployer ses contrats, et tester les actions qui leurs sont liees, et applicables aux tokens, comme les transferts.
```
Etherscann Sepolia est en lecture seule pour voir les transfert, Meatmask fait les actions demandees.

## RPC = Remote Procedure Call

Le protocole/l'interface qui permet à une application (comme Metamask, ou Remix) de **communiquer avec un nœud de la blockchain** — c'est-à-dire d'envoyer des requêtes ("quel est le solde de cette adresse ?", "envoie cette transaction") et de recevoir des réponses, sans avoir à héberger toi-même une copie complète de la blockchain.

**Dans le contexte Metamask + Sepolia**

Sepolia est un réseau composé de milliers de nœuds. Pour que Metamask puisse lire l'état de ce réseau ou envoyer tes transactions, il a besoin de l'**URL d'un point d'accès RPC** — un serveur qui fait l'intermédiaire entre ton navigateur et le réseau Sepolia.

Cette URL RPC est ce qui définit, dans les paramètres réseau de Metamask, **à quel réseau tu es connecté** :
- Pour Ethereum Mainnet → une URL RPC vers le mainnet
- Pour Sepolia → une URL RPC vers Sepolia

**Configuration**

Dans Metamask, quand on sélectionne "Sepolia" dans la liste des réseaux (souvent visible seulement si tu as activé "Afficher les réseaux de test" dans les paramètres), Metamask utilise une URL RPC par défaut, généralement fournie par Infura ou un service similaire.

**Dans Tokenizer**

Lors du deploiement du token Leaf42 sur Sepolia via Remix + Injected Provider (Metamask), le RPC configuré dans Metamask va effectivement transmettre ta transaction de déploiement au réseau Sepolia, puis permettre de vérifier que le contrat existe bien à son adresse.

Doc officielle Metamask sur l'ajout d'un réseau/RPC : https://support.metamask.io/configure/networks/adding-a-network-manually/


## ABI = Application Binary Interface

C'est un fichier au format JSON qui décrit **l'interface** du smart contract : 
- la liste de toutes ses fonctions, 
- leurs paramètres, leurs types de retour, 
- ainsi que les événements (`event`) qu'il peut émettre.

**Pourquoi c'est nécessaire**

Un smart contract déployé sur la blockchain n'existe, au niveau le plus bas, que sous forme de **bytecode**. Ce bytecode ne contient pas les noms de fonctions lisibles comme `mint()` ou `transfer()` — tout est compilé en sélecteurs de fonction (des hashs de 4 octets).

L'ABI sert de "traducteur" entre :
- le code humain (`monContrat.mint(adresse, montant)`)
- et ce que la blockchain comprend réellement (des données binaires brutes)

Sans l'ABI, un outil externe (un script web3.js/ethers.js, Metamask, un site frontend) ne peut pas savoir comment appeler les fonctions du contrat, même s'il connaît son adresse.

**Exemple concret pour ton contrat Leaf42**

voir fichier abi.json

**À quoi ça te sert concrètement**

- Réutiliser le contrat depuis un script (ex: `ethers.js`) : tu as besoin de l'**adresse** + l'**ABI** pour créer une instance et appeler ses fonctions
- Reconnecter un contrat déjà déployé dans Remix via "At Address"
- Documenter le projet : montrer l'interface publique du token

Doc officielle Solidity : https://docs.soliditylang.org/en/latest/abi-spec.html
