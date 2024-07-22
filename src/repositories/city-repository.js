const CrudRepository = require("./crud-repository");
// in Model no need to mention proper city model
// index file has all the information
const { City } = require("../models")

class CityRepository extends CrudRepository{
    constructor(){
        super(City)
    }
}

module.exports = CityRepository;