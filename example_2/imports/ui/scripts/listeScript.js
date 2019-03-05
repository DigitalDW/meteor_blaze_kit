import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import { Objets } from "../../api/objetsListeDB.js"

import '../templates/liste.html';
import '../templates/objetsListe.html';

Template.liste.onCreated(function(){
    Meteor.subscribe("objets")
})

Template.liste.helpers({
    objets: function(){
        return Objets.find({})
    }
})

Template.liste.events({
    'click #ajouter': function(){
        let nouvelObjet = prompt("Entrez un nouvel objet !")
        Meteor.call('ajoutObjet', nouvelObjet)
    }
})