import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './login.html';

Template.login.onCreated(function () {
	this.nouveau = new ReactiveVar(false);
});

Template.login.helpers({
	nouveau: () => Template.instance().nouveau.get(),
});

Template.login.events({
	'click #nouvelle_connexion'(event, template) {
		event.preventDefault();
		console.log(template);
		template.nouveau.get()
			? template.nouveau.set(false)
			: template.nouveau.set(true);
	},
	'click #connexion'(event) {
		event.preventDefault();
		let nom = document.getElementById('nom_utilisateur').value;
		let mdp = document.getElementById('mdp').value;
		Meteor.loginWithPassword(nom, mdp, (error) => {
			if (error) {
				alert(error.message);
			} else {
				setTimeout(() => FlowRouter.go('accueil'), 200);
			}
		});
	},
	'click #creer_compte'(event) {
		event.preventDefault();
		let nom = document.getElementById('nom_utilisateur').value;
		let mdp = document.getElementById('mdp').value;
		let mdp_conf = document.getElementById('mdp_conf').value;
		let age = document.getElementById('age').value;
		let animal = document.getElementById('animal').value;
		if (mdp.length > 5) {
			if (mdp == mdp_conf) {
				if (nom != '' && mdp != '' && age != '') {
					Accounts.createUser(
						{
							username: nom,
							password: mdp,
							profile: {
								age: age,
								animal: animal != '' ? animal : null,
							},
						},
						(error) => {
							if (error) {
								alert(error.message);
							} else {
								setTimeout(() => FlowRouter.go('accueil'), 200);
							}
						},
					);
				} else {
					alert('Veuillez renseigner les champs obligatioires');
				}
			} else {
				alert('Veuillez confirmer le mot de passe');
			}
		} else {
			alert('Mot de passe trop court');
		}
	},
});
