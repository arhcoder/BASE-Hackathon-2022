const User = require('../models/User')
const axios = require('axios');

module.exports = async (req, res) => {
    let userName = req.body
    console.log(userName)
    console.log(userName.user)
    let url = "http://34.227.231.244:80/validate";

    User.userName = userName.user

    let datos = {
        'username': userName.user
    }
    console.log(datos)

    try {
        var respuesta = axios.post(url, datos).then(response => {

            let frase = response.data.phrase;
            let image = response.data.imagePath;
            let fullName = response.data.fullName;

            console.log(frase)
            console.log(image)
            User.phrase = frase
            User.imagePath = image
            User.fullName = fullName

            console.log(User.phrase)
            let error = req.session.error
            res.render('login', {
                frase,
                image,
                fullName,
                error
            })

        });
    } catch {

    }



};