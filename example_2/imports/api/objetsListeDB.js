import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Objets = new Mongo.Collection("objets")

if(Meteor.isServer){
    Meteor.publish('objets', function objetsPublier(){
        return Objets.find({})
    })
}

Meteor.methods({
    'ajoutObjet'(text){
        check(text, String);
        let ajout = Objets.insert({
            contenu: text
        });
        console.log("Success !")
        return ajout
    }
})