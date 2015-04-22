
'use strict';

var $ = require('jquery');

var ContactCollection = require('./src/collection/contact-list');

var ContactListView = require('./src/views/contact-item-view');

$(document).ready(function() {

    contactCollection = new ContactCollection();

    var contactListView = new ContactListView({
        el: '#contact-list-wrap',
        collection: contactCollection
    });

    contactCollection.fetch();

    contactListView.render();

});

// // Get All
// $.get('/contacts')
//     .then(function(response){console.log(response)})

// // Get By ID
// $.get('/contacts/id')
//     .then(function(response){console.log(response)});

// // Add a Contact
// $.post('/contacts', {name: 'JhunAvi', age: 4, gender: 'Male'})
//     .then(function (data) {
//         console.log(data)
//     });

// // Delete a Contact
// $.post('/contact/552c7e1ed6055d182232b1f0', { _method : 'delete' })
//     .then(function(response) {
//         console.log(response);
//     });

// // Update a contact by ID
// $.post('/contact/552b059b76d9f1deca021adf', { _method : 'put', name: 'Angelo', age: 34, gender: 'Male' })
//     .then(function(response) {
//         console.log(response);
//     });