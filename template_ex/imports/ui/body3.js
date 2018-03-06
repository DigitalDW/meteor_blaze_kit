//importation des méthodes
import { Template } from 'meteor/templating';
//importation de la BD
import { Elem } from '../api/liste_elem.js';

//importation des fichiers
import './body.html';
import './template/titre.html';
import './template/zoneListe.html';
import './template/liste.html';

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
	condition_true: function(){
		return false
	}
});

//helpers de "titre"
Template.titre.helpers({
	text: function(){
		monTexte = "Les Bases de Données"
		return monTexte
	},
});

//helpers de la zone des liste
Template.zoneListe.helpers({
	//elem devient une fonction qui retourne tous les éléments de la collection "Elem"
	elem() {
    return Elem.find({});
  },
});
