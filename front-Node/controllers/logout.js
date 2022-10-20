    const User = require('../models/User')
    const axios = require('axios');

    module.exports = async (req, res) => {

        if (req.session.idClientUnique) {
            let url = "http://34.227.231.244:80/logout";

            let datos = {
                'account': User.userName,
                'password': User.password,
                'token': User.token,
                'jwt': User.jwt,
            }
            console.log(datos)

            try {
                var respuesta = axios.post(url, datos).then(response => {});
            } catch {

            }
        }

        req.session.destroy(() => {
            res.render('logout')
        })
    };