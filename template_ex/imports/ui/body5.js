import { Template } from 'meteor/templating';
import { Elem } from '../api/liste_elem.js';
import { Session } from 'meteor/session'

import './body.html';
import './titre.html';
import './zoneListe.html';
import './liste.html';
import './ajout.html';
import './demande.html';

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

Template.liste.events({
	'click .liste-li': function(event){
		event.preventDefault();
		Meteor.call("elem.editSelect", this._id, !this.selected);
	}
});

Template.demande.events({
	'click #edit': function(event){
		event.preventDefault();
		let newname = prompt("Entrez un nouvean nom");
		Meteor.call("elem.editName", this._id, newname);
	},
	'click #delete': function(event){
		event.preventDefault();
		Meteor.call('elem.remove', this._id);
	}
})

Template.ajout.events({
	'submit .new-elem': function(event){
		event.preventDefault();
		const target = event.target;
		const text = target.texteElem.value;
		Elem.insert({
			elementListe: text,
			selected: false,
			createdAt: new Date(),
		});
		target.texteElem.value = "";
	}
});