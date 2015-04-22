
'use strict';

var $ = require('jquery');
var _ = require('underscore');

var ContactItemView = require('./contact-item');

var Marionette = require('backbone.marionette');

module.exports = Marionette.CollectionView.extend({
    childView: ContactItemView,

    onRender: function () {
        console.log('viola')
    }
});
