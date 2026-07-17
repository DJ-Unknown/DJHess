/*
  ===========================================================
  DATA.JS — C'est le SEUL fichier que tu dois modifier
  pour ajouter tes thèmes et tes musiques.
  ===========================================================

  Pour CHAQUE thème (= chaque carte physique), tu crées une
  entrée dans l'objet THEMES ci-dessous, avec :

    - "title"  : le nom du thème (affiché en haut de l'écran)
    - "tracks" : un tableau de 7 musiques (dans l'ordre)

  Pour CHAQUE musique, informations à renseigner :

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
    - "hints"  : un tableau de 2 indices textuels (ex :
                 ["Indice 1", "Indice 2"]). Le 1er apparaît
                 automatiquement à la moitié du temps limite,
                 le 2e aux 3/4 du temps limite. Optionnel : si tu
                 ne renseignes pas ce champ (ou laisses une case
                 vide ""), l'indice correspondant n'apparaît
                 simplement pas.

  Comportement dans le jeu :
    - Le bouton "Afficher la réponse" ne montre QUE le champ
      "answer" (pour que l'arbitre puisse vérifier une réponse
      de joueur sans dévoiler le titre/artiste)
    - Les indices ("hints") apparaissent automatiquement pendant
      l'écoute, à la moitié puis aux 3/4 du temps limite
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
      { answer: "Fleurs/Flowers", title: "Flowers", artist: "Miley Cyrus", audio: "audio/a_la_campagne/miley-cyrus-flowers.mp3", limit: 26, hints: ["Titre", "I can buy myself..."] },
      { answer: "Prairie", title: "La petite maison dans la prairie", artist: "David Rose", audio: "audio/a_la_campagne/maison-prairie.mp3", limit: 30, hints: ["Série", "Petite maison"] },
      { answer: "Ferme/Fermier", title: "Sans contrefaçon", artist: "Mylène Farmer", audio: "audio/a_la_campagne/sans-contrefacon.mp3", limit: 30, hints: ["Chanteuse", "Libertine"] },
      { answer: "Des champs", title: "Ramenez la coupe à la maison", artist: "Vegedream", audio: "audio/a_la_campagne/vegedream-ramenez-la-coupe.mp3", limit: 30, hints: ["Paroles", "Sélectionneur"] },
      { answer: "Village", title: "YMCA", artist: "Village People", audio: "audio/a_la_campagne/village-people-ymca.mp3", limit: 30, hints: ["Groupe", "People"] },
      { answer: "Oiseaux", title: "Birds", artist: "Imagine Dragons", audio: "audio/a_la_campagne/imagine-dragons-birds.mp3", limit: 35, hints: ["Titre", "So fly high"] },
      { answer: "Poulain", title: "Comptine d'un autre été", artist: "Yann Tiersen", audio: "audio/a_la_campagne/yann-tiersen-comptine-ete.mp3", limit: 30, hints: ["Film", "Fabuleux Destin"] }
    ]
  }

  /*
  Pour ajouter un nouveau thème, décommente et complète ce
  modèle (retire les /* et *​/ autour du bloc) :

  ,"creatures": {
    title: "Créatures",
    tracks: [
      { answer: "Dragons", title: "Game of Thrones Main Theme", artist: "Ramin Djawadi", audio: "audio/creatures/1.mp3", limit: 15, hints: ["Indice 1", "Indice 2"] },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/2.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/3.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/4.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/5.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/6.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "audio/creatures/7.mp3", limit: 15, hints: ["...", "..."] }
    ]
  }
  */

};
