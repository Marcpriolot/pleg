const inquirer = require('inquirer');

function launch() {
    return inquirer.prompt([
        {
            name: 'pleg',
            type: 'input',
            message: 'Bonjour bienvenue sur Pleg. Une application qui va vous permettre de télécharger des vidéos ou des musique depuis la plateforme de YouTube,\n pour continuer, appuyez sur la touche "n".',
            validate: function(str) {
                return str === 'n';
            }
        },
        {
            name: 'video_audio',
            type: 'list',
            message: 'Que voulez-vous télécharger ?',
            choices: [
                'Vidéo',
                'Musique'
            ]
        },
        {
            type: 'input',
            message: 'Entrez l\'url de la vidéo : ',
            name: 'urlIn'
        },
        {
            name: 'qualite',
            type: 'list',
            message: 'Choississez la qualité de sortie :',
            choices: [
                'Haute qualité (HD)',
                'Normale (< HD)',
                'Basse qualité (360p)'
            ],
            when: function(anwsers) {
                return anwsers.video_audio === 'Vidéo';
            }
        },
        {
            name: 'destination',
            type: 'list',
            message: 'Quelle est la destination du fichier',
            choices: [
                'A l\'endroit de l\'exécution',
                'autre chemin (non fonctionnel)'
            ]
        },
        {
            name: 'cheminOut',
            type: 'input',
            message: 'Entrez le chemin de destination',
            when: function(anwsers) {
                return anwsers.destination === 'autre chemin';
            }
        }
    ])
}
module.exports = {
    launch
};




