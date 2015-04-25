
'use strict';

var $ = require('jquery');
var contactItemTemplate = require('../../../templates/contact-item.hbs');

var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    template: contactItemTemplate,
    tagName: 'tr',

    events: {
        'click .js-contact-delete': 'didClickDeleteButton'
    },

    didClickDeleteButton: function () {
        var self = this;
        $.post('/contact/' + self.model.get('_id'), { _method : 'delete' })
        .then(function(response) {
            if (response.status === 'ok') {
                self.model.destroy();
            }
        });

    }
});
