
//const { response } = require('express');
const User = require('../models/User')


module.exports = (req, res) => 
{
    
    const {
        user
    } = req.body;

    if (!user || user == null) {
        res.redirect('/')
    }

    console.log(user)

    const body = {
        username: user
    };


    fetch('http://34.227.231.244:80/validate', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}