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

//helpers de la zone des liste
Template.zoneListe.helpers({
	//elem devient une fonction qui retourne tous les éléments de la collection "Elem"
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
		if(newname != null){
			Meteor.call("elem.editName", this._id, newname);
			Meteor.call("elem.editSelect", this._id, !this.selected);
		}else{
			Meteor.call("elem.editSelect", this._id, !this.selected);
			return;
		}
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