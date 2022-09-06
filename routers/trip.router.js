const express = require('express');
const { createTrip , getAllTrip , getDetailTrip , updateTrip, deleteTrip} = require('../controllers/trip.controller');
const tripRouters = express.Router();

tripRouters.post('/' , createTrip);
tripRouters.get('/' , getAllTrip);
tripRouters.get('/:id' , getDetailTrip);
tripRouters.put('/:id' , updateTrip);
tripRouters.delete('/:id' , deleteTrip);

module.exports = {
    tripRouters
}