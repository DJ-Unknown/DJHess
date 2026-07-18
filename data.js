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
    - "audio"  : UNIQUEMENT le nom du fichier mp3 (ex :
                 "miley-cyrus-flowers.mp3"), sans dossier devant.
                 Le jeu va automatiquement chercher ce fichier
                 dans audio/<nom-du-theme>/ — donc range bien tes
                 fichiers dans un dossier qui porte EXACTEMENT le
                 même nom que la clé du thème (ex: pour le thème
                 "a_la_campagne" ci-dessous, le fichier doit être
                 dans audio/a_la_campagne/).
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
  un "slug"), ET le même que le nom du dossier audio correspondant.

  Tu peux copier-coller le bloc "exemple" ci-dessous autant de
  fois que tu as de thèmes, et changer les valeurs.
*/

const THEMES = {

  "a_la_campagne": {
    title: "A la campagne",
    tracks: [
      { answer: "Fleurs/Flowers", title: "Flowers", artist: "Miley Cyrus", audio: "miley-cyrus-flowers.mp3", limit: 26, hints: ["Titre", "I can buy myself..."] },
      { answer: "Prairie", title: "La petite maison dans la prairie", artist: "David Rose", audio: "maison-prairie.mp3", limit: 30, hints: ["Série", "Petite maison"] },
      { answer: "Ferme/Fermier", title: "Sans contrefaçon", artist: "Mylène Farmer", audio: "sans-contrefacon.mp3", limit: 30, hints: ["Chanteuse", "Libertine"] },
      { answer: "Des champs", title: "Ramenez la coupe à la maison", artist: "Vegedream", audio: "vegedream-ramenez-la-coupe.mp3", limit: 30, hints: ["Paroles", "Sélectionneur"] },
      { answer: "Village", title: "YMCA", artist: "Village People", audio: "village-people-ymca.mp3", limit: 30, hints: ["Groupe", "People"] },
      { answer: "Oiseaux", title: "Birds", artist: "Imagine Dragons", audio: "imagine-dragons-birds.mp3", limit: 35, hints: ["Titre", "So fly high"] },
      { answer: "Poulain", title: "Comptine d'un autre été", artist: "Yann Tiersen", audio: "yann-tiersen-comptine-ete.mp3", limit: 30, hints: ["Film", "Fabuleux Destin"] }
    ]
  }

  ,"ca_tourne": {
    title: "Ca tourne",
    tracks: [
      { answer: "Le monde", title: "Avant toi", artist: "Viita & Slimane", audio: "avant-toi.mp3", limit: 28, hints: ["Paroles", "Il ne tournait pas rond"] },
      { answer: "Carrousel", title: "Carrousel", artist: "Amir ft Indila", audio: "carrousel.mp3", limit: 29, hints: ["Titre", "Attraction"] },
      { answer: "Les images du long métrage", title: "Je m'en vais", artist: "Vianney", audio: "je-men-vais.mp3", limit: 36, hints: ["Paroles", "Et tournent et tournent dans ma tête"] },
      { answer: "Les violons", title: "Tournent les violons", artist: "Jean-Jacques Goldman", audio: "les-violons.mp3", limit: 34, hints: ["Titre", "Instrument"] },
      { answer: "Moulin", title: "Feel Good Inc.", artist: "Gorillaz", audio: "feel-good.mp3", limit: 32, hints: ["Paroles", "Comme une petite éolienne"] },
      { answer: "Toupie", title: "Time", artist: "Hans Zimmer", audio: "time.mp3", limit: 45, hints: ["Film", "Jouet"] },
      { answer: "Moi", title: "Tourner dans le vide", artist: "Indila", audio: "dans-le-vide.mp3", limit: 35, hints: ["Paroles", "Qui tourne ?"] }
    ]
  }

  /*
  Pour ajouter un nouveau thème, décommente et complète ce
  modèle (retire les /* et *​/ autour du bloc) :

  ,"creatures": {
    title: "Créatures",
    tracks: [
      { answer: "Dragons", title: "Game of Thrones Main Theme", artist: "Ramin Djawadi", audio: "1.mp3", limit: 15, hints: ["Indice 1", "Indice 2"] },
      { answer: "...", title: "...", artist: "...", audio: "2.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "3.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "4.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "5.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "6.mp3", limit: 15, hints: ["...", "..."] },
      { answer: "...", title: "...", artist: "...", audio: "7.mp3", limit: 15, hints: ["...", "..."] }
    ]
  }
  */

};
