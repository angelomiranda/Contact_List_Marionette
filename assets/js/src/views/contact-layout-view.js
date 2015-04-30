
'use strict';

var contactLayoutViewTemplate = require('../../../templates/contact-layout-view-template.hbs');
var Marionette = require('marionette');

module.exports = Marionette.LayoutView.extend({
  template: contactLayoutViewTemplate,

  regions: {
    title: "#title",
    contentListContent: "#content-list-content",
    contactContent: "#contact-item-content"
  }
});
