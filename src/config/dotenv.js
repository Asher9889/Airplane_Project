const dotenv = require("dotenv");

dotenv.config();

// now we can add variables in process modules
// console.log(process.env)


module.exports = process.env.PORT;
