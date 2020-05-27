const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

//GET users listing
router.get('/', function (req, res) {
    res.render('users.ejs')
});

//POST users 
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    //const user_name = req.body.username;
    //const email = req.body.email;
    //const password = req.body password;

    bcrypt.hash(password, 10, (err, hash) => {
        db.User.create({
            user_name: username,
            email,
            password: hash,
        }).then((result) => {
            res.redirect('/users');
        });
    });
});

//POST login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.User.findOne({where: {user_name: username}})
    .then(User => {
        bcrypt.compare(password, User.password, (err, match) => {
            if(match) {
                res.send('Logged in!')
            }
            else {
                res.send('Incorrect password!')
            }
        })
    })
    .catch(() => {
        res.send('username not found')
    })
});



module.exports = router;