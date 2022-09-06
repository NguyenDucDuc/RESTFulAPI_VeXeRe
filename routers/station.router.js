const express = require('express');
const {Stations} = require('../models')
const { createStation , getDetailStation , updateStation , deleteStation, getAllStation} = require('../controllers/station.controller');
const { checkExist } = require('../middlewares/validations/checkExist.middleware');
const { authenticate } = require('../middlewares/authen/authenticate');
const { authorize } = require('../middlewares/authen/authorize');

const stationRouter = express.Router();

stationRouter.post("/" , authenticate , authorize(["ADMIN","SUPER_ADMIN"]),  createStation);
stationRouter.get("/:id" , getDetailStation )
stationRouter.get("/" , getAllStation )
stationRouter.put("/:id" , authenticate , authorize(["ADMIN","SUPER_ADMIN"]), checkExist(Stations) , updateStation)
stationRouter.delete("/:id" , authenticate , authorize(["ADMIN","SUPER_ADMIN"]), authenticate, checkExist(Stations), deleteStation)
module.exports = {
    stationRouter,
}