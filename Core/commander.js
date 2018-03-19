#!/usr/bin/env node
const program = require('commander');
const actions = require('./actions.js');
const inquirer = require('./inquirer.js');

program
    .version('1.0.0')
    .option('-a, --add', 'Télécharger un fichier')

program.parse(process.argv);

if(program.add){
    inquirer.launch()
        .then((answers) => actions.ajouter(answers))
        .catch(err => console.log(err))
}else if(program.supp){
    actions.supprimer()
}else if(program.list){
    actions.lister()
}else{
    program.help()
}