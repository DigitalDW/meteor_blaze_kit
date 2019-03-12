import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
// Importer la base de donnees
import { Objets } from "../../api/objetsListeDB.js"

// Importer les templates associes
import '../templates/liste.html';
import '../templates/objetsListe.html';

// Donner un acces au donnees pour le template "liste"
Template.liste.onCreated(function(){
    Meteor.subscribe("objets")
})

// Retourner tous les objets de la base pour les afficher
Template.liste.helpers({
    objets: function(){
        return Objets.find({})
    }
})

// Gerer le clic sur le bouton d'ajout
Template.liste.events({
    'click #ajouter': function(){
        let nouvelObjet = prompt("Entrez un nouvel objet !")
        // Appel de methode
        Meteor.call('ajoutObjet', nouvelObjet)
    }
})