import { Template } from "meteor/templating";

import '../templates/helloWorld.html';

Template.helloWorld.helpers({
    text: function(){
        return "Hello World!"
    }
})

Template.helloWorld.events({
    'click h1': function(){
        alert("Bonjour!")
    }
})