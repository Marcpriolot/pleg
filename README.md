# TP Pleg
Pleg est un petit utilitaire simple qui vous permet de télécharger une vidéo ou une musique depuis YouTube en rentrant juste l'URL de la vidéo.

## Fonctionnement

Le fonctionnement est très simple, il se résume en une commande.

`pleg -a`

Cette commande permet de lancer l'outil.
Il vous reste plus qu'a suivre les étapes et de renseigner les informations qui vous sont demandé.

## Liste des commandes
Racourcis | Commande  | Signification
--- | --- | ---
-h | --help  | Afficher la liste des commandes
-a | --add | Télécharger un fichier
-v  | --version |Afficher la version de Pleg

## Équipe
* Axel Denjean
* Marc Priolot

## Problèmes à régler 
Nous avons un problème au niveau du choix du chemin par l'utilisateur.
Dans Youtube-dl il exite une commande `youtube-dl -o` qui prend en paramètre le chemin d'un dossier rempli par l'utilisateur. Cependant nous avons pas pu basculer cette commande dans la version "youtube-dl" pour nodeJs.
Nous avons essayé pleins de façons différentes sans succès au bout.
Il nous reste donc ça à finir et à ajouter d'autres fonctionnalités, comme les sous-titre, le format de vidéo, etc..

## Window 
Il se peut qu'avec **Window**, Pleg est du mal à fonctionner à cause d'un exécutable qui se trouve dans les modules de **Youtube-dl**.
Si vous rencontrez des difficultés, suivez les instructions de ce site : <https://rg3.github.io/youtube-dl/download.html> 

