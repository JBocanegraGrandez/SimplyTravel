const Validator = require('validator');
const isEmpty =  require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is not valid"
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required"
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "password is required"
    }
    console.log(errors)
    console.log(isEmpty(errors))
    return {
        errors,
        isValid: isEmpty(errors)
    }
}