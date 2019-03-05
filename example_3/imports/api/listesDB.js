import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Listes = new Mongo.Collection("listes");

if(Meteor.isServer){
    Meteor.publish('listes', function listesPublier(){
        return Listes.find({})
    })
}

Meteor.methods({
    'creationListe'(texte, idUtilisateur){
        check(texte, String);
        check(idUtilisateur, String);
        let ajout = Listes.insert({
            text: texte,
            createur: idUtilisateur
        });
        console.log("Success !")
        return ajout
    }
})