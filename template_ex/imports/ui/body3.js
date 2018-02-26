import { Template } from 'meteor/templating';
import { Elem } from '../api/liste_elem.js';

import './body.html';
import './template/titre.html';
import './template/zoneListe.html';
import './template/liste.html';

Template.body.helpers({
	ex1: function(){
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

Template.titre.helpers({
	text: function(){
		monTexte = "Les Bases de Données"
		return monTexte
	},
});

Template.zoneListe.helpers({
	elem() {
    return Elem.find({});
  },
});
