import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
	name: 'accueil',
	action() {
		BlazeLayout.render('app_body', { main: 'accueil' });
	},
});

FlowRouter.route('/telechargement', {
	name: 'tele',
	action() {
		BlazeLayout.render('app_body', { main: 'tele' });
	},
});

FlowRouter.route('/contact', {
	name: 'contact',
	action() {
		BlazeLayout.render('app_body', { main: 'contact' });
	},
});
