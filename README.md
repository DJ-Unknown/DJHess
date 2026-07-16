# Blind Test — mode d'emploi

Ce dossier contient tout ton petit jeu, prêt à mettre en ligne
gratuitement. Tu n'as besoin d'installer aucun logiciel : tout se
fait depuis le site github.com dans ton navigateur.

## Ce qu'il y a dans le dossier

- `index.html` → la page du jeu (tu n'as jamais besoin d'y toucher)
- `style.css` → l'apparence (tu n'as jamais besoin d'y toucher)
- `script.js` → le fonctionnement (tu n'as jamais besoin d'y toucher)
- `data.js` → **le seul fichier que tu modifies** : c'est ici que
  tu listes tes thèmes et tes musiques
- `audio/` → dossier où tu ranges tes fichiers mp3, un sous-dossier
  par thème (ex : `audio/exemple/`, `audio/creatures/`...)

## Étape 1 — Créer un compte GitHub

1. Va sur https://github.com
2. Clique sur "Sign up" et crée un compte gratuit (email + mot de passe)

## Étape 2 — Créer le dépôt (le "dossier en ligne")

1. Une fois connecté, clique sur le "+" en haut à droite puis
   "New repository"
2. Donne-lui un nom simple, sans espace ni accent, par exemple
   `blind-test`
3. Laisse-le en "Public"
4. Ne coche aucune case (pas de README, pas de .gitignore)
5. Clique sur "Create repository"

## Étape 3 — Mettre tes fichiers en ligne

1. Sur la page de ton dépôt tout neuf, clique sur le lien
   "uploading an existing file"
2. Glisse-dépose TOUT le contenu de ce dossier (les fichiers
   `index.html`, `style.css`, `script.js`, `data.js`, et le dossier
   `audio` avec tes mp3 dedans) dans la zone prévue
   - Astuce : glisse le dossier `audio` en entier, GitHub garde
     l'arborescence des sous-dossiers
3. En bas de page, clique sur "Commit changes" (le bouton vert)

Tu pourras toujours revenir plus tard sur cette même page
("Add file" → "Upload files") pour ajouter de nouveaux thèmes ou
corriger `data.js`.

## Étape 4 — Activer GitHub Pages

1. Dans ton dépôt, va dans l'onglet "Settings"
2. Dans le menu de gauche, clique sur "Pages"
3. Dans "Branch", choisis `main` (garde `/ (root)`) puis "Save"
4. Attends une minute, puis rafraîchis la page : une bannière
   verte t'indique l'adresse de ton site, du type :
   `https://ton-pseudo.github.io/blind-test/`

Cette adresse est ton jeu, en ligne, gratuitement, pour toujours.

## Étape 5 — Ajouter tes thèmes dans `data.js`

Ouvre `data.js` (bouton "crayon" ✏️ sur la page du fichier dans
GitHub, pour l'éditer directement dans le navigateur). Le fichier
est commenté en détail. En résumé, pour chaque thème :

```js
"creatures": {
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
```

Le nom entre guillemets (`"creatures"`) doit être sans accent, sans
espace, en minuscules : c'est ce qui ira dans l'adresse de la carte.
N'oublie pas la virgule entre deux thèmes (juste avant `"creatures"`
s'il y en a un autre avant).

Quatre informations par musique :
- `answer` : la réponse que les joueurs doivent trouver (ex :
  "Dragons" pour une musique de Game of Thrones dans un thème
  "Créatures" — ce n'est pas forcément le titre ni l'artiste)
- `title` : le vrai titre de la musique, affiché seulement à titre
  informatif
- `artist` : le vrai artiste, affiché seulement à titre informatif
- `limit` : le temps en secondes à partir duquel la barre devient
  rouge et où la réponse + le titre + l'artiste s'affichent
  automatiquement (le temps est écoulé)

Dans le jeu : le bouton "Afficher la réponse" ne montre QUE
`answer`, pour que l'arbitre puisse vérifier la réponse d'une
équipe sans dévoiler le titre ni l'artiste. Une fois le temps
limite dépassé pendant la lecture, les trois informations
s'affichent automatiquement.

Après modification, clique sur "Commit changes" en bas de la page
GitHub. Le site se met à jour tout seul en moins d'une minute.

## Étape 6 — Ajouter les fichiers audio

- Formats : `mp3` fonctionne partout
- Garde des extraits courts (30 secondes à 1 minute suffisent pour
  un blind test) : les fichiers sont plus légers et plus rapides à
  charger sur mobile
- Dépose-les dans `audio/nom-du-theme/` avec les noms `1.mp3` à
  `7.mp3`, dans le même ordre que dans `data.js`

## Étape 7 — Générer le QR code de chaque carte

L'adresse de chaque thème est :

```
https://ton-pseudo.github.io/blind-test/?theme=creatures
```

(remplace `creatures` par le nom exact du thème dans `data.js`)

Pour transformer cette adresse en QR code, utilise un générateur
gratuit comme https://www.qr-code-generator.com/ ou
https://qrcode-monkey.com/ : colle l'adresse, télécharge l'image,
imprime-la sur ta carte physique.

## Tester sans QR code

Si tu vas directement sur `https://ton-pseudo.github.io/blind-test/`
(sans `?theme=...`), tu arrives sur un petit menu qui liste tous
les thèmes déjà créés dans `data.js` — pratique pour tester avant
d'imprimer les cartes.

## Besoin d'aide ?

Si un fichier audio ne se lance pas, le jeu affiche un message en
rouge indiquant le chemin du fichier attendu : vérifie que le nom
et l'emplacement correspondent exactement à ce qui est écrit dans
`data.js` (majuscules/minuscules comprises).
