/*jshint unused:false */

var $ = require('jquery');

var ContactCollection = require('./src/collection/contact-list');
var ContactCompositeView = require('./src/views/contact-composite-view');

var AddContactView = require('./src/views/add-contact-view');

$(document).ready(function() {
    'use strict';

    var contactCollection = new ContactCollection();

    var contactCompositeView = new ContactCompositeView({
        el: '#js-contact-list-content',
        collection: contactCollection
    });

    var addContactView = new AddContactView({
        el: '#js-add-contact'
    });

    contactCompositeView.render();

});
