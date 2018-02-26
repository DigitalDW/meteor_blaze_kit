import { Template } from 'meteor/templating';
import { Elem } from '../api/liste_elem.js';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';
import './template/titre.html';
import './template/zoneListe.html';
import './template/liste.html';
import './template/ajout.html';
import './template/demande.html';

Template.body.onCreated(function(){
	Meteor.call('elem.setSelected');
});

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

Template.liste.onCreated(function(){
	this.selected = new ReactiveVar( false );
})

Template.liste.helpers({
	selected: function(){
		return Template.instance().selected.get();
	}
});

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

Template.demande.events({
	'click #edit': function(event, template){
		event.preventDefault();
		const txt = Session.get("idElem")
		let newname = window.prompt("Entrez un nouvean nom",txt);
		if(newname != null){
			Meteor.call("elem.editName", this._id, newname);
		}else{
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