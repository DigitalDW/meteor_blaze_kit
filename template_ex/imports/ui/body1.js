//importation des méthodes
import { Template } from 'meteor/templating';

//importation des fichiers
import './body.html';
import './template/titre.html';
import './template/bonjour1.html';

//On set les valeurs pour les multiples conditions dans body.html
Template.body.helpers({
	ex1: function(){
		return true
	},
	condition: function(){
		return false
	},
	condition0: function(){
		return true
	},
	condition1: function(){
		return false
	},
	condition2: function(){
		return false
	}
});

//helpers de "titre"
Template.titre.helpers({
	//on set la valeur "text" pour <h1>{{text}}</h1>
	text: function(){
		//on définit et retourne monTexte comme valeur pour "text"
		monTexte = "Les Templates"
		return monTexte
	},
});