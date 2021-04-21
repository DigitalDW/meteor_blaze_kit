import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import { ReactiveVar } from "meteor/reactive-var";

// Importer les templates associes
import '../templates/objetsListe.html';

// Creer une variable reactive
Template.objetsListe.onCreated(function(){
    this.estSelectionne = new ReactiveVar( false );
})

// Retourner la valeur de la valeur reactive
Template.objetsListe.helpers({
    estSelectionne: () => Template.instance().estSelectionne.get()
})

// Events du template "objetsListe"
Template.objetsListe.events({
    // Gerer le clic sur un des objets
    'click': function(event, template){
        event.preventDefault();
        // Switcher la valeur de la variable reactive
        if(template.estSelectionne.get()){
            template.estSelectionne.set(false);
        }else{
            template.estSelectionne.set(true);
        }
    },
    // Gerer le clic sur le bouton: supprimer l'objet
    'click #supprimer': function(event){
        event.preventDefault();
        let verification = confirm("Etes-vous sûr ?");
        if(verification){
            Meteor.call('supprimerObjet', this._id);
        }
    }
})