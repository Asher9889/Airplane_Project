const { AirplaneRespository } = require("../repositories")

const airplaneRepositroy = new AirplaneRespository();

async function createAirplane(data){
    try {
        const response = await airplaneRepositroy.create(data)
        return response;
    } catch (error) {
        console.log("Error caught in airplane service" )
    }
}

async function getAllAirplanes(){
    try {
        const airplanes = await airplaneRepositroy.getAll()
        return airplanes;
    } catch (error) {
        console.log("Error happend in airplane service getAirplanes")
    }
}

async function getAirplane(id){
    try {
        const airplane = await airplaneRepositroy.get(id)
        return airplane;
    } catch (error) {
        console.log("Error got in airplane service")
    }
}

async function destroyAirplane(id){
    try {
        const deletedAirplane = await airplaneRepositroy.destroy(id)
        return deletedAirplane;
    } catch (error) {
        console.log("Error got in airplane service")
    }
}

async function updateAirplane(data,id){
    try {
        const updatedAirplane = await airplaneRepositroy.update(data, id)
        return updateAirplane;
    } catch (error) {
        console.log("Error got in airplane service")
    }
}



module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}