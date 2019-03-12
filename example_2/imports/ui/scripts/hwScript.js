import { Template } from "meteor/templating";

// Importer les templates associes au script
import '../templates/helloWorld.html';

// Retourner un texte pour le titre
Template.helloWorld.helpers({
    text: () => "Hello World!"
})

// Gerer les clics sur le titre
Template.helloWorld.events({
    'click h1': function(){
        alert("Bonjour!")
    }
})