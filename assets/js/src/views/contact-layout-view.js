
'use strict';

var contactLayoutViewTemplate = require('../../../templates/contact-layout-view-template.hbs');
var Marionette = require('marionette');

module.exports = Marionette.LayoutView.extend({
  template: contactLayoutViewTemplate,

  regions: {
    title: "#js-title",
    contentListContent: "#js-contact-list-content",
    contactContent: "#js-contact-item-content"
  }
});
