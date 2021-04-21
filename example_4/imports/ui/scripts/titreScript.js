import { Template } from "meteor/templating";
import { Listes } from "../../api/listesDB.js" 
import { Meteor } from "meteor/meteor";

// Importer les templates associes
import "../templates/titre.html"

// Retourner le nom de la liste
Template.titre.helpers({
    text: function(){
        let liste = Listes.findOne({ createur: Meteor.userId() })
        return liste.text
    }
})

// Modifier le titre lorsque l'on clique dessus
Template.titre.events({
    'click h1': function(){
        let nouveauTitre = prompt ("Entrez un nouveau titre !");
        let liste = Listes.findOne({ createur: Meteor.userId() });
        Meteor.call('modifierTitre', liste._id, nouveauTitre);
    }
})