const bcrypt = require('bcrypt');
//const { response } = require('express');
const User = require('../models/User')

module.exports = (req, res) => {
    const {
        user
    } = req.body;

    if (!user||user==null){
        res.redirect('/')
    }

    console.log(user)

    const body = {
        username: user
    };

    fetch('http://34.227.231.244:3000/validate', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            if(json){
                User.fullName=json.fullName;
                User.idStatus=json.idStatus;
                User.roleName=json.roleName;
                User.isBasic=json.isBasic;
                User.phrase=json.phrase;
                User.imagePath=json.imagePath;
                res.redirect('/usuario/iniciarSesion')
            }else{
                res.redirect('/')
            }
        });
}