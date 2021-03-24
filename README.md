# Meteor Blaze Kit

Bienvenue dans ce README et dans ce projet dans le cadre du cours Programmation pour Internet II ! L'objectif est de proposer une ressource de base vous aidant à comprendre Meteor. La meilleure façon d'utiliser ce kit ? Lancer les applications, les tester, regarder le code et comprendre quelle ligne fait quoi ! Si vous comprenez tout ce qui se passe dans les exemples, développer vos application sera plus facile !

## Infos de contact:

* Isaac Pante:
    * [isaac.pante@unil.ch](mailto:isaac.pante@unil.ch)
* Loris Rimaz:
    * [loris.rimaz@unil.ch](mailto:loris.rimaz@unil.ch)

## Comment utiliser le kit:

La façon la plus simple d'utiliser le kit est de le cloner sur votre ordinateur (ou simplement télécharger une archive .zip). Je vous recommande de le mettre sur votre bureau ! Une fois le kit cloné/téléchargé:

1. Ouvrez votre terminal/invite de commande et placez vous dans le dossier du projet. Sur MacOS: `cd Desktop/meteor_blaze_kit/`. Sur Windows: `cd C:\users\[username]\desktop\meteor-blaze-kit\`.
2. Vous avez maintenant 4 dossiers à choix: `example_1`, `example_2`,  `example_3`  et  `template_ex`. Tapez simplement `cd [dossier de votre choix]`.
3. Une fois dans un dossier, entrez `meteor run`. Voilà ! L'exemple devrait fonctionner !
    * (Optionnel) Il arrive que l'environement du code ne fonctionne pas immédiatement, si vous avez un doute, entrez `meteor npm install`. Tout les packages seront mis à jour.
4. Pour le dernier dossier (`template_ex`), il s'agit d'un gros projet avec de nombreuses étapes (en effet, si vous ouvrez le dossier `template_ex/imports/ui/`, vous pourrez voir une multitudes de fichiers avec le nom `body#.js`). Pour voir l'évolution du code, allez dans le dossier `template_ex/client/` et remplacez le chiffre à la ligne suivante dans le fichier `main.js`: `import '../imports/ui/body1.js';`.

**Voilà** ! En principe vous devriez pouvoir utiliser le kit. Si vous avez des problèmes, des remarques ou des suggestions, n'hésitez pas à nous envoyer un mail ou à nous poser des questions pendant le cours !

## Description des exemples

### Exemple 1

Un petit exemple simple qui vous montre comment un helper permet de modifier le contenu de la page. En effet, la liste est remplie à l'aide d'un helper dans le fichier `./imports/ui/scripts/listeScript.js`
 
### Exemple 2

Cet exemple vise à mettre en place deux éléments: les events et les bases de données. Lors du clic sur le bouton, le navigateur demande un nom à l'utilisateur. Ce nom sera alors ajouté à la base de données et aussi tôt affiché. La base de données est créée dans le fichier `./imports/api/objetsListe.js`. Il ne faut pas oublier de l'initialiser sur le serveur dans le fichier `./server/main.js` et de l'importer dans les fichiers nécessaires (tels que `./imports/ui/scripts/listeScript.js`) et le tour est joué !

### Exemple 3

