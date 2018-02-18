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
<h1> Utilisation </h1>
<p> "C'est bien joli tout ça mais je fais quoi?" Eh bien il faut télécharger le projet et, après avoir installé Meteor, il suffit de lancer le serveur (s'assurer d'être dans le dossier du projet et taper "meteor" dans l'invite de commande)! Très simple!</p>
<p> "Mais l'exemple qui est décrit n'est pas le même, comment faire?" Pour s'assurer de voir le bon résultat sur votre machine, une indication sur le fichier "body#.js" sera donnée au début de chaque explication. Ainsi, il vous suffit d'ouvrir le fichier ../client/main.js et de remplacer la valeur "#" de '../imports/ui/<b>body#.js</b>' par la valeur correspondante et le tour est joué!</p>
<p> "J'ai dautres questions qui ne sont pas détaillées ici!" Contactez moi par mail: loris.rimaz@unil.ch ou demandez moi en classe. </p>
<br/>
<h2> Les templates </h2>
<h3> Qu'est-ce qu'un template? </h3>
<p><i><a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body1.js">body1.js</a></i><p>
<p> Un template est une façon de créer des éléments en HTML, des les ajouter dans le corps de l'application et surtout de les modifier via le JavaScript. En d'autres termes: un template pemert de créer des blocs de code réactifs! </p>
<p> Pour créer un template, rien de plus simple: il suffit d'une balise template écrite comme suit: <b> &lt;template name="monTemplate"&gt;</b> <i>mon code HTML</i> <b> &lt;/template&gt; </b>. Notez qu'il n'y a qu'un attribut "name", celui-ce permet de référencer le template. Par exemple, pour l'ajouter à ma page HTML, je vais écrire {{> monTemplate}} à l'endroit que je souhaite. Ceci aura pour effet d'afficher le contenu du template sur la page. </p>
<p><a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/bonjour1.html">Cet exemple</a> montre un template nommé "bonjour1" qui affiche "Bonjour, je suis un template". </p>
<p> Si on jette un oeil au <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body.html">body.html</a> on peut voir que, déjà, c'est très compliqué (mais ne paniquez pas!), mais surtout que le texte "Bonjour, je ne suis pas un template" est du pur HTML, là où le texte "Bonjour, je suis un template" n'est référencé qu'avec {{> bonjour1}} (dans une <a href="#-la-logique-"> condition </a>, certes, mais nous développerons ces notions plus tard). Le second texte n'apparaît donc que parce qu'il est intégré au HTML! </p>
<p> Assez simple, non? </p>
<h3> Templating avec JavaScript </h3>
<p><i><a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.js">body2.js</a></i></p>
<p> Comme mentionné ci-dessus, l'avantage des templates est la possibilité de modifier leur contenu via un script JavaScript. Toujours dans la même idée que le précédent, <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/bonjour.html"> cet exemple </a> montre que le template "bonjour" n'est plus définit uniquement en HTML: à la place du contenu de la balise p on trouve {{texte}}. Si on regarde le <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.js">body2.js</a>, on remarque, à partir de la ligne 19, une nouvelle formulation: <b>Template.bonjour.helpers({ </b><i> code </i><b> }); </b>. Le mot clé ici est "helpers": un helper est une fonction qui permet de créer/remplir du contenu dans un tamplate. Ainsi, le helper ici présent prend "texte" comme argument et, grâce à une fonction qui retourne la variable "monTexte", prend la valeur de "Bonjour, je suis un template remplit en JavaScript!". Si on venait à modifier le contenur de monTexte, la valeur de "texte" serait modifiée à son tour et la page changera son contenu aussitôt. Plutôt cool!</p>
<p>De même pour cette formulation étrange dans le fichier <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/zoneListe.html"> zoneListe.html, à la ligne 14 </a>: </p>
&lt;ul&gt; <br/>
&nbsp;&nbsp;{{#each elem}} <br/>
&nbsp;&nbsp;&nbsp;&nbsp;{{>liste}} <br/>
&nbsp;&nbsp;{{/each}} <br/>
&lt;/ul&gt; <br/><br/>
<h4> La logique </h4>
<p> Ces 5 lignes de codes introduisent la notion de logique dans le templating: {{#each}} sert de boucle. En effet, la formulation en langage courant de ce bout de code serait:"Pour chaque élément de "elem", ajouter un template {{> liste}}" (funfact: cette formulation est très proche de la formulation des boucles en Python!). Donc le programme va afficher trois {{> liste}} puisque seulement trois éléments sont définit dans le <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.js"> JavaScript (lignes 31-40) </a>. On peut ajouter un élément à la liste dans le JavaScript et la page se mettera à jour pour accueillir le nouvel élément. Mais cela requiert toujours de passer pare le code! Nous verrons comment ajouter un élément sans passer par le code plus tard. Il m'est encore nécessaire d'introduire le {{#if}} que l'on a déjà pu appercevoir dans le <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body.html">body.html</a>: les if fonctionnent comme des conditions normales en JavaScript. En effet, la notation {{#if condition0}} signifie: "si la condition0 est vrai, alors..." Et cela est vrai pour toutes les conditions dans le fichier. J'utilise ces conditions pour masquer certains templates que je n'utilise pas à ce moment là. Les conditions peuvent être plus compliquées que je juste que les "if true" que j'utilise, mais vous le décrouvrirez par vous-mêmes plus tard! </p>
<p> Pour plus d'informations: <p>
<ul>
  <li><a href="https://www.meteor.com/tutorials/blaze/templates">Tutoriel Meteor</a></li>
  <li><a href="https://docs.meteor.com/v1.3.5/api/templates.html">Documentation API</a></li>
  <li><a href="http://blazejs.org/api/spacebars.html">Documentation Blaze</a></li>
  <li><a href="https://mquandalle.gitbooks.io/apprendre-meteor/content/013-templates.html">Apprendre Meteor</a></li>
  <li><a href="http://fr.discovermeteor.com/chapters/templates/">Découvrir Meteor</a></li>
  <li><a href="https://www.youtube.com/watch?v=nF5CRSEC8PA">Vidéo</a> de LevelUpTuts qui propose un walk-through de l'application de base Meteor (celle qui est présente par défaut lors de la création de la création d'un nouveau projet Meteor) et quelques étapes de plus comme la création et l'affichage d'une liste définie en JavaScript (comme dans <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.js"> cet exemple </a>)</li>
</ul>
<h3> Résumé </h3>
<p>Un template:<p>
<ul>
  <li> Permet de créer une "partie" de la page, un bloc de code en somme </li>
  <li> Est créé avec une balise &lt;template&gt; qui prend un attribut "name" </li>
  <li> Est référencé avec {{> monTemplate}} en HTML et avec Template.monTemplate en JavaScript </li>
  <li> Peut être entouré ou contenir des opérateurs logiques en HTML comme {{#each}} et {{#if}} </li>
  <li> Peut être référencé avec Template.body en JS, <a href="https://www.meteor.com/tutorials/blaze/templates#addinglogicanddatatotemplates"> body étant considéré comme un parent des autres templates </a> </li>
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
