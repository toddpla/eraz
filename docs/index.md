# Eraz
__An error handler for Node code__

## Usage
Throw an error at some point during the request/response cycle to be handled by middleware to return the required Http response status code and attributes as JSON.


#### Example 
```js
const { BadRequestError } = require('eraz');

function doSomething(data) {
    if (data === undefined) throw new BadRequestError('No data provided.');
    // ...else continue computation
};
```
The Http response will include a status code of `400` along with the error message `No data provided.`

### Extra attributes
An error can be instantiated with additional attributes passed in.
#### Example
```js
const { BadRequestError } = require('eraz');

function doSomething(data) {
    if (data.requiredAttribute === undefined) throw new BadRequestError('Required attribute is undefined.', data);
    // ...else continue computation
};
```
The Http response will include a status code of `400` along with the error message `Required attribute is undefined.` and this time the object is being passed in as a parameter which will be included in the Http response as JSON.

## Http Errors
| Name | Code |
|---|---|
|BadRequestError| 400 |
|UnauthorizedError|401|
|ForbiddenError|403|
|NotFoundError|404|
|NotAcceptableError|406|
|ProxyAuthenticationRequiredError|407|
|RequestTimeoutError|408|
|ConflictError|409|
|GoneError|410|
|LengthRequiredError|411|
|PreconditionFailedError|412|
|RequestEntityTooLargeError|413|
|RequestURITooLongError|414|

## Middleware

### Express
```js
const express = require('express');
const { expressHandler } = require('eraz');

const app = express();

app.use(expressHandler);
```

## Custom Errors
Custom errors can be created using the generator with `name` being the only required attribute.
```js
generator(attributes [, ParentError]);
```

#### Example
```js
const { generator } = require('eraz');

const CustomError = generator({
    name: 'CustomError',
    foo: 'bar'
});
```
#### Example
```js
const { generator, NotFoundError } = require('eraz');

const CustomError = generator({
    name: 'CustomError',
    foo: 'bar'
}, NotFoundError);

if (false) throw new CustomError('Handled as a 400 but with the foo attribute included.');
```

## Contributtions
PR's welcome on [github](https://github.com/toddpla/eraz/pulls).