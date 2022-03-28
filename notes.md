//1er **npx create-react-app shiny-agency**
--------------------------------
//2eme **yarn add react-router-dom**
-------------------------------
3ème **yarn add -D prettier**
Il vous suffit d'aller dans les paramètres de votre IDE (  Code  >  Preferences  >  Settings  ) pour activer la commande  formatOnSave  . Elle permettra de formater le fichier à chaque fois que vous sauvegardez. Yay ! 🎉

Vous pouvez également aller dans la barre de recherche de votre IDE, taper "format" et activer  formatOnSave  :
Editor : Format On Save cocher Format a file on save. A formatter must be available, the file...down
c'est ce paramétrage à activer dans VSCode  pour formater en sauvegardant
Le paramétrage à activer dans VSCode pour formater en sauvegardant

Mais attendez, on n'a pas encore fini ! Nous allons aussi activer l'option qui permet d'éviter de modifier tous les fichiers à tort et à travers.

Tapez  require config  et descendez sur le paramètre correspondant à Prettier. Activez le paramètre comme ci-dessous :
cocher 
Prettier : require Config require a prettier configuration file to format. See documentation ...using the VS Code prettier ...is set.

Activez cette option dans vos paramètres pour formater uniquement les fichiers qui ont une config Prettier
Cela permet de préciser à VSCode de formater le fichier uniquement quand une configuration est présente dans le projet pour Prettier.

Donc à nous d'en créer une !

À la racine de votre projet, créez un fichier  .prettierrc  dans lequel vous allez pouvoir préciser quelques règles. Vous trouverez l'ensemble de ces règles dans la documentation de Prettier. Typiquement, si vous voulez supprimer tous les points-virgules, vous faites :

{
"semi": false
}
Et voilà, si vous retournez dans votre fichier  Home/index.jsx  , vous avez bien :Au revoir les points-virgules !

-4eme **yarn add styled-components** pour styled et globalstyle

- ajout Link useparam
- pour rating : npx create-react-app star-rating
- yarn add react-chevron
- npm install react-image-gallery
-# CSS
@import "~react-image-gallery/styles/css/image-gallery.css";