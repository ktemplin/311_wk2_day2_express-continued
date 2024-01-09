const express = require('express')
const router = express.Router()

router.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

router.get('/vehicles/:_id', (req, res) => {

  const vehicleId = parseInt(req.params._id);
  const vehicle = vehicles.find(u => u._id === vehicleId);

  if (vehicle) {
    res.json(vehicle);
  } else {
    res.status(404).send('vehicle not found');
  }
});

router.post('/vehicles', (req, res) => {
  const counter = vehicles.length;
  const newVehicle = {
    id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };

vehicles.push(newVehicle);
res.json(newVehicle);
});

module.exports = router; 
