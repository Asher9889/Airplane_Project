const { CityRepository } = require("../repositories")
const { AppError} = require("../utils")



const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const createdCity = await cityRepository.create(data);
        console.log("CreatedCity in service: ",createdCity)
        return createdCity;

    } catch (error) {
        // console.log("error is city service", error.errors[0].message)
        if(error.name ==='SequelizeUniqueConstraintError'){
            let explanation = error.errors[0].message
            console.log(explanation)
            throw new AppError(explanation,400, false, )
        }


        throw new AppError("City is not Created",false, 400, )
    }
}

module.exports = {
    createCity,
}