#!/usr/bin/env node


var exec = require('child_process').exec, child;

function child() {
    exec('cat *.js bad_file | wc -l',
        function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
}

function ajouter() {
    //ajout d'un fichier
    console.log("Ajout en cours")




    child();

}

function supprimer() {
    console.log("Suppression en cours")
}

function lister() {
    console.log("Listation en cours")
}

module.exports = {
    ajouter,
    supprimer,
    lister
}