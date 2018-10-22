const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jsonwebtoken = require('jsonwebtoken');
const key = require('../../config/keys');
const passport = require('passport');
const validateRegistrationInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');



router.post('/register', (req, res) => {
    const {errors, isValid} = validateRegistrationInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({email: req.body.email}).then(user => {
        if (user) {
        //   errors.email = 'Email is already taken';
          return res.status(400).json({email: "Email is already taken"})
        } else {
            const newUser = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                date: req.body.date
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => {
                        const payload = {id: user.id, email: user.email}
                        res.json({
                            success: true,
                            user: payload
                        })
                    })
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid} = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email})
    .then(user => {
        if (!user) {
            // errors.email = "Invalid email credential"
            return res.status(400).json({email: 'Invalid email'})
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {id: user.id, email: user.email}
                jsonwebtoken.sign(payload, key.secretOrKey, {expiresIn: 3600}, (err, token) => {
                    res.json({
                        success: true,
                        payload,
                        token: 'Bearer ' + token
                    })
                })
            } else {
                // errors.password = "incorrect password"
                return res.status(400).json({password: 'Incorrect password'})
            }
        })
    })
})

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        email: req.user.email,
        first_name: req.user.first_name,
        last_name: req.user.last_name
    });
})

router.get("/test", (req, res) => res.json({msg: "This is the users OG-route"}));

module.exports = router;