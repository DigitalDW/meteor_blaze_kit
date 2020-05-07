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

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('login');
  },
});
