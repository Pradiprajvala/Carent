const express = require('express')
const router = express.Router()
require('../db/connection')
const Authenticate = require('../middlewere/authenticate') 

router.get('/getCurrentUser', Authenticate,(req,res) => {
    
    const {_id, name, email, myCars, myFavouriteCars,requestsToMe, requestsByMe, image} = req.user
    // console.log(req.user);
    res.status(201).json({user: {
        _id,
        name,
        image,
        email,
        myCars,
        myFavouriteCars,
        requestsToMe,
        requestsByMe
    }})
})

module.exports = router