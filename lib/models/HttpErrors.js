const ErazError = require('./ErazError');
const generator = require('../utils/generator');

class HttpError extends ErazError {};

const errorTypes = [
    {
        name: 'BadRequestError',
        code: 400,
    },
    {
        name: 'UnauthorizedError',
        code: 401,
    },
    {
        name: 'ForbiddenError',
        code: 403,
    },
    {
        name: 'NotFoundError',
        code: 404,
    },
    {
        name: 'NotAcceptableError',
        code: 406,
    },
    {
        name: 'ProxyAuthenticationRequiredError',
        code: 407,
    },
    {
        name: 'RequestTimeoutError',
        code: 408,
    },
    {
        name: 'ConflictError',
        code: 409,
    },
    {
        name: 'GoneError',
        code: 410,
    },
    {
        name: 'LengthRequiredError',
        code: 411,
    },
    {
        name: 'PreconditionFailedError',
        code: 412,
    },
    {
        name: 'RequestEntityTooLargeError',
        code: 413,
    },
    {
        name: 'RequestURITooLongError',
        code: 414,
    }
];

module.exports = (() => {
    const errors = {};
    errorTypes.forEach(error => {
        errors[error.name] = generator(error);
    });
    return {
        ...errors,
        HttpError,
    };
})();