
'use strict';

var Contact = require('../model/contact');

var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    model: Contact,
    url: '/contacts',

    initialize: function () {
        console.log('collection good to go!')
    }
});