import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import { Objets } from "../../api/objetsListeDB.js";
import { Listes } from "../../api/listesDB.js";

import '../templates/liste.html';
import './objetsListeScript.js'

Template.liste.onCreated(function(){
    Meteor.subscribe("objets");
})

Template.liste.helpers({
    objets: function(){
        let liste = Listes.findOne({ createur: Meteor.userId() })
        if(!liste){
            liste = {_id: "baseid"}
        }
        return Objets.find({ fkListe: liste._id })
    }
})

Template.liste.events({
    'click #ajouter': function(event){
        event.preventDefault();
        let nouvelObjet = prompt("Entrez un nouvel objet !")
        let liste = Listes.findOne({ createur: Meteor.userId() })
        if(!liste){
            liste = {_id: "baseid"}
        }
        Meteor.call('ajoutObjet', nouvelObjet, liste._id)
    }
})