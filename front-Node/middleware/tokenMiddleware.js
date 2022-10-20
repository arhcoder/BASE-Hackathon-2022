const User = require('../models/User')
const axios = require('axios');

module.exports = (req, res, next) => {
    let url = "http://34.227.231.244:80/keepToken";
    let datos = {
        'jwt': User.jwt
    }
    var respuesta = axios.post(url, datos).then(response => {});
    next();
}