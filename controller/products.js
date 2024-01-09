const products = require("../data/products");

function list(req, res) {
  res.json(products);
}

function show(req, res) {
  const productId = parseInt(req.params.id);
  const product = products.find(u => u.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
}

function create(req, res) {
  const counter = products.length;
  const newProduct = {
    id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };

  products.push(newProduct);
  res.json(newProduct);
}

module.exports = { list, show, create };
