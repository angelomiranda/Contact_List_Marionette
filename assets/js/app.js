/*jshint unused:false */

var $ = require('jquery');

var ContactCollection = require('./src/collection/contact-list');
var ContactListView = require('./src/views/contact-item-view');

var AddContactView = require('./src/views/add-contact-view');

$(document).ready(function() {
    'use strict';

    var contactCollection = new ContactCollection();

    var contactListView = new ContactListView({
        el: '#contact-list-wrap',
        collection: contactCollection
    });

    var addContactView = new AddContactView({
        el: '#js-add-contact'
    });

    contactCollection.fetch();
    contactListView.render();

});
