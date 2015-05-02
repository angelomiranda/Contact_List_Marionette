
'use strict';

var contactItemTemplate = require('../../../templates/contact-composite-view.hbs');

var ContactItemView = require('./contact-item');

var Marionette = require('backbone.marionette');

module.exports = Marionette.CompositeView.extend({

    childView: ContactItemView,

    childViewContainer: '#js-contact-list-wrap',

    template: contactItemTemplate,

    onRender: function () {
       this.collection.fetchCollection();
    }

});
