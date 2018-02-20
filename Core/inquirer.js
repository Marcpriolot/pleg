const inquirer = require('inquirer');


inquirer.prompt([
    {
        name: 'pleg',
        type: 'input',
        message: 'Bonjour bienvenue sur Pleg. Une application qui va vous permettre d\'encoder des vidéos ou musique dans un autre format,\n pour continuer, appuyez sur la touche "n".',
        validate: function(str) {
            return str === 'n';
        }
    },
    {
        name: 'fichierOrigine',
        type: 'checkbox',
        message: 'Que voulez-vous encoder ?',
        choices: [
            'Vidéo',
            'Musique'
        ]
    },
    {
        type: 'input',
        message: 'Entrez le chemin de votre fichier',
        name: 'cheminIn'
    },
    {
        name: 'destination',
        type: 'checkbox',
        message: 'Quel est la destination du fichier',
        choices: [
            'Même endroit',
            'autre chemin'
        ]
    },
    {
        type: 'input',
        message: 'Entrez le chemin de destination',
        name: 'cheminOut',
        when: function(anwsers) {
            return anwsers.destination === 'autre chemin';
        }
    },
    {
        name: 'encodeVideo',
        type: 'checkbox',
        message: 'Dans quel format voulez-vous encoder la vidéo',
        choices: [
            '.avi',
            '.mp4'
        ],
        when: function(anwsers) {
            return anwsers.fichierOrigine === 'Vidéo';
        }
    },
    {
        name: 'encodeMusique',
        type: 'checkbox',
        message: 'Dans quel format voulez-vous encoder la musique',
        choices: [
            '.mp3'
        ],
        when: function(anwsers) {
            return anwsers.fichierOrigine === 'Musique';
        }
    }
]).then((result) => {
    console.log(result)
});

