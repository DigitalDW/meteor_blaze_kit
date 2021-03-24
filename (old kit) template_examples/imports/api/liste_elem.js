//Import des méthodes
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

//Création d'une constante "Elem" qui servira à référencer la BD dans le code
export const Elem = new Mongo.Collection('listeElem');

//Condition pour le publish
if (Meteor.isServer) {
	//Publication des éléments de la BD
  	Meteor.publish('elems', function elemsPublication() {
	    return Elem.find({
	      	$or: [
	        	{ private: { $ne: true } },
	        	{ createur: this.userId },
	      	],
		});
	});
}

//Création de méthodes pour la BD
Meteor.methods({
	//elem.add: prend un String comme argument, ajoute une instance de Elem à la BD
	'elem.add'(text){
		check(text, String);
		let e = Elem.insert({
			//C'est ici qu'on ajoute le "text" récupéré 
			elementListe: text,
			//D'autres éléments créés automatiquement
			selected: false,
			private: false,
			createdAt: new Date(),
			createur: Meteor.userId(),
			nomUtilisateur: Meteor.user().username,
		});
		return e
	},
	//elem.remove: prend un String comme argument -> ici, l'id de l'élément
	//Supprime l'élément correspondant à l'id
	'elem.remove'(elemID){
		check(elemID, String);

		//Création d'une constante qui contient l'élément en question
		const elem = Elem.findOne(elemID);

		//Condition: si l'élément est privé et que ce n'est pas le bon utilisateur, faire une erreur
    	if (elem.private && elem.createur !== Meteor.userId()) {
     		throw new Meteor.Error('not-authorized, you are not the author of this element');
    	}

		Elem.remove(elemID);
	},
	//elem.editSelect: prend un String et un Boolean comme arguments
	//Va changer le statut "selected" d'un élément en fonction de son id
	'elem.editSelect'(elemID, setSelected){
		check(elemID, String);
		check(setSelected, Boolean);

		//Création d'une constante qui contient l'élément en question
		const elem = Elem.findOne(elemID);

		//Condition: si l'élément est privé et que ce n'est pas le bon utilisateur, faire une erreur
		if (elem.private && elem.createur !== Meteor.userId()) {
     		throw new Meteor.Error('not-authorized');
    	}

		Elem.update(elemID, { $set: { selected: setSelected } } )
	},
	//elem.editName: prend deux Strings comme arguments
	//Va changer le nom d'un élément en fonction de son id
	'elem.editName'(elemID, newName){
		check(elemID, String);
		check(newName, String);
		
		//Création d'une constante qui contient l'élément en question
		const elem = Elem.findOne(elemID);

		//Condition: si l'élément est privé et que ce n'est pas le bon utilisateur, faire une erreur
		if (elem.private && elem.createur !== Meteor.userId()) {
     		throw new Meteor.Error('not-authorized');
    	}

		Elem.update(elemID, { $set: { elementListe: newName } } )
	},
	//elem.setSelected: ne prend pas d'argument
	//Méthode statique qui sert à changer le statut "selected" de tous les éléments en "false"
	'elem.setSelected'(){
		Elem.update({}, { $set: { selected: false }}, { multi: true } )
	},
	//elem.setToPrivate: prend un String et un Boolean comme arguments
	//Va changer le statut "private" d'un élément en fonction de son id
	'elem.setToPrivate'(elemID, togglePrivate){
		check(elemID, String);
		check(togglePrivate, Boolean);
		
		//Création d'une constante qui contient l'élément en question
		const elem = Elem.findOne(elemID);

		//Condition: si l'élément est privé et que ce n'est pas le bon utilisateur, faire une erreur
		if (elem.createur !== Meteor.userId()){
      		throw new Meteor.Error('not-authorized');
    	}

    	Elem.update(elemID, { $set: { private: togglePrivate } });
	}
})