import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

// Exporter une constante pour la base de donnees
export const Listes = new Mongo.Collection("listes");

// Fonction pour authoriser l'acces aux donnees par certains templates
if(Meteor.isServer){
    Meteor.publish('listes', function listesPublier(){
        return Listes.find({})
    })
}

// Ecriture des methodes
Meteor.methods({
    // Methode de creation de liste
    'creationListe'(texte, idUtilisateur){
        check(texte, String);
        check(idUtilisateur, String);
        let ajout = Listes.insert({
            text: texte,
            createur: idUtilisateur
        });
        return ajout
    },
    // Methode de suppression de liste
    'suppressionListe'(idListe){
        check(idListe, String);
        let liste = Listes.findOne(idListe);
        Listes.remove(liste);
    },
    // Methode pour modifier le nom de la liste
    'modifierTitre'(idListe, nouveauTitre){
        check(idListe, String);
        check(nouveauTitre, String);
        Listes.update(idListe, {$set: { text: nouveauTitre }});
    }
})