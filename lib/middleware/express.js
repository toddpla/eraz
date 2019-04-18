const HttpError = require('../index');

module.exports = (error, req, res, next) => {
    if (!error instanceof HttpError) next();
    res.status(error.code).json(error);
};