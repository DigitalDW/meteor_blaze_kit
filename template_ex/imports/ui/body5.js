//importation des méthodes
import { Template } from 'meteor/templating';
//importation de la BD
import { Elem } from '../api/liste_elem.js';

//importation des fichiers
import './body.html';
import './template/titre.html';
import './template/zoneListe.html';
import './template/liste.html';
import './template/demande.html';
import './template/ajout.html';

//reset les statuts "selected"
Template.body.onCreated(function(){
	Meteor.call('elem.setSelected');
})

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
	condition2:function(){
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

//events du template de liste
Template.liste.events({
	//event lors du click sur .liste-li
	'click .liste-li': function(event){
		event.preventDefault();
		//appel de la méthode "elem.editSelect", on transmet l'id de l'élément
		//et on passe "l'inverse"(!) du statut "selected" de cet élément
		Meteor.call("elem.editSelect", this._id, !this.selected);
	}
});

//events du template demande
Template.demande.events({
	//event lors du click sur le bouton #edit
	'click #edit': function(event){
		event.preventDefault();
		//demande d'un nouveau nom à l'utilisateur
		let newname = prompt("Entrez un nouvean nom");
		//vérification: est-ce que l'utilisateur a entré un nom
		if(newname != null){
			//appel de "elem.editName": on transmet l'id de l'élément et le nouveau nom
			Meteor.call("elem.editName", this._id, newname);
			//on passe "l'inverse"(!) du statut "selected" de cet élément
			Meteor.call("elem.editSelect", this._id, !this.selected);
		}else{
			//si il n'y avait pas d'input de la part de l'utilisateur, on reset le "selected" 
			//et on termine la fonction
			Meteor.call("elem.editSelect", this._id, !this.selected);
			return;
		}
	},
	//event lors du click sur le bouton #delete
	'click #delete': function(event){
		event.preventDefault();
		//appel de la méthode "elem.remove" et on passe l'id de l'élément
		Meteor.call('elem.remove', this._id);
	}
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
			//on set selected sur "false"
			selected: false,
			createdAt: new Date(),
		});
		//reset l'input
		target.texteElem.value = "";
	}
});