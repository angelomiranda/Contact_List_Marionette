var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    urlRoot: 'contacts/',
    idAttribute: "_id"
});