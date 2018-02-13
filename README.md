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
&lt;ul&gt;
  {{#each elem}}
    {{>liste}}
  {{/each}}
&lt;/ul&gt;
