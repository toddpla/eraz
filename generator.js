const BaseError = require('./BaseError');

module.exports = (classAttributes, ParentError = BaseError) => {
    if (!(ParentError.prototype instanceof BaseError)) throw new Error('Parent does not extend from BaseError');
    return class extends ParentError {
        constructor(message, instanceAttributes) {
            super(message);
            Object.assign(this, classAttributes);
            Object.assign(this, instanceAttributes);
        }
    };
};
