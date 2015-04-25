
'use strict';

var mediator = require('../events/mediator');

var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({

    ui: {
        '$contactName'   : '#js-name',
        '$contactGender' : '#js-gender',
        '$contactAge'    : '#js-age'
    },

    events: {
        'submit' : 'didClickSubmit'
    },

    initialize: function () {
        this.bindUIElements();
        mediator.on('contact:added', this.resetForm, this);
    },

    focusOnFirstField: function () {
        this.ui.$contactName.focus();
    },

    resetForm: function () {
        this.ui.$contactName.val('');
        this.ui.$contactAge.val('');
        this.ui.$contactGender.val('');

        this.focusOnFirstField();
    },

    didClickSubmit: function (event) {
        event.preventDefault();

        var contact = {
            name: this.ui.$contactName.val(),
            age: this.ui.$contactAge.val(),
            gender: this.ui.$contactGender.val()
        };

        mediator.trigger('contact:add', contact);
    }

});
