//FALTA GET DE PARAMETROS DEK USUARIO QUE ESTÁ INICIANDO SESIÓN
var USER = "";
var PASS = "";
var TOKEN = 0;
var API_KEY = "";
var JWTOKEN;
const axios = require('axios');
let urlLogin = "https://25hi3sjce7.execute-api.us-east-1.amazonaws.com/marketplace/v1/Login/SignIn";
let dataLogin = {
     "account": USER,
     "password": PASS,
     "token": TOKEN
};
let headersLogin = {
  "x-api-key": API_KEY,
  "Content-Type": "application/json"
};

var responseLogIn = axios.post(urlLogin,dataLogin,{headers: headersLogin}).then(response =>{
   JWTOKEN = responseLogIn.data.jwt;
    console.log(response.data);
});

  
