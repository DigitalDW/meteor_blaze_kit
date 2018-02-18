import { Template } from 'meteor/templating';
import { Elem } from '../api/liste_elem.js';

import './body.html';
import './titre.html';
import './zoneListe.html';
import './liste.html';
import './ajout.html';

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

Template.ajout.events({
	'submit .new-elem': function(event){
		event.preventDefault();
		const target = event.target;
		const text = target.texteElem.value;
		Elem.insert({
			elementListe: text,
			createdAt: new Date(),
		});
		target.texteElem.value = "";
	}
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
	condition2: function(){
		return true
	}
});