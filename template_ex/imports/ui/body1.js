import { Template } from 'meteor/templating';

import './body.html';
import './titre.html';
import './bonjour1.html';

Template.titre.helpers({
	text: function(){
		monTexte = "Les Templates"
		return monTexte
	},
});

Template.body.helpers({
	ex1: function(){
		return true
	},
	condition0: function(){
		return true
	},
	condition1: function(){
		return false
	},
	condition2: function(){
		return false
	}
});