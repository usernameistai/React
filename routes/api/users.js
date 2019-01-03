const express  = require('express');
const router   = express.Router();
const gravatar = require('gravatar');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const keys     = require('../../config/keys');

// Load User model
const User     = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' }));
// res.json like res.send, serves json auto serves status 200 = okay

// @route   GET api/users/register
// @desc    register user
// @access  Public
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.status(400).json({email: 'Email already exists'});
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: '200', // size
                r: 'pg', // rating
                d: 'mm' // default
            }); // from gravatar node github page

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user)) //promise
                        .catch(err => console.log(err));
                })
            })
        }
    })
});

// @route   GET api/users/login
// @desc    Login User / returning JWT token json web token
// @access  Public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Fnd user by email
    User.findOne({email})
        .then(user => {
            // Check for user
            if(!user){
                return res.status(404).json({ email: 'User not found' });
            }

            // Check Password           from db
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        // User matched
                        const payload = { id: user.id, name: user.name, avatar: user.avatar } // create jwt payload

                        // Sign token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                        });
                    } else {
                        return res.status(400).json({ password: 'Password incorrect' });
                    }
                })
        });
})

module.exports = router;