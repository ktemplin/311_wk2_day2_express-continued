const vehicles = require("../data/vehicles")

function list(req, res) {
    res.json(vehicles);
  }
  
  function show(req, res) {
    const vehicleId = parseInt(req.params.id);
    const vehicle = vehicles.find(u => u.id === vehicleId);
  
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).send('Vehicle not found');
    }
  }
  
  function create(req, res) {
    const counter = vehicles.length;
    const newVehicle = {
      id: counter + 1,
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar
    };
  
    vehicles.push(newVehicle);
    res.json(newVehicle);
  }
  
  module.exports = { list, show, create };