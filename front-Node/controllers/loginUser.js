const User = require('../models/User')
const axios = require('axios');

module.exports = async (req, res) => {
    let request = req.body
    console.log(request)
    console.log(request.token)
    let url = "http://34.227.231.244:80/login";

    let datos = {
        'account': User.userName,
        'password': request.password,
        'token': request.token,
    }
    console.log(datos)


    var respuesta = axios.post(url, datos).then(response => {

        if(response.data.permission){
            console.log("ingresado")
            User.jwt=response.data.jwt
            User.name=response.data.name
            User.firstLastName=response.data.firstLastName
            User.permission=response.data.permission
            User.secondLastName=response.data.secondLastName
            User.email=response.data.email
            console.log(response.data.jwt)
            User.companyName=response.data.companyName
            User.rfc=response.data.rfc
            User.idClientUnique=response.data.idClientUnique
            User.idGroup=response.data.idGroup
            User.jwtExpiredTime=response.data.jwtExpiredTime
            User.jwtRefresh=response.data.jwtRefresh
            User.token=request.token
            res.redirect('/dashboard')
        }else{
            req.session.error = 'Error de Credenciales'
            res.redirect('/usuario/iniciarSesion')
            console.log("no ingresado")
        }
        

    });


};