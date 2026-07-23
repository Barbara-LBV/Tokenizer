# Tokenizer

Projet de création de jeton dans la blockchain de son choix.
Il devra etre possible de faire des échanges de données, des transferts de privilèges ou de propriété des tokens.

```
Noter que dans le cadre de ce projet pédagogique, il n'est donc pas question ici de mettre du "vrai" argent dans la blockchain.
```

## Choix de sa blockchain

Il existe de nombreuses blockchains disponibles.

Exemples :
  - Ethereum
  - BNBChain
  - Bitcoin
  - etc

Il est important de bien choisir la sienne.
Généralement, les critères principaux sont :
```
  - Le coût des transactions (frais de gas)
  - La rapidité et la scalabilité (transactions/sec)
  - La sécurité et la décentralisation du réseau
  - L'écosystème disponible (outils, documentation, communauté de développeurs ...)
```

Dans le cadre de ce projet, Ethereum apparaît comme la blockchain adéquate :
- Son *"Smart Contract"* en Solidity - le langage le plus utilisé pour implémenter ces contrats, avec des normes claires et solides. 
Ici, **ERC-20 pour Ethereum**, un standard conçu pour représenter des tokens fongibles (FT) et gérer leurs transferts de propriété, ce qui correspond a la consigne.
- Un réseau parmi les plus sécurisés et éprouvés (large communauté de développeurs, code source largement audité).
- Un écosystème riche et mature, qui facilite grandement l'apprentissage : 

    - Plusieurs Testnets disponibles et opérationnels (ici **Sepolia**), 
    - Faucets divers pour récupérer de la monnaie de test (ici **Google Faucet**),  
    - Compatibilité avec **Metamask** (Portefeuille/Wallet facile à utiliser, notamment en extension de navigateur) 
    - Déploiement possible directement en ligne avec l'outil **Remix** (IDE en ligne).
    
- Une documentation claire et importante.

```
A noter, sur testnet, le coût et la rapidité des transactions (points faibles connus d'Ethereum sur son réseau principal) ne sont pas un frein pour ce projet.
```

## Organisation du Projet

Voici le contenu de ce repo :

```
.
├── README.md           → présentation du projet et des choix effectués
├── code/               → smart contract(s) ERC-20 et leurs tests
├── deployment/         → scripts et configuration de déploiement (testnet)
└── documentation/      → documentation claire (whitepaper, adresse du contrat déployé, réseau utilisé, etc.)
```

- **code/** : contient le Smart Contract du token (norme ERC-20) ainsi que ses tests. Le code est commenté, avec des noms de variables/fonctions explicites.
- **deployment/** : contient tout ce qui est nécessaire pour déployer le token sur une blockchain publique de test (Sepolia).
- **documentation/** : contient la documentation du projet (whitepaper), expliquant le fonctionnement du token, son utilité, ainsi que l'adresse du smart contract et le réseau utilisé une fois déployé.

