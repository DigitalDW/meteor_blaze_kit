import { Template } from "meteor/templating";

// Importer les templates associes
import '../templates/liste.html';
import '../templates/objetsListe.html';

// Retourner des objets à afficher dans la liste
Template.liste.helpers({
    objets: function(){
        let arr = []
        for(let i=0;i<5;i++){
            arr.push({contenu: `Objet ${i}`})
        }
        return arr
    }
})
