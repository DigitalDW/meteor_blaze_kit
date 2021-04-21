import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";

// Importer les bases de donnees
import { Objets } from "../../api/objetsListeDB.js";
import { Listes } from "../../api/listesDB.js";

// Importer les templates associes
import '../templates/liste.html';
import './objetsListeScript.js'

// Donner un acces aux donnees de la base Objet pour le template "liste"
Template.liste.onCreated(function(){
    Meteor.subscribe("objets");
})

// Helpers du template "liste"
Template.liste.helpers({
    // Retourner tous les objets de la base pour les afficher
    objets: function(){
        return Objets.find({ fkListe: "baseid"})
    }
})

// Gerer le clic sur le bouton d'ajout
Template.liste.events({
    'click #ajouter': function(event){
        event.preventDefault();
        let nouvelObjet = prompt("Entrez un nouvel objet !");
        // Appel de methode d'ajout d'objet
        Meteor.call('ajoutObjet', nouvelObjet, "baseid")
    }
})