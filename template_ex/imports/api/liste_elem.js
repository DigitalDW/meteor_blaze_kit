import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Elem = new Mongo.Collection('listeElem');

if (Meteor.isServer) {
  Meteor.publish('elems', function elemsPublication() {
    return Elem.find();
  });
}

Meteor.methods({
	'elem.add'(text){
		check(text, String);
		Elem.insert({
			elementListe: text,
			selected: false,
			createdAt: new Date(),
			createur: Meteor.userId(),
			nomUtilisateur: Meteor.user().username,
		});
	},
	'elem.remove'(elemID){
		check(elemID, String);
		Elem.remove(elemID);
	},
	'elem.editSelect'(elemID, setSelected){
		check(elemID, String);
		check(setSelected, Boolean);
		Elem.update(elemID, { $set: { selected: setSelected } } )
	},
	'elem.editName'(elemID, newName){
		check(elemID, String);
		check(newName, String);
		Elem.update(elemID, { $set: { elementListe: newName } } )
	},
	'elem.setSelected'(){
		Elem.update({}, { $set: { selected: false }}, { multi: true } )
	}
})