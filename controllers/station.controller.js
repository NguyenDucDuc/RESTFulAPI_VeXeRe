const { Op } = require('sequelize');
const {Stations} = require('../models');

const createStation = async (req, res) => {
    const {name , address , province} = req.body;
    try {
        const newStation = await Stations.create({
            name , address , province
        })
        res.status(201).send(newStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailStation = async (req , res) => {
    
    const {id} = req.params;
    try {
        detailStation = await Stations.findOne({
            where : {
                id
            }
        })
        res.status(200).send(detailStation);
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllStation = async (req , res) => {
    

    try {
        res.status(200).send(Stations.findAll());
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateStation = async (req , res) => {
    const {id} = req.params;
    const {name , address , province} = req.body;

    try {
        detailStation = await Stations.findOne({
            where : {
                id
            }
        })
        detailStation.name = name;
        detailStation.address = address;
        detailStation.province = province;

        await detailStation.save();
        res.status(200).send(detailStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteStation = async (req, res) => {
    const {id} = req.params;
    try {
        await Stations.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
    updateStation,
    deleteStation
}