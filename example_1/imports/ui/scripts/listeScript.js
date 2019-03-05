import { Template } from "meteor/templating";

import '../templates/liste.html';
import '../templates/objetsListe.html';

Template.liste.helpers({
    objets: function(){
        let arr = []
        for(let i=0;i<5;i++){
            arr.push({contenu: `Objet ${i}`})
        }
        return arr
    }
})