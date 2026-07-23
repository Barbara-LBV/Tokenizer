// Script de compilation automatique pour Remix (a placer dans le dossier
// "scripts" du workspace Remix, puis executer via clic droit > "Run").
//
// Utile pour recompiler Leaf42.sol sans repasser par l'onglet
// "Solidity Compiler" a chaque fois (pratique a enchainer avant
// remix_deploy.js, notamment apres un rechargement de page ou la perte
// de l'etat de compilation).
//
// Note : la version du compilateur et les options d'optimisation utilisees
// sont celles actuellement selectionnees dans l'onglet "Solidity Compiler"
// de Remix (ce script ne les change pas).

const contractPath = 'contracts/Leaf42.sol'
// A adapter si Leaf42.sol se trouve dans un autre dossier du workspace Remix
// (ex: dossier "code" -> 'code/Leaf42.sol')

;(async () => {
  try {
    console.log(`Compilation de ${contractPath}...`)

    await remix.call('solidity', 'compile', contractPath)

    console.log(`Compilation terminee pour ${contractPath}.`)
    console.log('Verifie l\'onglet "Solidity Compiler" pour d\'eventuels warnings/erreurs.')
  } catch (e) {
    console.error(e.message)
  }
})()
