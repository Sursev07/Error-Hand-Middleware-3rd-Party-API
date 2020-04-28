module.exports = function(err, req, res, next){
    let  statusCode = 500;
    let errorCode = "UNKNOWN_ERROR";
    let message = "";
    console.log(err.response.data, '>>>> ini error')

    if(err.name == 'SequelizeValidationError') {
        statusCode = 400
        errorCode = "VALIDATION_ERROR"
        message = "Data harus lengkap"
    } else if(err.name == "DATA_NOT_FOUND"){
        statusCode = 404
        errorCode = "INVALID_ID"
        message = "Data tidak ditemukan"
    } else if(err.response.data.fault.detail.errorcode == 'oauth.v2.InvalidApiKey')
    {
        statusCode = 401
        errorCode = "INVALID_API_KEY"
        message = "Api key is invalid"
    }
    res.status(statusCode).json({errorCode, message})
}
