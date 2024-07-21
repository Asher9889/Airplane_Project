function validateCreateAirplane(req,res,next){
    if(!(req.body.modelNumber && req.body.seatCapacity)){
        return res.status(400).json({
            success: false,
            message: "validation failed via Airplane Middleware"
        })
    }
    next();
}

module.exports = {
    validateCreateAirplane,
};