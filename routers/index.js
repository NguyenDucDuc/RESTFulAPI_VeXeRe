const express = require('express');
const { stationRouter } = require('./station.router');
const { tripRouters } = require('./trip.router');
const { userRouter } = require('./user.router');
const { fingerPrintRouter } = require('./text-fingerprint');

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips" , tripRouters)
rootRouter.use("/testFingerPrint" , fingerPrintRouter)

module.exports = {
    rootRouter
}