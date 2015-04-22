
'use strict';

var contactItemTemplate = require('../../../templates/contact-item.hbs');

var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    template: contactItemTemplate,
    tagName: 'tr',

    events: {
        'click': 'didClickItem'
    },

    modelEvents: {
        'change': 'render'
    },

    collectionEvents: {
        'add': 'render'
    },

    didClickItem: function (event) {
        console.log( $(event.target) )
    }
});