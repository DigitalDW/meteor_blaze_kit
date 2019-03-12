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
        let liste = Listes.findOne({ createur: Meteor.userId() })
        if(!liste){
            if(Meteor.userId() == null){
                liste = {_id: "baseid"}
            }else{
                liste = {_id: "null"}
            }
        }
        return Objets.find({ fkListe: liste._id })
    },
    // N'afficher des elements HTML que selon la condition suivante 
    estVisible: function(){
        let liste = Listes.findOne({ createur: Meteor.userId() })
        if(Meteor.userId() == null || liste){
            return true
        }else{
            return false
        }
    }
})

// Gerer le clic sur le bouton d'ajout
Template.liste.events({
    'click #ajouter': function(event){
        event.preventDefault();
        let nouvelObjet = prompt("Entrez un nouvel objet !")
        // Condition : trouver une liste a laquelle ajouter l'objet
        let liste = Listes.findOne({ createur: Meteor.userId() })
        // S'il n'y a aucune liste correspondante a l'id de l'utilisateur
        // Passer un id basique
        if(!liste){
            liste = {_id: "baseid"}
        }
        // Appel de methode d'ajout d'objet
        Meteor.call('ajoutObjet', nouvelObjet, liste._id)
    }
})