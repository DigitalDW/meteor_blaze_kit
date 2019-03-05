import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './body.html';
import './scripts/hwScript.js';
import './scripts/listeScript.js';
import './scripts/titreScript.js';

Template.body.onCreated(function(){
    Meteor.subscribe("listes")
})

Template.body.events({
    'click #creer': function(){
        let nom = prompt("Entrez un nom pour votre liste !");
        Meteor.call("creationListe", nom, Meteor.userId())
    }
})