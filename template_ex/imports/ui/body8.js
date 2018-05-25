//Import des méthodes
import { Template } from 'meteor/templating';
import { Elem } from '../api/liste_elem.js';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

//import du body et des templates
import './body.html';
import './template/titre.html';
import './template/zoneListe.html';
import './template/liste.html';
import './template/ajout.html';
import './template/demande.html';

//Appel des méthodes lors de la création de la page (body)
Template.body.onCreated(function(){
	Meteor.call('elem.setSelected');
	Meteor.subscribe('elems');
});

//Helpers du body: conditions
Template.body.helpers({
	ex1: function(){
		return false
	},
	condition: function(){
		return true
	},
	condition0: function(){
		return false
	},
	condition1: function(){
		return true
	},
	condition2: function(){
		return true
	},
	body7: function(){
		return true
	}
});

//Helpers du titre -> affiche le titre
Template.titre.helpers({
	text: function(){
		monTexte = "Les Bases de Données"
		return monTexte
	},
});

//Helpers de la zone d'affichage des listes -> récupérer les éléments de la BD
Template.zoneListe.helpers({
	elem() {
		return Elem.find({});
  	},
});

//Création d'une variable réactive à la création du template "liste"
Template.liste.onCreated(function(){
	this.selected = new ReactiveVar( false );
});

//Helpers de liste -> vérifier si elle est sélectionnée et condition d'affichage
Template.liste.helpers({
	selected: function(){
		return Template.instance().selected.get();
	},
	body7: function(){
		return true
	}
});

//Events de liste -> si on clique sur un élément, changé son statut "selected"
Template.liste.events({
	'click .liste-li': function(event, template){
		event.preventDefault();
		Session.set("idElem", this.elementListe);
		if( template.selected.get() == false){
			template.selected.set(true);
		}else{
			template.selected.set(false);
		}
	}
});

//Helpers de demande -> conditions
Template.demande.helpers({
  	body8: function(){
  		return true
  	},
  	aCree() {
    	return this.createur === Meteor.userId();
  },
});

//Events de demande -> clics:
//1) sur #Edit: demander un nouveau nom à l'utilisateur et appeler la méthode "elem.editName"
//2) sur #delete: appeler la méthode "elem.remove"
//3) sur #toggle-private": appeler la méthode "elem.setToPrivate"
Template.demande.events({
	'click #edit': function(event, template){
		event.preventDefault();
		let newname = window.prompt("Entrez un nouvean nom",this.elementListe);
		if(newname != null){
			Meteor.call("elem.editName", this._id, newname);
		}else{
			return;
		}
	},
	'click #delete': function(event){
		event.preventDefault();
		Meteor.call('elem.remove', this._id);
	},
	'click #toggle-private': function(event){
		event.preventDefault();
		Meteor.call('elem.setToPrivate', this._id, !this.private);
	}
});

//Events de ajout -> lorsque l'utilisateur submit le formulaire, appeler "elem.add"
Template.ajout.events({
	'submit .new-elem': function(event){
		event.preventDefault();
		const target = event.target;
		const text = target.texteElem.value;
		Meteor.call('elem.add', text, function(error, result){
  			Session.set("idElem",result)
  		})
		setTimeout(function(){
			console.log(Session.get("idElem"))
		},500)
		target.texteElem.value = "";
	}
});