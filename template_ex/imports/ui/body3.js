import { Template } from 'meteor/templating';
import { Elem } from '../api/liste_elem.js';

import './body.html';
import './titre.html';
import './zoneListe.html';
import './liste.html';

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