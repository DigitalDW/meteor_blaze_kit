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
<ul>
<h3> Liste des sujets </h3>
<ul>
  <li> <a href="#templates">Les templates</a></li>
</ul>
<br/>
<br/>
<h2 id="template"> Les templates </h2>
<h3> Qu'est-ce qu'un template? </h3>
<p> Un template est une façon de créer des éléments en HTML, des les ajouter dans le corps de l'application et surtout de les modifier via le JavaScript. En HTML, un template se présente sous la forme d'une balise <template> qui prend un attribut "nom". Ce nom sera utilisé pour intégrer le template dans le HTML avec la notation suivante {{> monTemplate}}. C'est aussi avec ce nom que l'on référencera le template dans le JavaScript. </p>
<xmp>
  <head>
    <title>template_ex</title>
  </head>

  <body>
    <h1>Les templates</h1>
    <!-- Ce texte est une simple balise <p> -->
    <p> Bonjour, je ne suis pas un template </p>

    <!-- Ici, au lieu d'écrire une balise <p>, on place un template
    Pour intégrer un template, la syntaxe est la suivante: {{> monTemplate}} -->
    {{> bonjour}}
  </body>

  <!-- Pour créer un template, il suffit de créer une balise <template> qui prend un attribut "name" -->
  <template name="bonjour">
    <!-- Un template contient généralement du HTML -->
    <p> Bonjour, je suis un template </p>
  </template>
</xmp>
