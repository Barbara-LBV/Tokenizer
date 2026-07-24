# Lexique Général

Lexique des principaux termes & notions liés à la Blockchain

## Web3
Terme utilisé pour définir un web décentralisé utilisant la technologie des blockchains, différent du web 2.0, qui désigne le “web social et interactif” utilisé majoritairement aujourd’hui. 
Un réseau blockchain peut avoir des applications décentralisées (*decentralized applications* ou *DApps*)

## Blockchain
La blockchain est un registre numérique de transactions, distribué et dupliqué sur de nombreux ordinateurs (les "nœuds") du réseau, plutôt que stocké à un seul endroit par une autorité centrale.
Les transactions y sont regroupées par blocs, chaque bloc étant lié cryptographiquement au précédent (d'où le nom "chaîne de blocs") : une fois inscrites, les données ne peuvent plus être modifiées ou supprimées.
Les nœuds du réseau se mettent d'accord entre eux (via un mécanisme de "consensus") sur l'état valide de ce registre, ce qui rend la blockchain décentralisée, transparente et sécurisée sans avoir besoin de faire confiance à un tiers unique.


## Token
Genre de monnaie d'échange
La blockchain distingue deux types de tokens : 
 - Tokens Fongibles (**FT** - *Fungible Token*) : éléments/produits qui se ressemblent et peuvent donc se substituer.
 - Non-Fongible (**NFT** - *Non Fungible Tokens*): sont à l’inverse, des produits qui sont uniques, donc non interchangeables.
```
FT  = un billet de 50€, une pièce de 1€
NFT = oeuvre d’art, maison, voiture ...
```

## Smart Contract
Le *Smart Contract* est implémenté dans le langage **Solidity**. J'ai choisi en plus d'importer la classe ERC20 depuis *OpenZeppelin*, permettant de ne pas avoir à ré-écrire les fonctions nécessaires à l'édition d'un Smart Contract aux normes ERC20 sur Ethereum.
**Economie de code, et source d'erreurs moindre**
```
Un "Smart Contract" permet de s'assurer que les tokens envoyés dans la Blockchain a laquelle ils sont liés, sont bien conformes, et "identiques" a ceux deja présents => équivalence, sécurité, ownership.
```

## Solidity
Solidity est un langage de programmation de type statique conçu pour développer des contrats intelligents qui s'exécutent sur l'EVM (Ethereum Virtual Machine). Solidity est compilé en bytecode lui-même exécutable sur l'EVM. Grâce à Solidity, les développeurs sont en mesure d'écrire des applications implémentant une logique commerciale s’exécutant de manière autonome au travers des contrats intelligents, laissant une trace de transactions non répudiables et faisant autorité. **Source**: Wikipedia [Solidity](https://fr.wikipedia.org/wiki/Solidity)

uint256 ("unsigned integer sur 256 bits") est un type de donnée en Solidity — pour stocker un nombre conséquent : un nombre entier strictement positif, pouvant aller de 0 à un nombre gigantesque (2²⁵⁶ - 1, soit environ 1,15 × 10⁷⁷).
Solidity ne gère pas nativement les nombres décimaux (pas de type *float* ou *double*, pour éviter les problèmes d'arrondi/précision sur la blockchain). Donc tout montant est un entier, et c'est aux interfaces (wallets, explorateurs, apps) de faire la conversion pour l'affichage.

## Norme ERC20
Pour pouvoir échanger entre eux le plus simplement possible, via un Smart Contract, il existe des normes qu’un token doit respecter pour intégrer une blockchain. 
Une des plus populaires est celle d’Ethereum, avec sa norme de token ERC20 pour les tokens FT, et ERC-721 pour les NFT. 
Pour être conforme aux normes ERC20, notre Smart Contract Ethereum doit avoir :

Les 6 fonctions suivantes :

- **totalSupply()** : renvoie le nombre total de tokens existants (l'offre totale en circulation).

- **balanceOf(address)** : renvoie le solde de tokens d'une adresse donnée.

- **transfer(to, amount)** : transfère directement des tokens depuis le compte de l'appelant vers une adresse donnée.

- **approve(spender, amount)** : autorise une adresse (`spender`) à dépenser un montant donné de tokens au nom de l'appelant.

- **allowance(owner, spender)** : renvoie le montant de tokens qu'un `spender` est encore autorisé à dépenser au nom d'un `owner`.

- **transferFrom(from, to, amount)** : transfère des tokens au nom d'un autre compte, dans la limite de l'autorisation (`allowance`) accordée via `approve()`.


Et pouvoir émettre 2 évènements : 
- **Transfer** : émis à chaque transfert de tokens (via `transfer()` ou `transferFrom()`), y compris à la création (`mint`, avec `from` = adresse zéro) ou à la destruction de tokens.
    
- **Approval** : émis à chaque appel de `approve()`, pour signaler qu'un `spender` a reçu (ou vu modifier) son autorisation de dépense.


Options :

Extensions courantes, non imposées par la norme ERC20 mais souvent ajoutées : 
`name()`, `symbol()`, `decimals()` (métadonnées du token), ainsi que `mint()`/`burn()` (création/destruction de tokens) ou `Ownable` (gestion d'un propriétaire et de ses privilèges).


## La Propriété - Ownership
Un jeton/token peut avoir un propriétaire, et peut être cédé à quelqu'un d'autre : le token change alors de propriétaire.
Sa propriété peut aussi être "cédée", sans qu'il y ait de preneur (à vérifier).

## Les Privilèges
Un token a un propriétaire, qui peut tout de même céder des droits de transfert (ou autre) à un autre "compte".
Ainsi, un compte B pourra effectuer des transferts (etc) au nom du compte A.
Question : ces comptes doivent-ils appartenir à la même personne (ou non) ?

## Plateforme IDE
Les plateformes IDE permettent d'implémenter, de compiler et déployer les Smart Contracts, et de tester les transactions.

## Portefeuille
Pour déployer le contrat sur un "testnet" de la blockchain Ethereum, et faire toutes les actions que l'on souhaite sur son compte : transfert de Tokens, de privilèges, de propriété.

## Faucet
Un Faucet est un outil qui permet de récupérer des Sepolia ETH (ou n'importe quelle currency/crypto-monnaie) pour faire des tests. N'a pas de valeur réelle.

## Testnet  
Réseau blockchain de test, permettant de vérifier l'état d'un compte lié à ce réseau, ainsi que les transactions effectuées par le compte sur le testnet.

Exploreur : [Sepolia](https://sepolia.etherscan.io/)
```
Etherscan Sepolia est en lecture seule pour voir les transferts, Metamask fait les actions demandées.
```

## RPC = Remote Procedure Call
Le protocole/l'interface qui permet à une application (comme Metamask, ou Remix) de **communiquer avec un nœud de la blockchain** — c'est-à-dire d'envoyer des requêtes (*"quel est le solde de cette adresse ?", "envoie cette transaction"*) et de recevoir des réponses, sans avoir à héberger soi-même une copie complète de la blockchain.

**Dans le contexte Metamask + Sepolia**

Sepolia est un réseau composé de milliers de nœuds. Pour que Metamask puisse lire l'état de ce réseau ou envoyer des transactions, il a besoin de l'**URL d'un point d'accès RPC** — un serveur qui fait l'intermédiaire entre ton navigateur et le réseau Sepolia.

Cette URL RPC est ce qui définit, dans les paramètres réseau de Metamask, **à quel réseau tu es connecté** :
- Pour Ethereum Mainnet → une URL RPC vers le mainnet
- Pour Sepolia → une URL RPC vers Sepolia

**Configuration**

Dans Metamask, quand on sélectionne "Sepolia" dans la liste des réseaux (souvent visible seulement si tu as activé "Afficher les réseaux de test" dans les paramètres), Metamask utilise une URL RPC par défaut, généralement fournie par Infura ou un service similaire.

**Dans Tokenizer**

Lors du deploiement du token Leaf42 sur Sepolia via Remix + Injected Provider (Metamask), le RPC configuré dans Metamask va effectivement transmettre ta transaction de déploiement au réseau Sepolia, puis permettre de vérifier que le contrat existe bien à son adresse.

Doc officielle Metamask sur l'ajout d'un réseau/RPC : https://support.metamask.io/configure/networks/adding-a-network-manually/


## ABI = Application Binary Interface

C'est un fichier au format JSON qui décrit **l'interface** du Smart Contract : 
- la liste de toutes ses fonctions, 
- leurs paramètres, leurs types de retour, 
- ainsi que les événements (`event`) qu'il peut émettre.

**Pourquoi c'est nécessaire**

Un Smart Contract déployé sur la blockchain n'existe, au niveau le plus bas, que sous forme de **bytecode**. Ce bytecode ne contient pas les noms de fonctions lisibles comme `mint()` ou `transfer()` — tout est compilé en sélecteurs de fonction (des hashs de 4 octets).

L'ABI sert de "traducteur" entre :
- le code humain (`monContrat.mint(adresse, montant)`)
- et ce que la blockchain comprend réellement (des données binaires brutes)

Sans l'ABI, un outil externe (un script web3.js/ethers.js, Metamask, un site frontend) ne peut pas savoir comment appeler les fonctions du contrat, même s'il connaît son adresse.

**À quoi cela sert concrètement**

- Réutiliser le contrat depuis un script (ex: `ethers.js`) : tu as besoin de l'**adresse** + l'**ABI** pour créer une instance et appeler ses fonctions
- Reconnecter un contrat déjà déployé dans Remix via "At Address"
- Documenter le projet : montrer l'interface publique du token

Doc officielle : [Solidity](https://docs.soliditylang.org/en/latest/abi-spec.html)
