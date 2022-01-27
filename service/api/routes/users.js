const express = require('express');
const router = express.Router();
const knex = require('../knex.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* SignIn */
router.get('/signin', function(req, res, next) {
    res.render("users/signin");    

});

router.post("/signin", async (req, res) => {

    const { username, password } = req.body;

 
    knex.from('user')
    .select('*')
    .where({
        'username': username
    }).first()
    .then((result) => {
        if (!result) { res.status(400).json({ error: "Invalid username or password", status: "error" }); return; }
        compare(password, result.password)
        res.status(200).json({ status: "ok" });
        console.log(result)
    }).catch((err) => { console.log( err); throw err })

    async function compare(password, hashed_password){
        console.log(hashed_password)
        if (!await bcrypt.compare(password, hashed_password)) { res.status(400).json({ error: "Invalid username or password", status: "error" }); return; }
            
    }
/*

    

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        JWT_SECRET
    );

    res.status(200).json({ data: token, status: "ok" });
*/
});

router.get('/signup', function(req, res, next) {
    res.render("users/signup");   

});

router.post("/signup", (req, res) => {
    const { username, password: plainTextPassword } = req.body;

    if (!username || typeof username !== "string") { res.status(400).json({ error: "Invalid username", status: "error" }); return; }

    if (!plainTextPassword || typeof plainTextPassword !== "string") { res.status(400).json({ error: "Invalid password", status: "error" }); return; }

    // On peut aussi faire des restrictions demandant une majuscule
    if (plainTextPassword.length <= 5) { res.status(400).json({ error: "Password too small. Should be atleast 6 characters", status: "error" }); return; }

    async function register(username,plainTextPassword) {
        console.log(plainTextPassword);
        const hashed_pass = await bcrypt.hash(plainTextPassword, 10);
        console.log('hash', hashed_pass);

        knex('user').insert({
            'username': username,
            'password': hashed_pass,
            'role': false
        }).then( function (result) {
            res.status(200).json({ status: "ok" });
            console.log("User created ");
        }).catch(function (error){
            if(error.code == "ER_DUP_ENTRY"){
                res.status(400).json({ error: "Username already in use", status: "error" });
            }else{
                throw error
            }
        })
    };
    register(username,plainTextPassword)
});
/*


router.get('/user/:id', function(req, res, next) {
    
    knex.from('description')
        .select('*')
        .where({
            'id_catalogue': req.params.id
          })
    .then((rows) => {
        res.render("qrcode/qrcodes", { rows })
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
       // knex.destroy();
    });
    
});
*/


module.exports = router;