const contacts = require("../data/contacts")

function list(req, res) {
    res.json(contacts);
  }
  
  function show(req, res) {
    const contactId = parseInt(req.params.id);
    const contact = contacts.find(u => u.id === contactId);
  
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).send('Contact not found');
    }
  }
  
  function create(req, res) {
    const counter = contacts.length;
    const newContact = {
      id: counter + 1,
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar
    };
  
    contacts.push(newContact);
    res.json(newContact);
  }
  
  module.exports = { list, show, create };