# DJ Hess — guide pour ajouter un thème

Ce dépôt contient le jeu de blind test. Ce guide explique comment
ajouter tes propres thèmes et musiques, en modifiant simplement des
fichiers directement depuis GitHub (aucun logiciel à installer).

## Structure du dépôt

- `index.html`, `style.css`, `script.js` → le jeu lui-même
  (tu n'as jamais besoin d'y toucher)
- `data.js` → **le seul fichier que tu modifies** : c'est ici que
  sont listés tous les thèmes et leurs musiques
- `audio/` → un sous-dossier par thème, contenant les fichiers mp3

## Ajouter un nouveau thème

1. Va sur `data.js` dans le dépôt GitHub et clique sur le crayon ✏️
   (« Edit this file ») pour l'éditer directement dans le
   navigateur
2. Copie-colle le modèle commenté en bas du fichier (entre
   `/*` et `*/`), juste avant la ligne `};` qui ferme l'objet
   `THEMES`
3. Décommente-le (retire les `/*` et `*/` autour du bloc) et
   remplis les valeurs — n'oublie pas la virgule `,` avant ton
   nouveau thème s'il y en a déjà un autre au-dessus
4. En bas de page, clique sur "Commit changes" (bouton vert) —
   le site se met à jour tout seul en moins d'une minute

Exemple de thème complet :

```js
"creatures": {
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
```

Le nom entre guillemets (`"creatures"`) doit être sans accent, sans
espace, en minuscules (c'est un "slug") : c'est aussi le nom du
dossier audio correspondant (voir plus bas), et ce qui ira dans
l'adresse de la carte (`?theme=creatures`).

## Les champs de chaque musique

- `answer` : LA réponse attendue des joueurs (ex : "Dragons" — ce
  n'est pas forcément le titre ni l'artiste !)
- `title` : le vrai titre de la musique, affiché uniquement à
  titre informatif, jamais demandé aux joueurs
- `artist` : le vrai artiste / compositeur, affiché uniquement à
  titre informatif
- `audio` : uniquement le **nom du fichier** mp3 (ex :
  `"ma-musique.mp3"`), sans dossier devant. Le jeu va chercher ce
  fichier tout seul dans `audio/nom-du-theme/` — le dossier doit
  donc porter exactement le même nom que la clé du thème
- `limit` : le temps limite en secondes pour trouver la réponse.
  La barre de progression devient rouge une fois ce temps
  dépassé, et la réponse + le titre + l'artiste s'affichent alors
  automatiquement
- `hints` : un tableau de 2 indices texte, ex.
  `["Indice 1", "Indice 2"]`. Le 1er apparaît automatiquement à
  la moitié du temps limite, le 2e aux 3/4. Champ optionnel :
  laisse `""` ou retire le champ si tu ne veux pas d'indice pour
  une musique

## Ajouter les fichiers audio

1. Crée un nouveau dossier dans `audio/` portant exactement le
   même nom que la clé du thème (ex : `audio/creatures/`) — tu
   peux le faire en uploadant directement un fichier dedans avec
   "Add file" → "Upload files", en tapant le chemin
   `audio/creatures/1.mp3` dans la zone de dépôt
2. Dépose tes mp3 dedans, nommés comme tu veux (le nom doit juste
   correspondre à ce que tu as écrit dans le champ `audio` de
   `data.js`)
3. Privilégie des extraits courts (30 secondes à 1 minute) : plus
   légers et plus rapides à charger sur mobile

## Tester

Va sur l'adresse du site sans paramètre pour voir le menu qui
liste tous les thèmes déjà créés dans `data.js`, pratique pour
tester avant de préparer les cartes. Tu peux aussi aller
directement sur `?theme=nom-du-theme` pour ouvrir un thème
précis.

## Besoin d'aide ?

Si un fichier audio ne se lance pas, le jeu affiche un message en
rouge indiquant le chemin exact attendu : vérifie que le nom du
fichier et le nom du dossier correspondent exactement à ce qui
est écrit dans `data.js` (majuscules/minuscules comprises).
