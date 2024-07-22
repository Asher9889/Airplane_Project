const { cityService } = require("../services")
const { apiError , apiSuccess, AppError, errorResponse} = require("../utils")



async function createCity(req, res){
    try {
        const data = {
            name: req.body.name,
            cityCode: req.body.cityCode
        }
        console.log(data)

        const createdCity = await cityService.createCity(data)
        console.log(createdCity)
        res.status(200).json(new apiSuccess(200,true,"Successfully City created", createdCity))

    } catch (err) {
        console.log("error is: ", err.message)
        res.status(400).json(new apiError(400, false, err.message))
    }
}


module.exports = {
    createCity,
}