#!/usr/bin/env node

const path = require('path');
const fs =  require ('fs');
const exec = require('child_process').exec;

let youtubedl = require('youtube-dl');



function ajouter(a) {
    //ajout d'un fichier
    console.log("Ajout en cours");
    //console.log(a)


// ----------- début --------------------
    const args = [];

    // test Vidéo/Audio
    if (a.video_audio === "Vidéo") {
        switch (a.qualite) {
            case "Haute qualité (HD)":
                //première manière :
                args.push("-f 'best[height>=720]");
                break;
            case "Normale (inférieur à la HD)":
                args.push("-f 'best[height<720]");
                break;
            case "Basse qualité (360p)":
                //deuxième manière :
                args.push('-f', "'best[height=360]");
                break;
            default:
                break;
        }
    } else {
        //troisème méthode
        args.push("--format=bestaudio")
    }

    /*try {*/
        let video = youtubedl(a.urlIn, args);
        video.on('info', function(info) {
            console.log('Début du téléchargement');
            console.log('Titre :', info.title);
            console.log('Info fichier: ' + info.filename);
            console.log('Taille: ' + info.size);

            //Test de l'option autre chemin
           if(a.destination === 'autre chemin (non fonctionnel)') {
               console.log('Autre chemin');
               exec('cd ~/Desktop/');
               const file = path.join(__dirname, info._filename);
               video.pipe(fs.createWriteStream(file));
            } else {
                const file = path.join('./', info._filename);
                video.pipe(fs.createWriteStream(file));
            }
        });
    /*} catch (error) {
        console.log("Une erreur s'est produite, veuillez vérifier vos informations et recommencer.")
    }*/

    video.on('end', function() {
        console.log('Téléchargement fini !');
    });

}

module.exports = {
    ajouter,
};