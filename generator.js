const BaseError = require('./BaseError');

module.exports = (classAtts, ParentError = BaseError) => {
    if (!(ParentError.prototype instanceof BaseError)) throw new Error('Parent does not extend from BaseError');
    if (!classAtts.name === undefined) throw new Error('Class attributes must include a name for the eror i.e. (NotFoundError)')
    return class extends ParentError {
        constructor(message, initArgs) {
            super(message);
            if (typeof(classAtts) !== 'object') throw new Error('Class attributes are not an object for class');
            Object.assign(this, classAtts);
            if (initArgs !== undefined && !typeof(initArgs) !== 'object') throw new Error('Class attributes passed is not an object.');
            Object.assign(this, initArgs);
        }
    };
};
