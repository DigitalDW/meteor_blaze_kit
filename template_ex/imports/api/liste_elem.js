import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Elem = new Mongo.Collection('listeElem');

Meteor.methods({
	//supprimer une tâche en fonction de son ID
	'elem.remove'(elemID){
		Elem.remove(elemID);
	},
	'elem.editSelect'(elemID, setSelected){
		Elem.update(elemID, { $set: { selected: setSelected } } )
	},
	'elem.editName'(elemID, newName){
		Elem.update(elemID, { $set: { elementListe: newName } } )
	}
})