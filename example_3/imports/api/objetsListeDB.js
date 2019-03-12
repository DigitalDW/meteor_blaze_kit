import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

// Exporter une constante pour la base de donnees
export const Objets = new Mongo.Collection("objets");

// Fonction pour authoriser l'acces aux donnees par certains templates
if(Meteor.isServer){
    Meteor.publish('objets', function objetsPublier(){
        return Objets.find({})
    })
}

// Ecriture des methodes
Meteor.methods({
    // Methode d'ajout d'element a la base
    'ajoutObjet'(text, idListe){
        check(text, String);
        check(idListe, String);
        let ajout = Objets.insert({
            contenu: text,
            fkListe: idListe
        });
        return ajout
    },
    // Methode de suppression d'element
    'supprimerObjet'(id){
        check(id, String);
        let objet = Objets.findOne(id)
        Objets.remove(objet)
    },
    // Methode de suppression de plusieurs elements
    // en fonction de leur apparetenance a une liste
    'supprimerObjetsListe'(idListe){
        check(idListe, String);
        Objets.remove({ fkListe: idListe });
    }
})