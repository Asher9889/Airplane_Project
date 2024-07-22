class apiError{
    constructor(status,statusCode, message, error){
        this.status = status;
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
    }
}

module.exports = apiError;