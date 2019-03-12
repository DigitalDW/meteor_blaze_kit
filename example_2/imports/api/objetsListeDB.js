import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

// Exporter une constante pour la base de donnees
export const Objets = new Mongo.Collection("objets")

// Fonction pour authoriser l'acces aux donnees par certains templates
if(Meteor.isServer){
    Meteor.publish('objets', function objetsPublier(){
        return Objets.find({})
    })
}

// Ecriture des methodes
Meteor.methods({
    // Methode d'ajout d'element a la base
    'ajoutObjet'(text){
        check(text, String);
        let ajout = Objets.insert({
            contenu: text
        });
        console.log("Success !")
        return ajout
    }
})