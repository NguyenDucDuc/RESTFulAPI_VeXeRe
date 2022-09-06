const res = require('express/lib/response');
const {trips , Stations} = require('../models')

const createTrip = async (req, res) => {
    const {fromStation , toStation , price , startTime} = req.body;

    console.log(fromStation,toStation,price,startTime);
    try {
        const newTrip = await trips.create({
            fromStation,
            toStation,
            startTime,
            price
        })
        res.status(201).send(newTrip)
    } catch (error) {
        res.status(500).send(error)
    }
    
}

const getAllTrip = async (req , res) => {
    try {
        const tripList = await trips.findAll({
            include : [
                {
                    model : Stations,
                    as  : "from"
                },
                {
                    model : Stations,
                    as  : "to"
                }
                
            ]

        });
        res.status(200).send(tripList)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailTrip = async (req, res) => {
    const {id} = req.params;

    try {
        const trip = await trips.findOne({
            where : {
                id
            },
            include : [
                {
                    model : Stations,
                    as  : "from"
                },
                {
                    model : Stations,
                    as  : "to"
                }
                
            ]
        })

        if(trip){
            res.status(200).send(trip);
        }else{
            res.status(404).send('Not Found !');
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

const updateTrip = async (req , res) => {
    const {id} = req.params;
    const {fromStation , toStation , startTime , price} = req.body;

    try {
        const updateTrip = await trips.findOne({
            where : {
                id
            }
        })

        if(updateTrip){
            updateTrip.fromStation = fromStation;
            updateTrip.toStation = toStation;
            updateTrip.startTime = startTime;
            updateTrip.price = price;
            await updateTrip.save();

            res.status(200).send(updateTrip)
        }else{
            res.status(404).send('Not Found!')
        }
    } catch (error) {
        res.send(500).send(error)
    }
    
}

const deleteTrip = async  (req , res) => {
    const {id}  = req.params;

    try {
        await trips.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xoa thanh cong')
    } catch (error) {
        res.status(200).send(error)
    }
}
module.exports = {
    createTrip,
    getAllTrip,
    getDetailTrip,
    updateTrip,
    deleteTrip
}