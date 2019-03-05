import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Objets = new Mongo.Collection("objets");

if(Meteor.isServer){
    Meteor.publish('objets', function objetsPublier(){
        return Objets.find({})
    })
}

Meteor.methods({
    'ajoutObjet'(text, idListe){
        check(text, String);
        check(idListe, String);
        let ajout = Objets.insert({
            contenu: text,
            fkListe: idListe
        });
        console.log("Success !")
        return ajout
    },
    'supprimerObjet'(id){
        check(id, String);
        let objet = Objets.findOne(id)
        Objets.remove(objet)
    }
})