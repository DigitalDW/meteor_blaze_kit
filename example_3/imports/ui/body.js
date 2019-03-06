import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Listes } from '../api/listesDB';

import './body.html';
import './scripts/hwScript.js';
import './scripts/listeScript.js';
import './scripts/titreScript.js';

Template.body.onCreated(function(){
    Meteor.subscribe("listes")
})

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

Template.body.events({
    'click #creerListe': function(){
        let nom = prompt("Entrez un nom pour votre liste !");
        Meteor.call("creationListe", nom, Meteor.userId());
    },
    'click #supprimerListe': function(){
        let verification = confirm("Etes-vous sûr ?");
        
    }
})