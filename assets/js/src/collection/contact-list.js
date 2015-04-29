
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

    addContact: function (contact) {

        var self = this;
        var contactModel = {
            name: contact.name,
            age: contact.age,
            gender: contact.gender
        };

        $.post('/contacts', contactModel)
             .then(function (response) {
                if (response.status === 'ok') {
                    self.add(contactModel);
                    self.fetchCollection();
                    mediator.trigger('contact:added');
                }
             });
    },

    fetchCollection: function () {
        this.fetch();
    }
});

