//importation des méthodes générales
import { Template } from 'meteor/templating';
 
//importation des fichiers
import './body.html';
import './template/titre.html';
import './template/bonjour.html';
import './template/zoneListe.html';
import './template/liste.html';

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

//on set les valeurs des conditions de body.html
Template.body.helpers({
	ex1: function(){
		return false
	},
	condition: function(){
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

//helpers de "titre"
Template.titre.helpers({
	//on précise quel élément on crée / modifie
	text: function(){
		//ici on met le texte
		monTexte = "Les Templates"
		//on le retourne et voilà!
		return monTexte
	},
});

//helpers de la zoneListe: zone où les listes sont affichées
Template.zoneListe.helpers({
	//bien référencer le bon template
	elem: [
		//utiliser le même nom que dans le HTML: on veut récupérer la valeur "elementListe"
		{ elementListe: 'element 1' },
		{ elementListe: 'element 2' },
		{ elementListe: 'element 3' },
	],
});