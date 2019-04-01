FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("main");
    }
});

FlowRouter.route('/liste/:id', {
    name: 'liste',
    action() {
        BlazeLayout.render("listeMain");
    }
});