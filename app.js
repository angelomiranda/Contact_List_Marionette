
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/contacts');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
// app.set("view options", {layout: false});
// app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname)));

console.log(__dirname)

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var Schema = mongoose.Schema;

var Contacts = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true }
});

var ContactsModel = mongoose.model('Contacts', Contacts);

// Get All Contacts Collection
app.get('/contacts', function (req, res) {
  ContactsModel.find(function (err, contacts) {
    if (!err) {
      res.json(contacts);
    } else {
      return console.log(err);
    }
  });
});

// Add a Contact
app.post('/contacts', function (req, res){
  var contacts;
  console.log("POST: ");
  contact = new ContactsModel({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  });

  contact.save(function (err) {
    if (!err) {
      return res.json({
        status: 'ok',
        message: 'Contact successfully added'
      });
    } else {
      return res.json({status: 'error'});
    }
  });
  return res.send(contact);
});

// Get Contact By ID
app.get('/contacts/:id', function (req, res) {
  console.log ( req.params.id )
  return ContactsModel.findById(req.params.id, function (err, contact) {
    if (!err) {
      return res.json({
        status: 'ok',
        message: 'Contact successfully fetched',
        contact: contact
      });
    } else {
      return res.json({status: 'error'});
    }
  });
});

// Update Contact By ID
app.put('/contact/:id', function (req, res){
  return ContactsModel.findById(req.params.id, function (err, contact) {
    contact.name = req.body.name;
    contact.age = req.body.age;
    contact.gender = req.body.gender;
    return contact.save(function (err) {
      if (!err) {
        return res.json({
          status: 'ok',
          message: 'Contact successfully updated',
          contact: contact
        });
      } else {
        return res.json({status: 'error'});
      }
    });
  });
});

// Delete Contact By ID
app.delete('/contact/:id' , function (req, res){
  return ContactsModel.findById(req.params.id, function (err, contact) {
    return contact.remove(function (err) {
      if (!err) {
        return res.json({
          status: 'ok',
          message: 'Contact Deleted',
          contact: contact
        });
      } else {
        return res.json({status: 'error'});
      }
    });
  });
});

// Root Path of App
app.get('/', function (req, res) {
    ContactsModel.find(function (err, contacts) {
      if (!err) {
        console.dir(contacts)
      } else {
        return console.log(err);
      }
    });
    res.sendfile(__dirname + '/views/index.html');
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
