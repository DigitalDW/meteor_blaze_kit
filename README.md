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
  <li> Chaque exercice/exemple est détaillé ici </li>
  <li> Des liens directs vers les bons fichiers seront mis à disposition avec chaque exercice/exemple </li>
  <li> Pour tester le différents codes, il suffit de télécharger le projet et de changer le chiffre de body#.js à la ligne suivante (selon le code que l'on souhaite exécuter): import '../imports/ui/<b>body.js</b>'; dans main.js. (par défaut et pour le premier exemple, il faut entrer "body.js")</li>
<ul>
<h3> Liste des sujets </h3>
<ul>
  <li> <a href="#-les-templates-">Les templates</a></li>
</ul>
<br/>
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
