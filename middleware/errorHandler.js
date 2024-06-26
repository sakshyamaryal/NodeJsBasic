const { constants } = require("../constants");

// constants
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ?  res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Not Found", message: err.message, stackTrace: err.stack});
        break;
        case constants.UNAUTHORIZED:
            res.json({title:"Validation Failed", message: err.message, stackTrace: err.stack});
        break;
        case constants.NOT_FOUND:
            res.json({title:"Validation Failed", message: err.message, stackTrace: err.stack});
        break;
        case constants.FORBIDDEN:
            res.json({title:"Validation Failed", message: err.message, stackTrace: err.stack});
        break;
        case constants.SERVERERROR:
            res.json({title:"Validation Failed", message: err.message, stackTrace: err.stack});
        break;
        default:
            break;
    }
};

module.exports = errorHandler;