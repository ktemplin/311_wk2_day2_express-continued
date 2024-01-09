const express = require('express')
const router = express.Router()
const contacts = require("../data/contacts")

router.get('/', (req, res) => {
  res.json(contacts);
});

router.get('/:_id', (req, res) => {

  const contactId = parseInt(req.params._id);
  const contact = contacts.find(u => u._id === contactId);

  if (contact) {
    res.json(contact);
  } else {
    res.status(404).send('contact not found');
  }
});

router.post('/', (req, res) => {
  const counter = contacts.length;
  const newContact = {
    id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };

contacts.push(newContact);
res.json(newContact);
});

module.exports = router; 
