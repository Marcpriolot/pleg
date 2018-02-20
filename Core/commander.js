#!/usr/bin/env node
const program = require('commander')
const actions = require('./actions.js')

program
    .version('1.0.0')
    .option('-a, --add', 'Télécharger une vidéo')
    .option('-s, --supp', 'Supprimer une vidéo')
    .option('-l, --list', 'Lister toutes les vidéos')

program.parse(process.argv)

if(program.add){
    actions.ajouter()
}else if(program.supp){
    actions.supprimer()
}else if(program.list){
    actions.lister()
}else{
    program.help()
}