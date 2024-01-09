const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
  res.json(products);
});

router.get('/products/:_id', (req, res) => {

  const productId = parseInt(req.params._id);
  const product = products.find(u => u._id === productId);

  if (product) {
    res.json(product);
  } else {
    // console.log('product not found');
    res.status(404).send('product not found');
  }
});

router.post('/products', (req, res) => {
  const counter = products.length;
  const newProduct = {
    id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };

products.push(newProduct);
res.json(newProduct);
});

module.exports = router; 
