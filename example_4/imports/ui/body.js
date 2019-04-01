import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Listes } from '../api/listesDB';

// Importer les scripts
import "../../lib/routing.js";
import './templates/mainTemplate.html';
import './templates/listeMainTemplate.html';
import './scripts/hwScript.js';
import './scripts/listeScript.js';
import './scripts/listeScriptMain.js';
import './scripts/titreScript.js';

// Donner un acces aux donnees de la base Listes au body
Template.main.onCreated(function(){
    Meteor.subscribe("listes")
})

// Regarder si une liste existe
Template.listeMain.helpers({
    'existe': function(){
        let liste = Listes.findOne({ createur: FlowRouter.getParam("id") });
        if(liste){
            return true
        }else{
            return false
        }
    }
})

// Events du body
Template.main.events({
    // Gere le clic sur le bouton pour utiliser le site
    'click #useSite': function(e){
        e.preventDefault();
        FlowRouter.go("liste", {id: Meteor.userId()})
    }
})


Template.listeMain.events({
    // Gerer le clic sur le bouton pour creer une liste
    'click #creerListe': function(e){
        e.preventDefault();
        let nom = prompt("Entrez un nom pour votre liste !");
        Meteor.call("creationListe", nom, Meteor.userId());
    },
    // Gerer le clic sur le bouton pour supprimer une liste
    'click #supprimerListe': function(e){
        e.preventDefault();
        let verification = confirm("Etes-vous sûr ?");
        let liste = Listes.findOne({ createur: Meteor.userId() });
        // Appel de deux methodes si l'utilisateur confirme
        if(verification){
            Meteor.call('supprimerObjetsListe', liste._id);
            Meteor.call('suppressionListe', liste._id);
        }
    },
    'click #retour': function(e){
        e.preventDefault();
        FlowRouter.go("home")
    }
})