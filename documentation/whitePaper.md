# Whitepaper - Leaf42 (LF42)

## 1. Résumé

**Leaf42** (ticker : **LF42**) est un token fongible (FT) conforme à la norme **ERC-20**, déployé sur le réseau Ethereum (testnet **Sepolia**) dans le cadre du projet pédagogique *Tokenizer*.
Son objectif est de démontrer, de façon concrète et fonctionnelle, la création, le déploiement et l'usage d'un jeton sur une blockchain publique : échange de tokens entre comptes, gestion de la propriété (ownership) et délégation de privilèges de transfert.

```
Ce projet est strictement pédagogique : Leaf42 n'a aucune valeur réelle et n'est déployé que sur un réseau de test (Sepolia), à l'aide de monnaie de test obtenue via un faucet.
```

## 2. Contexte et objectifs

Ce token a été créé dans le cadre du projet *Tokenizer* (école 42), dont l'objectif est de comprendre et manipuler les briques de base du Web3 : choix d'une blockchain, écriture d'un smart contract respectant une norme (ici ERC-20), déploiement sur un testnet, et interaction avec ce contrat (transferts, propriété, privilèges).

Leaf42 sert donc de démonstrateur : il illustre les mécanismes standards d'un token ERC-20 plutôt que de répondre à un besoin commercial ou financier réel.

## 3. Caractéristiques du token

| Propriété          | Valeur                                             |
|--------------------|-----------------------------------------------------|
| Nom                | Leaf42                                              |
| Ticker             | LF42                                                |
| Standard           | ERC-20 (via OpenZeppelin Contracts 4.9.6)           |
| Blockchain         | Ethereum                                            |
| Réseau             | Sepolia (testnet)                                   |
| Décimales          | 18 (valeur par défaut ERC-20)                       |
| Offre initiale     | Définie au déploiement via le paramètre `initialSupply` |
| Offre maximale     | Aucune limite fixe : de nouveaux tokens peuvent être créés via `mint()` |

Adresse du contrat déployé et détails de déploiement : voir [deployment.md](../deployment/deployment.md).

## 4. Fonctionnement

Leaf42 implémente l'intégralité de l'interface ERC-20 (héritée d'OpenZeppelin) :
- **totalSupply()**, **balanceOf()** : consultation de l'offre totale et des soldes
- **transfer()** : transfert direct de tokens entre deux comptes
- **approve()** / **allowance()** / **transferFrom()** : délégation d'un droit de dépense à un tiers, qui peut alors transférer des tokens au nom du propriétaire dans la limite autorisée

En plus de la norme, deux mécanismes de gestion des privilèges sont ajoutés via **Ownable** :
- Le compte ayant déployé le contrat devient son **owner** (propriétaire du contrat, différent de la notion de propriétaire de tokens)
- Une fonction **mint(to, amount)**, réservée exclusivement à cet owner (modifier `onlyOwner`), permet de créer de nouveaux tokens vers une adresse donnée

Voir le code commenté : [Leaf42.sol](../code/Leaf42.sol).

## 5. Propriété et privilèges

Deux notions de "propriété/privilège" coexistent dans ce projet, à ne pas confondre :

1. **Propriété des tokens** : chaque compte détient un solde de LF42 (`balanceOf`), qui peut être transféré librement (`transfer`) ou par délégation (`approve` + `transferFrom`) — voir [lexique.md](lexique.md).
2. **Propriété du contrat** (ownership) : un seul compte (le déployeur) a le privilège d'appeler `mint()`. Ce privilège peut être transféré (`transferOwnership`) ou abandonné (`renounceOwnership`), fonctions héritées d'`Ownable`.

## 6. Sécurité

- Le code repose sur les implémentations `ERC20` et `Ownable` d'OpenZeppelin, largement auditées et utilisées dans l'industrie, plutôt que sur une réécriture manuelle sujette à erreurs.
- La fonction `mint()`, seule fonction sensible ajoutée au contrat, est protégée par le modifier `onlyOwner` : seul le compte owner peut créer de nouveaux tokens.
- Le déploiement et tous les tests sont réalisés exclusivement sur le testnet Sepolia, avec de la monnaie de test (SepoliaETH obtenue via faucet), sans aucun risque financier réel.

## 7. Déploiement et vérification

Le contrat a été déployé sur Sepolia et **vérifié sur Sepolia Etherscan** (code source public, correspondance bytecode confirmée), ce qui permet à quiconque de consulter le code, lire l'état du contrat (`Read Contract`) et interagir avec lui (`Write Contract`) directement depuis l'explorateur.

## 8. Procédure de déploiement

Étapes suivies pour implémenter, compiler et déployer Leaf42.

### Implémentation du Smart Contract

**Remix** : parmi les IDE proposés par le sujet, Remix a été retenu pour ses cours intégrés, sa documentation et son compilateur en ligne. Ses exemples de Smart Contracts ont servi de base à l'implémentation de Leaf42.
Lien : [Remix](https://remix.ethereum.org/)

**OpenZeppelin** : l'import de la librairie évite de ré-implémenter les fonctions nécessaires à un Smart Contract ERC-20 : elles sont directement héritées via `ERC20` et `Ownable`.
Lien : [documentation OpenZeppelin](https://docs.openzeppelin.com/contracts)

### Création d'un compte sur un portefeuille

**Metamask** :
1. Créer un compte Metamask (extension navigateur, application web ou locale).
2. Vérifier que les comptes par défaut sont actifs, avec une adresse mais sans token (0 ETH).
3. Activer l'affichage des testnets, puis sélectionner **Sepolia** dans la liste des réseaux ("all default networks").

```
NB : si Sepolia n'apparaît pas dans la liste des réseaux, vérifier dans les Settings que son RPC est actif, sinon renseigner une adresse RPC compatible avec Sepolia.
```

Lien : [Metamask](https://metamask.io/download/)

### Récupération de tokens de test via un Faucet

Pour tester le contrat et effectuer des transactions, il faut récupérer des tokens de test (plusieurs faucets ont dû être testés) :
1. Copier l'adresse du compte Metamask (la même pour Ethereum et Sepolia).
2. La renseigner sur le site du Faucet choisi et valider.
3. Vérifier sur Metamask, réseau Sepolia, que les fonds sont bien crédités (peut prendre quelques minutes).

```
Attention : les fonds ne sont visibles que sur le compte Sepolia (pas sur Ethereum Mainnet), car il s'agit de SepoliaETH, une monnaie de test sans valeur réelle.
```

**Faucets utilisés :**
- [Google Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) — limité à une récupération toutes les 24h.
- [Alchemy](https://www.alchemy.com/faucets/ethereum-sepolia) — nécessite un minimum de 0.001 ETH sur le Mainnet pour débloquer le faucet (coût réel de quelques euros), également limité à toutes les 24h.

### Compilation du contrat

Deux possibilités :
1. Copier le code `.sol` dans l'onglet **Solidity Compiler** de Remix, puis cliquer sur "Compile".
2. Lancer le script [remix_compile.js](../deployment/remix_compile.js).

### Déploiement du contrat

Une fois la compilation validée, deux possibilités :
1. Lancer le script [remix_deploy.js](../deployment/remix_deploy.js).
2. Depuis l'onglet **Deploy and Run Transactions** de Remix :

```
Sélectionner l'environnement "Injected Provider - Metamask" avec le réseau Sepolia, pour connecter le déploiement au portefeuille Metamask.
Renseigner le paramètre du constructeur initialSupply (ex : 1000), puis cliquer sur "Deploy".
```

Vérifier ensuite dans le terminal Remix que le déploiement est effectif (logs), et que le solde Sepolia du compte a diminué (frais de gas).

### Tests à réaliser

Étapes de validation du bon fonctionnement du contrat, directement depuis Remix ou depuis Etherscan (`Write Contract`) :
- [ ] `mint()` appelé par le compte owner : doit réussir et augmenter le solde du destinataire.
- [ ] `mint()` appelé par un autre compte : doit échouer (revert `Ownable: caller is not the owner`).
- [ ] `transfer()` entre deux comptes : doit réussir et mettre à jour les deux soldes.
- [ ] `approve()` + `transferFrom()` depuis un compte tiers : doit réussir dans la limite de l'allowance accordée.

```
Ces vérifications restent à exécuter et à consigner (captures ou hash de transaction) avant la soutenance.
```

## 9. Avertissement

Leaf42 est un projet strictement éducatif. Il ne constitue ni un investissement, ni une monnaie ayant cours légal, ni un actif ayant une quelconque valeur en dehors du cadre de cet exercice.
