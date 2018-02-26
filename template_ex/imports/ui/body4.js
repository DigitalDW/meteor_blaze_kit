import { Template } from 'meteor/templating';
import { Elem } from '../api/liste_elem.js';

import './body.html';
import './template/titre.html';
import './template/zoneListe.html';
import './template/liste.html';
import './template/ajout.html';

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
