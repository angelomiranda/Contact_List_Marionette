
'use strict';

var ContactItemView = require('./contact-item');

var Marionette = require('backbone.marionette');

module.exports = Marionette.CollectionView.extend({
    childView: ContactItemView
});
