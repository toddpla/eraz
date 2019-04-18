const errorGenerator = require('./utils/generator');
const expressHandler = require('./middleware/express');
const HttpErrors = require('./models/HttpErrors');


module.exports = {
    errorGenerator,
    expressHandler,
    ...HttpErrors,
};