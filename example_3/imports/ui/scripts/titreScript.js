import { Template } from "meteor/templating";
import { Listes } from "../../api/listesDB.js" 
import { Meteor } from "meteor/meteor";

import "../templates/titre.html"

Template.titre.helpers({
    text: function(){
        let liste = Listes.findOne({ createur: Meteor.userId() })
        return liste.text
    }
})