
'use strict';


var $ = require('jquery');
var mediator = require('../events/mediator');

var Contact = require('../model/contact');
var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    model: Contact,
    url: '/contacts',

    initialize: function () {
        mediator.on('contact:add', this.addContact, this);
    },

    willAddContact: function (response) {
        if (response.status === 'ok') {
            this.add(contactModel);
        }
    },

    addContact: function (contact) {

        var self = this;
        var contactModel = {
            name: contact.name,
            age: contact.age,
            gender: contact.gender
        };

        // var contactModel = new Contact({
        //     name: contact.name,
        //     age: contact.age,
        //     gender: contact.gender
        // });

        $.post('/contacts', contactModel)
             .then(function (response) {
                if (response.status === 'ok') {
                    self.add(contactModel);
                    self.fetch();
                    mediator.trigger('contact:added');
                }
             });

        // this.add(contactModel);
    }
});

