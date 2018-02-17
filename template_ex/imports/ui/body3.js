import { Template } from 'meteor/templating';
 import { Elem } from '../api/liste_elem.js';
import './body3.html';

Template.body.helpers({
	elem() {
    return Elem.find({});
  },
});