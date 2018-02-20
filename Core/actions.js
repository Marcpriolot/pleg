#!/usr/bin/env node


var exec = require('child_process').exec, child;

function ajouter() {
    //ajout d'un fichier
    console.log("Ajout en cours")
}

function supprimer() {
    console.log("Suppression en cours")
}

function lister() {
    console.log("Listation en cours")
    exec('dir',
        function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                exec('ls',
                    function (error, stdout, stderr) {
                        console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }
                    });
                console.log('exec error: ' + error);
            }
        });
}

module.exports = {
    ajouter,
    supprimer,
    lister
}