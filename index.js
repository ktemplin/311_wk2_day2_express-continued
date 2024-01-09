const express = require("express");
const bodyParser = require("body-parser");

// const contacts = require("./data/contacts")
// const vehicles = require("./data/vehicles")
// const comments = require("./data/comments")
// const products = require("./data/products")

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json())

const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

const commentRouter = require('./routes/comments')
const contactRouter = require('./routes/contacts')
const productRouter = require('./routes/products')
const vehicleRouter = require('./routes/vehicles')

app.use('/comments', commentRouter)
app.use('/contacts', contactRouter)
app.use('/products', productRouter)
app.use('/vehicles', vehicleRouter)


//GET The Thing
// app.get('/contacts', (req, res) => {
//     res.json(contacts);
//   });

//   app.get('/vehicles', (req, res) => {
//     res.json(vehicles);
//   });

//   app.get('/comments', (req, res) => {
//     res.json(comments);
//   });

//   app.get('/products', (req, res) => {
//     res.json(products);
//   });
  
// GET by ID
//   app.get('/contacts/:_id', (req, res) => {
//      console.log('Received request for contact ID:', req.params._id);
  
//     const contactId = parseInt(req.params._id);
//     const contact = contacts.find(u => u._id === contactId);
  
//     if (contact) {
//      console.log('contact found:', contact);
//       res.json(contact);
//     } else {
//      console.log('contact not found');
//       res.status(404).send('contact not found');
//     }
//   });

//   app.get('/comments/:_id', (req, res) => {
//     console.log('Received request for comment ID:', req.params._id);
  
//     const commentId = parseInt(req.params._id);
//     const comment = comments.find(u => u._id === commentId);
  
//     if (comment) {
//      console.log('comment found:', comment);
//       res.json(comment);
//     } else {
//      console.log('comment not found');
//       res.status(404).send('comment not found');
//     }
//   });

//   app.get('/products/:_id', (req, res) => {
//     console.log('Received request for product ID:', req.params._id);
  
//     const productId = parseInt(req.params._id);
//     const product = products.find(u => u._id === productId);
  
//     if (product) {
//      console.log('product found:', product);
//       res.json(product);
//     } else {
//      console.log('product not found');
//       res.status(404).send('product not found');
//     }
//   });

//   app.get('/vehicles/:_id', (req, res) => {
//     console.log('Received request for vehicle ID:', req.params._id);
  
//     const vehicleId = parseInt(req.params._id);
//     const vehicle = vehicles.find(u => u._id === vehicleId);
  
//     if (vehicle) {
//      console.log('vehicle found:', vehicle);
//       res.json(vehicle);
//     } else {
//      console.log('vehicle not found');
//       res.status(404).send('vehicle not found');
//     }
//   });

// POSTs
// app.post('/comments', (req, res) => {
//     const counter = comments.length;
//     const newComment = {
//       id: counter + 1,
//       name: req.body.name,
//       occupation: req.body.occupation,
//       avatar: req.body.avatar
//     };

//   comments.push(newComment);
//   res.json(newComment);
// });

// app.post('/contacts', (req, res) => {
//     const counter = contacts.length;
//     const newContact = {
//       id: counter + 1,
//       name: req.body.name,
//       occupation: req.body.occupation,
//       avatar: req.body.avatar
//     };

//   contacts.push(newContact);
//   res.json(newContact);
// });

// app.post('/products', (req, res) => {
//     const counter = products.length;
//     const newproduct = {
//       id: counter + 1,
//       name: req.body.name,
//       occupation: req.body.occupation,
//       avatar: req.body.avatar
//     };

//   products.push(newproduct);
//   res.json(newproduct);
// });

// app.post('/vehicles', (req, res) => {
//     const counter = vehicles.length;
//     const newvehicle = {
//       id: counter + 1,
//       name: req.body.name,
//       occupation: req.body.occupation,
//       avatar: req.body.avatar
//     };

//   vehicles.push(newvehicle);
//   res.json(newvehicle);
// });