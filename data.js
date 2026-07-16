/*
  ===========================================================
  DATA.JS — C'est le SEUL fichier que tu dois modifier
  pour ajouter tes thèmes et tes musiques.
  ===========================================================

  Pour CHAQUE thème (= chaque carte physique), tu crées une
  entrée dans l'objet THEMES ci-dessous, avec :

    - "title"  : le nom du thème (affiché en haut de l'écran)
    - "tracks" : un tableau de 7 musiques (dans l'ordre)

  Pour CHAQUE musique, 4 informations à renseigner :

    - "answer" : LA réponse attendue des joueurs
                 (ex : "Dragons" — ce n'est pas forcément le
                 titre ni l'artiste !)
    - "title"  : le titre réel de la musique (ex : "Game of Thrones
                 Main Theme") — affiché uniquement à titre
                 informatif, jamais demandé aux joueurs
    - "artist" : l'artiste / compositeur réel (ex : "Ramin Djawadi")
                 — affiché uniquement à titre informatif
    - "audio"  : le chemin vers le fichier mp3 (à mettre dans le
                 dossier audio/nom-du-theme/)
    - "limit"  : le temps limite en secondes pour trouver la
                 réponse (la barre de progression devient rouge
                 une fois ce temps dépassé, et la réponse +
                 titre + artiste s'affichent alors automatiquement)

  Comportement dans le jeu :
    - Le bouton "Afficher la réponse" ne montre QUE le champ
      "answer" (pour que l'arbitre puisse vérifier une réponse
      de joueur sans dévoiler le titre/artiste)
    - Une fois le temps limite dépassé, answer + title + artist
      s'affichent tous les trois automatiquement

  Le nom du thème dans l'URL (ex: ?theme=exemple) doit être
  EXACTEMENT le même que la clé utilisée ci-dessous (sans
  accents, sans espaces, en minuscules — c'est ce qu'on appelle
  un "slug").

  Tu peux copier-coller le bloc "exemple" ci-dessous autant de
  fois que tu as de thèmes, et changer les valeurs.
*/

const THEMES = {

  "a_la_campagne": {
    title: "A la campagne",
    tracks: [
      { answer: "Fleurs/Flowers", title: "Flowers", artist: "Miley Cyrus", audio: "audio/a_la_campagne/miley-cyrus-flowers.mp3", limit: 26 },
      { answer: "Réponse 2", title: "Titre de la musique 2", artist: "Artiste 2", audio: "audio/exemple/2.mp3", limit: 15 },
      { answer: "Réponse 3", title: "Titre de la musique 3", artist: "Artiste 3", audio: "audio/exemple/3.mp3", limit: 15 },
      { answer: "Réponse 4", title: "Titre de la musique 4", artist: "Artiste 4", audio: "audio/exemple/4.mp3", limit: 15 },
      { answer: "Réponse 5", title: "Titre de la musique 5", artist: "Artiste 5", audio: "audio/exemple/5.mp3", limit: 15 },
      { answer: "Réponse 6", title: "Titre de la musique 6", artist: "Artiste 6", audio: "audio/exemple/6.mp3", limit: 15 },
      { answer: "Réponse 7", title: "Titre de la musique 7", artist: "Artiste 7", audio: "audio/exemple/7.mp3", limit: 15 }
    ]
  }

  /*
  Pour ajouter un nouveau thème, décommente et complète ce
  modèle (retire les /* et *​/ autour du bloc) :

  ,"creatures": {
    title: "Créatures",
    tracks: [
      { answer: "Dragons", title: "Game of Thrones Main Theme", artist: "Ramin Djawadi", audio: "audio/creatures/1.mp3", limit: 15 },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/2.mp3", limit: 15 },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/3.mp3", limit: 15 },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/4.mp3", limit: 15 },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/5.mp3", limit: 15 },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/6.mp3", limit: 15 },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/7.mp3", limit: 15 }
    ]
  }
  */

};
