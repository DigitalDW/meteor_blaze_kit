import { Template } from 'meteor/templating';
 
import './body.html';
import './titre.html';
import './bonjour.html';
import './zoneListe.html';
import './liste.html';

Template.titre.helpers({
	//on précise quel élément on crée / modifie
	text: function(){
		//ici on met le texte
		monTexte = "Les Templates"
		//on le retourne et voilà!
		return monTexte
	},
});

//la fonction "helpers" va être souvent solicitée pour les fonctionnalités de nos templates
//du coup, on référence nos templates par leur nom
Template.bonjour.helpers({
	//on précise quel élément on crée / modifie
	texte: function(){
		//ici on met le texte
		monTexte = "Bonjour, je suis un template remplit en JavaScript!"
		//on le retourne et voilà!
		return monTexte
	},
});

//le template "body" est en fait la balise <body>, elle est utilisée ici comme un parent des autres templates (ici, elem)
Template.zoneListe.helpers({
	//bien référencer les bons éléments
	elem: [
		//utiliser le même nom que dans le HTML: on veut récupérer la valeur "elementListe"
		{ elementListe: 'element 1' },
		{ elementListe: 'element 2' },
		{ elementListe: 'element 3' },
	],
});

Template.body.helpers({
	ex1: function(){
		return false
	},
	condition0: function(){
		return true
	},
	condition1: function(){
		return true
	},
	condition2: function(){
		return false
	}
});