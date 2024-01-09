const express = require('express')
const router = express.Router()
const products = require("../data/products")

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:_id', (req, res) => {

  const productId = parseInt(req.params._id);
  const product = products.find(u => u._id === productId);

  if (product) {
    res.json(product);
  } else {
    // console.log('product not found');
    res.status(404).send('Product not found');
  }
});

router.post('/', (req, res) => {
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
