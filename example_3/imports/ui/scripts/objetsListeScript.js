import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import { ReactiveVar } from "meteor/reactive-var";

import '../templates/objetsListe.html';

Template.objetsListe.onCreated(function(){
    this.estSelectionne = new ReactiveVar( false );
})

Template.objetsListe.helpers({
    estSelectionne: () => Template.instance().estSelectionne.get()
})

Template.objetsListe.events({
    'click': function(event, template){
        event.preventDefault();
        if(template.estSelectionne.get()){
            template.estSelectionne.set(false);
        }else{
            template.estSelectionne.set(true);
        }
    },
    'click #supprimer': function(event){
        event.preventDefault();
        let verification = confirm("Etes-vous sûr ?");
        if(verification){
            Meteor.call('supprimerObjet', this._id);
        }
    }
})