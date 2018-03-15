//importation des méthodes:
import { Template } from 'meteor/templating';
//importation de la bd
import { Elem } from '../api/liste_elem.js';
//importation des sessions et des variables réactives
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';

//importation des templates
import './body.html';
import './template/titre.html';
import './template/zoneListe.html';
import './template/liste.html';
import './template/ajout.html';
import './template/demande.html';

//reset les statuts "selected"
Template.body.onCreated(function(){
	Meteor.call('elem.setSelected');
	//subscription à la base de données
	Meteor.subscribe("elems");
})

//on set les conditions de body.html
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

//helpers de "titre"
Template.titre.helpers({
	text: function(){
		monTexte = "Les Bases de Données"
		return monTexte
	},
});

//helpers de la zone des listes
Template.zoneListe.helpers({
	//elem devient une fonction qui retourne tous les éléments de la collection "Elem"
	elem() {
    return Elem.find({});
  },
});

//initialisation d'une variable réactive dans le template "liste"
Template.liste.onCreated(function(){
	this.selected = new ReactiveVar( false );
});

//helpers de liste: on retourne l'état "selected" du template pour chaque instance du template
Template.liste.helpers({
	selected: function(){
		return Template.instance().selected.get();
	}
});

//events de liste: on change la valeur de la variable réactive lorsque l'utilisateur clique sur un élément
Template.liste.events({
	'click .liste-li': function(event, template){
		//on empêche le comportement par défaut
		event.preventDefault();
		//on initialise une session pour le nom de l'élément sur lequel l'utilisateur a cliqué
		Session.set("nomElem", this.elementListe);
		//si la variable réactive est false, alors on la change en true (et inversement)
		if( template.selected.get() == false){
			template.selected.set(true);
		}else{
			template.selected.set(false);
		}
	}
});

//events de demande
Template.demande.events({
	//event lors du clic sur le bouton #edit
	'click #edit': function(event, template){
		event.preventDefault();
		//on récupère le nom de l'élément cliqué et demande un nouveau nom à l'utilisateur
		const txt = Session.get("nomElem")
		let newname = window.prompt("Entrez un nouvean nom",txt);
		//vérification: est-ce que l'utilisateur a entré un nom
		if(newname != null){
			//si oui, appel de "elem.editName": on transmet l'id de l'élément et le nouveau nom
			Meteor.call("elem.editName", this._id, newname);
		}else{
			//si non, stopper la fonction
			return;
		}
	},
	//event lors du clic sur le bouton #delete
	'click #delete': function(event){
		event.preventDefault();
		//appel de la méthode "elem.remove" et on passe l'id de l'élément
		Meteor.call('elem.remove', this._id);
	}
})

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
			//on set selected sur "false" (tout a fait optionnel maintenant, mais je le garde pour assurer le bon fonctionnement du kit)
			selected: false,
			createdAt: new Date(),
			//on ajoute le nom et l'id de l'utilisateur dans la BD
			createur: Meteor.userId(),
			nomUtilisateur: Meteor.user().username,
		});
		//reset l'input
		target.texteElem.value = "";
	}
});