const User = require('../models/User')
const axios = require('axios');

module.exports = (req, res, next) => {
    if (req.session.idClientUnique) {
        let url = "http://34.227.231.244:80/keepToken";
        let datos = {
            'jwt': User.jwt
        }
        try {
            var respuesta = axios.post(url, datos).then(response => {});
            next();
        } catch {
            console.log('error renovando token')
        }
    }
}