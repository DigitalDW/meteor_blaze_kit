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
  <li> <a href="#-la-structure-des-dossiers-">La structure des dossiers </a></li>
  <li> <a href="#-les-templates-">Les templates</a></li>
  <li> <a href="#-bases-de-donn%C3%A9es-mongodb-">Bases de données (mongoDB)</a></li>
  </ul>
<h1> Utilisation </h1>
<p> "C'est bien joli tout ça mais je fais quoi?" Eh bien il faut télécharger le projet et, après avoir installé Meteor, il suffit de lancer le serveur (s'assurer d'être dans le dossier du projet et taper "meteor" dans l'invite de commande)! Très simple!</p>
<p> "Mais l'exemple qui est décrit n'est pas le même, comment faire?" Pour s'assurer de voir le bon résultat sur votre machine, une indication sur le fichier "body#.js" sera donnée au début de chaque explication. Ainsi, il vous suffit d'ouvrir le fichier ../client/main.js et de remplacer la valeur "#" de '../imports/ui/<b>body#.js</b>' par la valeur correspondante et le tour est joué!</p>
<p> "J'ai dautres questions qui ne sont pas détaillées ici!" Contactez moi par mail: loris.rimaz@unil.ch ou demandez moi en classe. </p>
<br/>
<h2> La structure des dossiers </h2>
<p> Petit chapitre qui reste néanmoins <b> très </b> important pour le début du projet: la structure des dossier et les liens entre fichiers. </p>
<p> Pour la permière partie, c'est assez simple: lors de la création d'un nouveau projet, une structure de dossier est crée directement. Mais cette structure, bien que fonctionnelle, n'est pas la plus optimale. Je tiens à préciser que la suite est subjective et peut être adaptée en fonction des groupes, sur ce, continuons: <br/>
La structure par défaut est la suivante: </p>
<ul>
  <li>projet_meteor
    <ul>
      <li>.meteor</li>
      <li>client
        <ul>
          <li>mais.css</li>
          <li>mais.html</li>
          <li>mais.js</li>
        </ul>
      </li>
      <li>node_modules</li>
      <li>server</li>
      <li><i>d'autres fichiers</i></li>
    </ul>
  </li>
</ul>
<br/>
<p>La structure en soit fonctionne, mais Meteor propose une autre structure pour gérer les fichiers qui, à mon sens, est plus logique dans le développement d'un plus grosse application:</p>
<ul>
  <li>projet_meteor
    <ul>
      <li>.meteor</li>
      <li>client
        <ul>
          <li>mais.css</li>
          <li>mais.html</li>
          <li>mais.js</li>
        </ul>
      </li>
      <li>imports
        <ul>
          <li>api
            <ul>
              <li><i>fichers de bases de données</i><(li>
            </ul>
          </li>
          <li>ui
            <ul>
              <li>body.html</li>
              <li>body.js</li>
              <li><i>autres fichiers tels que les fichers de chaque templates, etc</i></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>node_modules</li>
      <li>server</li>
      <li><i>d'autres fichiers</i></li>
    </li>
    <li>node_modules</li>
    <li>server</li>
    <li><i>d'autres fichiers</i></li>
  </ul>
</ul>
<br/>
<p>L'avantage de cette méthode est une navigation plus claire des fichiers: en effet, on peut aisément comprendre que les fichiers "imports" sont des fichiers en plus de la page HTML de base. Cela permet aussi de mieux différencier les fichers à noms récurents par exemple. </p>
<p> Pour plus d'infos pour la structure de dossiers, voir la <a href="https://guide.meteor.com/structure.html"> <b>documentation officielle</b> </a>. </p>
<h3> Liens entre fichiers </h3>
<p> Cette deuxième partie parle des liens entre les fichiers. En effet, répartir les fichers au travers de plusieurs dossiers requiert un minimum de rigueur pour la liaison entre les fichiers. Pour faire simple: ../client/main.html est la page principale et sera celle qui sera chargée au lancement de l'application. ../client/main.js est automatiquement lié à main.html et permet, à l'aide d'une ligne du genre: "import '../imports/ui/body.js';", d'importer des fichiers qui se trouvent dans le dossier ../imports/ui. Après il s'agit d'importer avec des lignes de code similaires les fichiers dans les fichiers JS qui seront dans le dossier ../imports/ui. Par exemple, avec la structure de dossier mentionnée ci-dessus, lier tous les fichiers ressemble à ça:</p>
<p>Dans ../client/main.js: "import '../imports/ui/body.js';"</p>
<p>Et dans ../imports/ui/body.js: "import './body.html';" pour lier le fichier body.html à body.js</p>
<p>Ce code aura comme résultat d'importer, par itération, le contenu de body.html dans main.html via body.js et main.js. </p>
<p>Une fois la logique assimilée, des exemples comme celui-ci <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body4.js"> ou d'autres disponibles dans ce kit </a> vous paraîterons faciles</p>
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
<pre>
&lt;ul&gt; <br/>
&nbsp;&nbsp;{{#each elem}} <br/>
&nbsp;&nbsp;&nbsp;&nbsp;{{>liste}} <br/>
&nbsp;&nbsp;{{/each}} <br/>
&lt;/ul&gt; <br/><br/>
</pre>
<h4> La logique </h4>
<p> Ces 5 lignes de codes introduisent la notion de logique dans le templating: {{#each}} sert de boucle. En effet, la formulation en langage courant de ce bout de code serait:"Pour chaque élément de "elem", ajouter un template {{> liste}}" (funfact: cette formulation est très proche de la formulation des boucles en Python!). Donc le programme va afficher trois {{> liste}} puisque seulement trois éléments sont définit dans le <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.js"> JavaScript (lignes 31-40) </a>. On peut ajouter un élément à la liste dans le JavaScript et la page se mettera à jour pour accueillir le nouvel élément. Mais cela requiert toujours de passer pare le code! Nous verrons comment ajouter un élément sans passer par le code plus tard. Il m'est encore nécessaire d'introduire le {{#if}} que l'on a déjà pu appercevoir dans le <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body.html">body.html</a>: les if fonctionnent comme des conditions normales en JavaScript. En effet, la notation {{#if condition0}} signifie: "si la condition0 est vrai, alors..." Et cela est vrai pour toutes les conditions dans le fichier. J'utilise ces conditions pour masquer certains templates que je n'utilise pas à ce moment là. Les conditions peuvent être plus compliquées que je juste que les "if true" que j'utilise, mais vous le décrouvrirez par vous-mêmes plus tard! </p>
<h4> Dans le JavaScript </h4>
<p> <b>C'est bien joli, on ajoute des templates et on crée des conditions pour afficher certains templates sous certaines conditions... Mais ensuite? A quoi ça nous avance?</b> Eh bien pour répondre à cette question, il faut parler de deux notions fondammentales pour le templating: les helpers (déjà expliqués plus haut) et les events.</p>
<p> Un event est un événement, ok, vous l'avez probablement compris par vous même, mais c'est plus que ça. Un event fonctionne grosso moddo comme un addEventListener. Je m'explique. Avec Meteor, pour déclarer un event, il faut utiliser la syntaxe suivante:</p>
<pre>
  Template.monTemplate.event({
    'click/submit/change/... .maClass (ou #monId)': function(event){
      //le code vient ici
    },
    //les autres events se déclarent ici
  })
</pre>
<p>L'avantage de cette formulation est que l'on peut regrouper plusieurs events pour le même template dans un seul bout de code. Les fonctions des events prennent souvent comme argument "event" (function(event)). Pourquoi? Eh bien parce que ce "event" réfère à l'événement qui vient de se produire. De ce fait, on peut le référencer plus loin pour modifier son comportement ou pour récupérer des données. Mais celà sera plus clair plus tard, en attendant, il faut comprendre qu'un template peut être modifié par un helper et/ou par un event!</p>
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
  <li> Peut être modifié en JavaScript avec des Helpers ou des Events</li>
</ul>
  
<h2> Bases de données: mongoDB </h2>
<h3> MongoBD </h3>
<p> MongoDB est le système de gestion de base de données par défaut de Meteor. Si vous avez déjà des connaissances en SQL, cela ne devrait pas vous sembler trop compliqué: en effet, le fonctionnement de base est le même. On crée des collections (ou tables en SQL) qui contiennent des attributs. On peut lier les collections entre elles grâce à la mise en place d'id uniques à chaque instance d'une collection (dans SQL, se rappeller des schémas antités-associations, et donc les primary et foreign keys) et en référant cet id dans d'autres instances d'autres collections.<p>
<p>Par exemple:</p>
<pre>
<p>Maison</p>
<ul>
  <li>id: 154840</li>
  <li>couleur: rose</li>
  <li>pièces: 7.5</li>
  <li>etc</li>
</ul>
</pre>
<br/>
<pre>
<p>Résident</p>
<ul>
  <li>id: 654987981</li>
  <li>id_maison: 154840</li>
  <li>revenu: 4500</li>
  <li>age: 38</li>
  <li>etc</li>
</ul>
</pre>
<br/>
<p>Les deux collections sont liées grâce à l'id de la maison qui est retrouvé dans les informations du résident. Pas trop compliqué, si? Bref, passons à Meteor:</p>
<p> La mise en place d'une collection se fait à l'aide d'un fichier JavaScript que l'on crée dans le dossier imports/api: il devrait contenir le code suivant:<p>
<pre>
<p>
  import { Mongo } from 'meteor/mongo';
  <br/><br/>
  export const Macollec = new Mongo.Collection('maCollec');
</p>
</pre>
<p> "Macollec" devrait toujours prendre une majuscule et sera utilisé pour référencer la collection dans le JavaScript lors de méthodes telles que Macollec.insert({...}) ou Macollec.find({...}). "maCollec" sera utilisé surtout dans l'invite de commande et pour certaines reéférences moins importantes. <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/api/liste_elem.js">Ce fichier</a> en est un exemple.</p>
<p> <a href="#-liens-entre-fichiers-">Une fois les liens entre fichiers fait correctement</a>, la base de données est liée à la page ou au template et le contenu de la page sera mis à jour automatiquement lorsque du contenu sera ajouté, modifié ou supprimé de la base de collection.</p>
<p>Dans cet exemple:<i><a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body3.js">body3.js</a></i>, on a une <i><a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/api/liste_elem.js">collection</a></i> qui affiche des éléments dans une liste. Les lignes importantes sont:</p>
<pre>
  Template.zoneListe.helpers({
	elem() {
    return Elem.find({});
  },
});
</pre>
<p>Avant, le helper de "elem" affichait une liste <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body2.js">écrite dans le code</a>. Maintenant, "elem" est devenu une fonction qui "trouve" ("find({})"), dans une collection, des éléments à afficher dans une liste. Le processus peut paraître flou pour le moment, mais ce qu'il faut comprendre c'est que la méthode .find({}) va chercher, écrite ainsi, tous les élément de la collection.</p>
<h3> Events et méthodes pour les bases de donées </h3>
<p><b>C'est sympa mais y a rien qui s'affiche!</b> Bah oui, il faut bien remplir la base de donées. Ce qu'il faut savoir, c'est que la BD avec mongoDB et meteor sera locale pour les phases de programmation et de test, de ce fait, lorsque vous avez téléchargé ce kit, la base de donées est vide. Il faut donc la remplir! On peut passer par le terminal ou l'invite de commande, amsi le plus simple serait de coder une fonction qui ajoute un élément à la collection. Faisons celà. <i><a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body4.js">body4.js</a></i></p>
<pre>
  Template.ajout.events({
	'submit .new-elem': function(event){
		event.preventDefault();
		const target = event.target;
		const text = target.texteElem.value;
		Elem.insert({
			elementListe: text,
			createdAt: new Date(),
		});
		target.texteElem.value = "";
	}
});
</pre>
<p>Dans le template <a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/template/ajout.html"> ajout.html</a>, on a un formulaire qui contient un input et un bouton. Le formulaire à la classe "new-elem". Il pourrait aussi avoir un id, mais ici, ce n'est pas forcément nécessaire de faire la différence. Dans le JavaScript, on utilise l'événement "submit" qui reconnaît l'appui du bouton ou lorsque l'utilisateur appuie sur la touche "Entrée". Lorsque le submit a lieu, on applique une fonction qui prend comme argument "event". Pour rappel, e mot clé "event" réfère à l'événement (le submit ici) qui vient de se produire. Ainsi, on lui dit d'empêcher le comportement par défaut de la page avec "event.preventdefault()" et on passe à la récupération des donées: la ligne "const target = event.target" c'est pas obligatoire mais il faudra alors garder en tête qu'à la place de "target" à la ligne suivante, il faudra entrer "event.target". Ce que ce "event.target" signifie est assez simple: c'est la cible de l'événement. Ainsi, lorsqu'on récupère la valeur de l'input avec "target.texteElem.value" (un peu comme un document.getElementById) on fait savoir à Meteor que la cible est cet input. Si on a plusieurs inputs, alors il suffit de créer plusieurs constantes avec la même syntaxe que cette ligne: "const maConst = (event.)target.monId.value.". Bien! Maintenant, on appelle la méthode "Macollec.insert({//<i>code goes here</i>})" (ici "Elem.insert"). La syntaxe est assez spécifique mais pas trop compliquée; elle suit la logique suivante: </p>
<ul>
	<li>attribut1: valeur1,</li>
	<li>attribut2: valeur2,</li>
	<li>attribut3: valeur3,</li>
	<li>...</li>
</ul>
<p>Lors de l'appel de cette méthode, Meteor va ajouter créer une instance de "Elem" dans la base de donées avec certains attributs. Facile non?</p>
<h3> Pour plus d'informations: </h3>
<ul>
  <li> <a href="https://www.meteor.com/tutorials/blaze/collections"> Tutoriel Meteor </a> </li>
  <li> <a href="https://guide.meteor.com/collections.html"> Documentation API </a> </li>
</ul>
<br/>
<h3> Crées des méthodes </h3>
<p> J'introduis cette notion assez tôt pour plusieurs raisons: déjà car avoir de bonnes habitudes en termes de sécurité est toujours un plus, mais surtout car utiliser des méthodes est, à mon sens, plus simple et plus utile. Un des gros avantages de cette façon de travailler est de ne pas avoir besoin de retapper des lignes et des lignes de code pour intéragire avec la base de données. En effet, il suffit d'appeller la méthode en lui passant les bons arguments et c'est fait! </p>
<p> <b> Mais c'est quoi une méthode? </b> Excellente question! Une méthode est une fonction. Voilà, rien de plus. Mais pourquoi l'appellation n'est pas juste "fonction"? Eh bien un méthode est toujours liée à un objet, ici une collection. et une collection (ou une table en SQL) n'est rien d'autre qu'un objet et une fonction liée à un objet est une méthode. Cela peut sembler flou pour le moment, mais ne vous en faites pas! </p>
<h4> Déclarer une méthode et l'appeller </h4>
<p> Déclarer un méthode est très simple: dans le fichier de la collection (<a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/api/liste_elem.js">..imports/api/liste_elem.js</a>) il suffit de taper:</p>
<pre>
Meteor.<span color="lightblue">methods</span>({
    <span color="lightgreen">'maMethode'</span>(<i><span color="orange">argument1</span></i>, <i><span color="orange">argument2</span></i>, ...){
        <span color="lightblue">check</span>(argument1, <i color="lightblue">type</i>);
        <span color="lightblue">check</span>(argument2, <i color="lightblue">type</i>);
        .
        .
        .
        Macollec.insert/remove/update/...({
            //code goes here
        });
    },
    <span color="lightgreen">'maMethode2'</span>(<i><span color="orange">argument1</span></i>, <i><span color="orange">argument2</span></i>, ...){
        <span color="lightblue">check</span>(argument1, <i color="lightblue">type</i>);
        <span color="lightblue">check</span>(argument2, <i color="lightblue">type</i>);
        .
        .
        .
        Macollec.insert/remove/update/...({
            //code goes here
        });
    }
})
</pre>
<p><b>Meteor.methods</b> signale que l'on crée une liste de méthodes. Les <b>check()</b> sont des fonctions qui vont vérifier que les arguments correspondent à un certain type (<i>String, Int, Float, Boolean, etc</i>). Le but de cette vérification est de s'assurer que l'utilisateur ne puisse pas entrer n'importe quoi et renforce donc la sécurité de l'application. La suite est très simple: <b>Macollec.insert()</b> permet d'ajouter un élément à la base de donées, <b>Macollec.remove()</b> permet de supprimer un éléement de la BD, <b>Macollec.update()</b> permet de modifier un élément de la BD, etc. Ces trois fonctions sont les plus répendues, donc pour les autres fonctions existantes, <a href="https://docs.mongodb.com/manual/reference/method/js-collection/">consultez la documentation</a></p>
<p><b>Ok c'est cool, on a nos méthodes; et maintenant?</b> Commençons par parler de leur utilisation. (<i><a href="https://github.com/DigitalDW/meteor_blaze_kit/blob/master/template_ex/imports/ui/body5.js">body5.js</a></i>).</p>
