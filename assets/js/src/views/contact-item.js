
'use strict';

var $ = require('jquery');
var mediator = require('../events/mediator');
var contactItemTemplate = require('../../../templates/contact-item.hbs');

var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    template: contactItemTemplate,
    tagName: 'tr',

    ui: {
        '$contactName': '.js-contact-item-name',
        '$contactAge' : '.js-contact-item-age',
        '$contactGender': '.js-contact-item-gender'
    },

    events: {
        'click .js-contact-delete'  : 'didClickDeleteButton',
        'dblclick .js-contact-item' : 'didDblClickContactItem',
        'keypress .js-contact-item-field' : 'didKeyPressOnContactField',
        'keyup .js-contact-item-field' : 'didKeyUpOnContactField'
    },

    didClickDeleteButton: function () {
        var self = this;
        $.post('/contact/' + self.model.get('_id'), { _method : 'delete' })
        .then(function(response) {
            if (response.status === 'ok') {
                self.model.destroy();
            }
        });
    },

    didDblClickContactItem: function () {
        this.$el.addClass('is-editing');
    },

    didKeyPressOnContactField: function (event) {

        var self = this;

        var model = {
            _method : 'put',
            name: this.ui.$contactName.val(),
            age: this.ui.$contactAge.val(),
            gender: this.ui.$contactGender.val()
        };

        if (event.keyCode  === 13) {
            var url = '/contact/' + this.model.get('_id');

            $.post(url, model)
                .then(function (response) {
                    if (response.status === 'ok') {
                        self.model.set(model);
                        self.render();
                        self.showReadOnlyView();
                    }
                });
        }
    },

    didKeyUpOnContactField: function (event) {
        if (event.keyCode === 27) {
            this.showReadOnlyView();
        }
    },

    showEditingView: function () {
        this.$el.addClass('is-editing');
    },

    showReadOnlyView: function () {
        this.$el.removeClass('is-editing');
    }
});
