
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    events: {
        'click': function () {
            console.log('view clicked');
        }
    },
    initialize: function () {
        console.log('backbone view intialized');
    }
});