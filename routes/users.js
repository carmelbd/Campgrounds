const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/register', (req,res) => {
    res.render('users/register')
})

router.post('/register', async (req,res) => {
    res.send(req.body)
})


// router.post('register/', catchAsync (async (req,res) => {
//     try{
//     const {email, username , password }= req.body;
//     const user = new User({ email, username});
//     const registeredUser = await User.register(user, password);
//     console.log(registeredUser);
//     // req.flash('sucess', 'Welcome to Campgrounds!')
//     res.redirect('/campgrounds');
//     } catch(e) {
//         req.flash('error')
//         res.redirect('register');
//     }
// }))


router.post('register/',async (req,res) => {
    
    const {email, username , password }= req.body;
    const user = new User({ email, username});
    const registeredUser = await User.register(user, password);
    console.log(registeredUser);
    req.flash('sucess', 'Welcome to Campgrounds!')
    res.redirect('/campgrounds');
})

module.exports = router;