<h2> Meteor Blaze Kit </h2>
<p> 
  Bienvenue dans ce README et dans ce projet dans le cadre du cours Programmation pour Internet II! <br/>
  Vous trouverez ici les informations importantes concernant ce kit ainsi que la liste d'exercices et des exemples. <br/><br/>
  <b> Infos de contact: </b>
<p>
<ul>
  <li>
    Isaac Pante:
      <ul>
        <li> <a href="mailto:isaac.pante@unil.ch"> isaac.pante@unil.ch </a> </li>
    </ul>
  </li>
  <li>
    Loris Rimaz:
      <ul>
        <li> <a href="mailto:loris.rimaz@unil.ch"> loris.rimaz@unil.ch </a> </li>
    </ul>
  </li>
</ul>
<p> Tout d'abord, quelques informations concernant l'utilisation du kit: <p>
<ul>
  <li> Chaque concept est détaillé ci-dessous </li>
  <li> Des liens directs vers les bons fichiers seront mis à disposition avec chaque exemple </li>
  <li> Pour tester le différents codes, il suffit de télécharger le projet et de changer le chiffre de body#.js à la ligne suivante (selon le code que l'on souhaite exécuter): import '../imports/ui/<b>body#.js</b>'; dans ../client/main.js. (par défaut, "body1.js")</li>
<ul>
<h3> Liste des sujets </h3>
<ul>
  <li> <a href="#-les-templates-">Les templates</a></li>
  <li> <a href="#-bases-de-donn%C3%A9es-mongodb-">Bases de données (mongoDB)</a></li>
</ul>
<br/>
<br/>
<h2> Utilsation </h2>
<p> "C'est bien joli tout ça mais je fais quoi?" Eh bien après avoir installé Meteor, il suffit de lancer le serveur (s'assurer d'être dans le dossier du projet et taper "meteor" dans l'invite de commande)! Très simple!</p>
<p> "Mais l'exemple qui est décrit n'est pas le même, comment faire?" Pour s'assurer de voir le bon résultat, une indication sur le fichier "body#.js" sera donnée au début de chaque explication. Ainsi, il vous suffit d'ouvrir le fichier ../client/main.js et de remplacer la valeur "#" de '../imports/ui/<b>body#.js</b>' par la valeur correspondante et le tour est joué!</p>
<p> "J'ai dautres questions qui ne sont pa détaillées ici!" CContactez moi par mail: loris.rimaz@unil.ch ou demandez moi en classe. </p>
<br/>
<h2> Les templates </h2>
<h3> Qu'est-ce qu'un template? </h3>
<p> Un template est une façon de créer des éléments en HTML, des les ajouter dans le corps de l'application et surtout de les modifier via le JavaScript. En HTML, un template se présente sous la forme d'une balise <template> qui prend un attribut "nom". Ce nom sera utilisé pour intégrer le template dans le HTML avec la notation suivante {{> monTemplate}}. C'est aussi avec ce nom que l'on référencera le template dans le JavaScript. Comme on peut le voir dans cet <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body.html"> exemple </a>, le template affiche le texte "Bonjour, je suis un template" simplement en le référant dans le HTML avec "{{> bonjour}} </p>
<p> Assez simple, non? </p>
<h3> Templating avec JavaScript </h3>
<p> Comme mentionné ci-desssu, l'avantage des templates est la possibilité de modifier leur contenur via un script JavaScript. Toujours dans la même idée que le précédent, cet <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.html"> exemple </a> montre que le template "bonjour" n'est même plus définit en HTML, à la place du contenu de la balise p, on trouve {{texte}}. De même pour cette formulation étrange: </p>
&lt;ul&gt; <br/>
&nbsp;&nbsp;{{#each elem}} <br/>
&nbsp;&nbsp;&nbsp;&nbsp;{{>liste}} <br/>
&nbsp;&nbsp;{{/each}} <br/>
&lt;/ul&gt; <br/><br/>
<p> Ces 5 lignes de codes introduisent la notion de logique dans le templating: {{#each}}, qui sert de boucle, et, par exemple, {{#if}}, pas visible dans l'exemple mais néanmoins existant et utilisé, permettent d'ajouter de la logique et des conditions. Ici, comme le précise le commentaire, la logique est la suivante: pour chanque (each) élément de ma liste, ajouter un template {{>liste}}, qui contient une balise li. Ainsi, le programme va chercher tous les éléments correspondants dans le <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.js"> JavaScript </a> et va ajouter une balise li par élément. On peut ajouter un élément à la liste dans le JavaScript et la page se mettera à jour pour accueillir le nouvel élément. Une autre chose à noter est la notion de "helpers". Un helper va permettre de définir et modifier du contenu HTML dans le template via le JavaScript. Ainsi, on définit un helper pour le template "bonjour" à la ligne 7 et on y ajoute un texte en faisant correspondre le nom de la variable ("texte") avec la variable utilisiée pour l'ajouter dans le HTML ( {{texte}} ). </p>
<p> Pour plus d'informations: <p>
<ul>
  <li><a href="https://www.meteor.com/tutorials/blaze/templates">Tutoriel Meteor</a></li>
  <li><a href="https://docs.meteor.com/v1.3.5/api/templates.html">Documentation API</a></li>
  <li><a href="https://mquandalle.gitbooks.io/apprendre-meteor/content/013-templates.html">Apprendre Meteor</a></li>
  <li><a href="http://fr.discovermeteor.com/chapters/templates/">Découvrir Meteor</a></li>
  <li><a href="https://www.youtube.com/watch?v=nF5CRSEC8PA">Vidéo</a> de LevelUpTuts qui propose un walk-through de l'application de base Meteor (celle qui est présente par défaut lors de la création de la création d'un nouveau projet Meteor) et quelques étapes de plus comme la création et l'affichage d'une liste définie en JavaScript (comme dans l'<a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.html"> exemple 2 </a>)</li>
</ul>
<h3> Résumé </h3>
<p>Un template:<p>
<ul>
  <li> Permet de créer une "partie" de la page </li>
  <li> Est créé avec une balise &lt;template&gt; qui prend un attribut "name" </li>
  <li> Est référencé avec {{> monTemplate}} en HTML et avec Template.monTemplate en JavaScript </li>
  <li> Peut avoir des opérateurs logiques en HTML comme {{#each}} et {{#if}} </li>
  <li> Peut être référencé avvec Template.body en JS, <a href="https://www.meteor.com/tutorials/blaze/templates#addinglogicanddatatotemplates"> body étant considéré comme un parent des autres templates </a> </li>
</ul>
  
<h2> Bases de données: mongoDB </h2>
<h3> MongoBD </h3>
<p> MongoDB est le système de gestion de base de données par défaut de Meteor. Si vous avez déjà des connaissances en SQL, cela ne devrait pas vous sembler trop compliqué: en effet, le fonctionnement de base est le même. On crée des collections (ou tables en SQL) qui contiennent des attributs. On peut lier les collections entre elles grâce à la mise en place d'id uniques à chaque instance d'une collection (dans SQL, se rappeller des schémas antités-associations, et donc les primary et foreign keys). <p>
<p> La mise en place d'une collection se fait à l'aide d'un fichier JavaScript que l'on crée dans le dossier imports/api: il devrait contenir le code suivant:<p>
<p>
  import { Mongo } from 'meteor/mongo';
  <br/><br/>
  export const Macollec = new Mongo.Collection('maCollec');
</p>
<p> "Macollec" devrait toujours prendre une majuscule et sera utilisé pour référencer la collection dans le JavaScript lors de méthodes telles que Macollec.insert({...}) ou Macollec.find({...}). "maCollec" sera utilisé surtout dans l'invite de commande et pour certaines reéférences moins importantes. </p>
<p> <a href="https://www.meteor.com/tutorials/blaze/collections">Une fois les liens entre fichiers fait correctement</a>, la base de données est liée à la page ou au template et le contenu de la page sera mis à jour automatiquement lorsque du contenu sera ajouté, modifié ou supprimé de la base de collection.</p>
<h3> Pour plus d'informations: </h3>
<ul>
  <li> <a href="https://www.meteor.com/tutorials/blaze/collections"> Tutoriel Meteor </a> </li>
  <li> <a href="https://guide.meteor.com/collections.html"> Documentation API </a> </li>
</ul>
