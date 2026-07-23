// Script de deploiement automatique pour Remix (a placer dans le dossier
// "scripts" du workspace Remix, puis executer via clic droit > "Run").
//
// Utile car l'environnement "Remix VM" (JS VM) ne persiste pas les contrats
// deployes entre deux rechargements de page : ce script evite de repasser
// manuellement par l'onglet "Deploy & Run Transactions" a chaque fois.
// Fonctionne aussi avec "Injected Provider - MetaMask" (Sepolia) pour un
// deploiement reel et persistant sur la blockchain.
//
// Pre-requis : avoir compile Leaf42.sol dans Remix au prealable, pour que
// l'artefact JSON (ABI + bytecode) existe.

import { ethers } from 'ethers'

const contractName = 'Leaf42'
const constructorArgs = [1000] // initialSupply()

;(async () => {
  try {
    console.log(`Deploiement de ${contractName}...`)

    // Chemin de l'artefact genere par Remix a la compilation.
    // A adapter si Leaf42.sol se trouve dans un autre dossier que "contracts"
    // dans le workspace Remix (ex: "code" -> browser/code/artifacts/Leaf42.json)
    const artifactsPath = `browser/contracts/artifacts/${contractName}.json`

    const metadata = JSON.parse(
      await remix.call('fileManager', 'getFile', artifactsPath)
    )

    // 'web3Provider' est fourni par l'environnement Remix selectionne
    // (Remix VM, Injected Provider - MetaMask, etc.)
    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner()
    const factory = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer)

    const contract = await factory.deploy(...constructorArgs)
    console.log('Transaction envoyee, en attente de confirmation...')
    await contract.deployed()

    console.log(`${contractName} deploye a l'adresse : ${contract.address}`)
  } catch (e) {
    console.error(e.message)
  }
})()
