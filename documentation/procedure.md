# Ma Procedure de Creation de Token dans la Blockchain Ethereum Sepolia

## Implementation du Smart Contract

**Remix**
J'ai testé les différents IDE proposés dans le sujet et Remix était le plus intéresant, avec des cours, de la documentation et un compilateur intégré. 
On y trouve des exemples de "Smart Contract" dans la doc, qui m'ont permis d'implémenter le mien, avec les contraintes du sujet.
Lien vers [Remix](https://remix.ethereum.org/)

**OpenZeppelin**
Utile car avec l'import de la librairie, pas besoin d'implémenter les fonctions necessaires au deploiement du "Smart Contract", elles sont directement presentes avec l'heritage ERC20 de OpenZeppelin.
Lien vers doc [openZeppelin](https://docs.openzeppelin.com/contracts)

## Création d'un compte sur un Portefeuille

**Metamask**

 1- Creer un compte Metamask. J'ai choisi l'extension Browser sur mon poste, mais on peut avoir acces via une app web ou locale.

 2- Une fois le portefeuille/wallet créé, vérifier qu'il y a bien des comptes actifs par defaut, sans Token (comptes a 0ETH / 0$), mais avec des adresses.

 3- Afficher les Testnets en déplacant le toggle. Dans la page d'accueil, au niveau de *"all default networks"*, cliquer et chercher/sélectionner **Sepolia**.

 ```
 NB : si Sepolia ne se trouve pas dans la liste des réseaux, vérifier dans les Settings que le RPC de Sepolia est bien actif, sinon, chercher en ligne une adresse de RPC compatible avec Sepolia
 ```
Lien vers [Metamask](https://metamask.io/download/)

## Récupérer des Tokens de test dans un Faucet actif

Maintenant, pour pouvoir tester notre contrat, et faire des transactions, il faut recuperer des tokens dans un faucet actif. J'ai du en tester plusieurs pour avoir des tokens.

1- Copier l'adresse du compte Ethereum sur Metamask (c'est le meme que pour Sepolia)
2- Sur le site du Faucet, copier l'adresse du compte ou c'est indiqué et valider.
3- Vérifier ensuite sur Metamask, dans le network Sepolia, que les fonds sont bien présents.
Cela peut prendre quelques minutes.
```
Attention ! Les fonds ne seront visibles que sur le compte Sepolia (pas Ethereum), car c'est de la monnaie de test - SepoliaETH, sans réelle valeur ! Rien n'apparait sur le compte Ethereum classique.
```

**Liste de Faucets**
[Google Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
[Alchemy](https://www.alchemy.com/faucets/ethereum-sepolia)
*Inconvénient*: Alchemy oblige a avoir un minimum de 0.001ETH sur la MainNet pour pouvoir récupérer des tokens de tests de son Faucet - tous les 24h. Coute entre 2 et 12 euros en fonction de la carte bancaire utilisée !

## Compiler le Contrat
Deux possibilités :

1 - Copier le code .sol du Smart Contract dans le **Solidity Compiler** de Remix - barre latérale gauche.
Cliquer sur "Compile".

2 - Lancer le script de compilation ../deployment/remix_compile.js.

## Déployer le contrat
Une fois la compilation faite et valide, deux possibilités :

1- Lancer le script de deploiement ../deployment/remix_deploy.js.

2- Sur Remix, dans l'onglet **Deploy and Run transactions** - barre latérale gauche.
```
NB : Passer l'environment a "Browser Extension" avec le network "Sepolia Testnet - Metamask" afin de connecter le deploiement du contrat au portfeuille Metamask.
Copier l'adresse du compte Meatmask.
Ajouter une valeur au parametre a la fonction initialSupply() - ex: 1 000.
```
Cliquer sur "Deploy".

Dans le terminal, vérifier que le déploiement est effectif, et vérifier les données des logs.
Sur Metamask, le solde du compte Sepolia doit avoir baissé, en raison des frais de gas appliqués au déploiement.

## Les Tests

