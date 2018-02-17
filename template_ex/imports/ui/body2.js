import { Template } from 'meteor/templating';
 
import './body2.html';

//la fonction "helpers" va être souvent solicitée pour les fonctionnalités de nos templates
//du coup, on référence nos templates par leur nom
Template.bonjour.helpers({
	//on précise quel élément on crée / modifie
	texte: function(){
		//ici on met le texte
		monTexte = "Bonjour, je suis un template"
		//on le retourne et voilà!
		return monTexte
	},
})

//le template "body" est en fait la balise <body>, elle est utilisée ici comme un parent des autres templates (ici, elem)
Template.body.helpers({
	//bien référencer les bons éléments
	elem: [
		//utiliser le même nom que dans le HTML: on veut récupérer la valeur "elementListe"
		{ elementListe: 'element 1' },
		{ elementListe: 'element 2' },
		{ elementListe: 'element 3' },
	],
});