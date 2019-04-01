import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";

// Importer les bases de donnees
import { Objets } from "../../api/objetsListeDB.js";
import { Listes } from "../../api/listesDB.js";

// Importer les templates associes
import '../templates/listeMain.html';
import './objetsListeScript.js'

// Donner un acces aux donnees de la base Objet pour le template "liste"
Template.listeFinale.onCreated(function(){
    Meteor.subscribe("objets");
})

// Helpers du template "liste"
Template.listeFinale.helpers({
    // Retourner tous les objets de la base pour les afficher
    objets: function(){
        let liste = Listes.findOne({ createur: FlowRouter.getParam("id") })
        return Objets.find({ fkListe: liste._id })
    }
})

// Gerer le clic sur le bouton d'ajout
Template.listeFinale.events({
    'click #ajouter': function(event){
        event.preventDefault();
        let nouvelObjet = prompt("Entrez un nouvel objet !")
        // Condition : trouver une liste a laquelle ajouter l'objet
        let liste = Listes.findOne({ createur: FlowRouter.getParam("id") });
        // Appel de methode d'ajout d'objet
        Meteor.call('ajoutObjet', nouvelObjet, liste._id)
    }
})