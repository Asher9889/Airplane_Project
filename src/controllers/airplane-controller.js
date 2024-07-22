const { airplaneService } = require("../services")
const { successResponse, errorResponse } = require("../utils")
const { success } = require("../utils/common/success-response")


async function createAirplane(req, res){
    try {
        console.log(req.body)
        const airplane = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            seatCapacity: req.body.seatCapacity,
        })
        // for customizing the responses object
        successResponse.message = "Successfully plane created"
        successResponse.data = airplane

        if(airplane){return res.status(200).json(successResponse)}
    } catch (error) {
        console.log(error)
        return res.status(500).json(errorResponse)
    }
}

async function getAirplanes (req,res){
    try {
        console.log(req.params.id)
       
        const airplanes = await airplaneService.getAllAirplanes()
        successResponse.message = "Successfully fetched all the Airplanes"
        successResponse.data = airplanes;
        return res.status(200).json(successResponse)
    } catch (error) {
        console.log("Error Occurs in controller")
    }
}

/**
 * GET : /airplanes/:id
 * id : req.params.id
 */
async function getAirplane (req,res){
    try {
        console.log(req.params.id)
        const airplane = await airplaneService.getAirplane(req.params.id)
        if(airplane == null){
            errorResponse.message = "Airplane not Found"
            errorResponse.success = false
            errorResponse.data = {}
            return res.status(404).json(errorResponse)
        }else {
            successResponse.message  = "Successfully fetched the Airplane"
            successResponse.data = airplane
            return res.status(200).json(successResponse)
        }
    } catch (error) {
        errorResponse.error = error;
        res.status(400).json(errorResponse)
    }
}

async function deleteAirplane(req, res){
    try {
        const deletedAirplane = await airplaneService.destroyAirplane(req.params.id)
        if(deletedAirplane == 0){
            errorResponse.message = "Airplane not Found"
            errorResponse.success = false
            errorResponse.data = {}
            return res.status(404).json(errorResponse)
        }
        successResponse.message = "Successfully Airplane get deleted";
        successResponse.data = deletedAirplane;
        return res.status(200).json(successResponse)
    } catch (error) {
        errorResponse.error = error;
        res.status(400).json(errorResponse)
    }
}

async function updateAirplane(req, res){
    try {
        const data = {
            modelNumber: req.body.modelNumber,
            seatCapacity: req.body.seatCapacity
        }
        const id = req.params.id
        const updatedAirplane = await airplaneService.updateAirplane(data, id)
        const newUpdatedPlane = await airplaneService.getAirplane(id)
        successResponse.message = "Successfully Airplane info get Updated";
        successResponse.data = newUpdatedPlane;
        
        return res.status(200).json(successResponse)
    } catch (error) {
        errorResponse.error = error;
        res.status(400).json(errorResponse)
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}