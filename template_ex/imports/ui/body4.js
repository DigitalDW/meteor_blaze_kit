//importation des méthodes
import { Template } from 'meteor/templating';
//importation de la BD
import { Elem } from '../api/liste_elem.js';

//importation des fichiers
import './body.html';
import './template/titre.html';
import './template/zoneListe.html';
import './template/liste.html';
import './template/ajout.html';

//on set les conditions de body.html
Template.body.helpers({
	ex1: function(){
		return false
	},
	condition: function(){
		return false
	},
	condition0: function(){
		return false
	},
	condition1: function(){
		return true
	},
	condition2: function(){
		return true
	}
});

//helpers de "titre"
Template.titre.helpers({
	text: function(){
		monTexte = "Les Bases de Données"
		return monTexte
	},
});

//helpers de la zone des listes
Template.zoneListe.helpers({
	//elem devient une fonction qui retourne tous les éléments de la collection "Elem"
	elem() {
    return Elem.find({});
  },
});

//events de ajout.html
Template.ajout.events({
	'submit .new-elem': function(event){
		//empêche le comportement par défaut
		event.preventDefault();
		//création de constantes
		const target = event.target;
		const text = target.texteElem.value;
		//ajout d'un élément à la BD en fonction du texte entré par l'utilisateur
		Elem.insert({
			elementListe: text,
			createdAt: new Date(),
		});
		//reset l'input
		target.texteElem.value = "";
	}
});
