import { Template } from "meteor/templating";

// Importer les templates associes au script
import '../templates/helloWorld.html';

// Retourner un texte pour le titre
Template.helloWorld.helpers({
    text: function(){
        return "Demo"
    }
})

// Gerer les clics sur le titre
Template.helloWorld.events({
    'click h1': function(){
        alert("Créez votre propre liste en vous créant un compte !")
    }
})