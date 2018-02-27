import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Elem = new Mongo.Collection('listeElem');

if (Meteor.isServer) {
  	Meteor.publish('elems', function elemsPublication() {
	    return Elem.find({
	      	$or: [
	        	{ private: { $ne: true } },
	        	{ createur: this.userId },
	      	],
		});
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

		const elem = Elem.findOne(elemID);

    	if (elem.private && elem.createur !== Meteor.userId()) {
     		throw new Meteor.Error('not-authorized');
    	}

		Elem.remove(elemID);
	},
	'elem.editSelect'(elemID, setSelected){
		check(elemID, String);
		check(setSelected, Boolean);

		const elem = Elem.findOne(elemID);

		if (elem.private && elem.createur !== Meteor.userId()) {
     		throw new Meteor.Error('not-authorized');
    	}

		Elem.update(elemID, { $set: { selected: setSelected } } )
	},
	'elem.editName'(elemID, newName){
		check(elemID, String);
		check(newName, String);

		const elem = Elem.findOne(elemID);

		if (elem.private && elem.createur !== Meteor.userId()) {
     		throw new Meteor.Error('not-authorized');
    	}

		Elem.update(elemID, { $set: { elementListe: newName } } )
	},
	'elem.setSelected'(){
		Elem.update({}, { $set: { selected: false }}, { multi: true } )
	},
	'elem.setToPrivate'(elemID, togglePrivate){
		check(elemID, String);
		check(togglePrivate, Boolean);

		const elem = Elem.findOne(elemID);

		if (elem.createur !== Meteor.userId()){
      		throw new Meteor.Error('not-authorized');
    	}

    	Elem.update(elemID, { $set: { private: togglePrivate } });
	}
})