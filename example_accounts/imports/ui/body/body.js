import './body.html';
import '../telechargement/tele.js';
import '../accueil/accueil.js';
import '../contact/contact.js';
import '../login/login.js';
import '../../../lib/routing.js';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.app_body.helpers({
	utilisateur: () => Meteor.user().username,
});

Template.app_body.events({
	'click #accueil'(event) {
		event.preventDefault();
		FlowRouter.go('accueil');
	},
	'click #tele'(event) {
		event.preventDefault();
		FlowRouter.go('tele');
	},
	'click #contact'(event) {
		event.preventDefault();
		FlowRouter.go('contact');
	},
	'click #login'(event) {
		event.preventDefault();
		FlowRouter.go('login');
	},
	'click #logout'(event) {
		event.preventDefault();
		Meteor.logout();
	},
});
