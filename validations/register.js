const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegistrationInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    // data.password2 = !isEmpty(data.password2) ? data.password2 : '';
    data.first_name = !isEmpty(data.first_name) ? data.first_name : '';
    data.last_name = !isEmpty(data.last_name) ? data.last_name : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required"
    }

    if (Validator.isEmpty(data.first_name)) {
        errors.first_name = "Please, type your First Name"
    }
    if (Validator.isEmpty(data.last_name)) {
        errors.last_name = "Please, type your Last Name"
    }

    if (!Validator.isLength(data.password, {min: 6, max:30})) {
        errors.password = "Password must have 6 or more characters"
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Please, type a password"
    }
    // if (Validator.isEmpty(data.password2)) {
    //     errors.password2 = "Please, confirm your password"
    // }

    // if (!Validator.equals(data.password, data.password2)){
    //     errors.password2 = 'Password must match'
    // }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
};