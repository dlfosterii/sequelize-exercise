const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

//GET users listing
router.get('/', function (req, res) {
    res.render('users.ejs')
});

router.post('/', (req, res) => {
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





module.exports = router;