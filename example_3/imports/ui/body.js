import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Listes } from '../api/listesDB';

// Importer les scripts
import './body.html';
import './scripts/hwScript.js';
import './scripts/listeScript.js';
import './scripts/titreScript.js';

// Donner un acces aux donnees de la base Listes au body
Template.body.onCreated(function(){
    Meteor.subscribe("listes")
})

// Regarder si une liste existe
Template.body.helpers({
    'existe': function(){
        let liste = Listes.findOne({ createur: Meteor.userId() });
        if(liste){
            return true
        }else{
            return false
        }
    }
})

// Events du body
Template.body.events({
    // Gerer le clic sur le bouton pour creer une liste
    'click #creerListe': function(){
        let nom = prompt("Entrez un nom pour votre liste !");
        Meteor.call("creationListe", nom, Meteor.userId());
    },
    // Gerer le clic sur le bouton pour supprimer une liste
    'click #supprimerListe': function(){
        let verification = confirm("Etes-vous sûr ?");
        let liste = Listes.findOne({ createur: Meteor.userId() });
        // Appel de deux methodes si l'utilisateur confirme
        if(verification){
            Meteor.call('supprimerObjetsListe', liste._id);
            Meteor.call('suppressionListe', liste._id);
        }
    }
})