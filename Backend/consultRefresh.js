//FALTA GET DE PARAMETROS DEK USUARIO QUE ESTÁ INICIANDO SESIÓN
var USER = "";
var PASS = "";
var TOKEN = 0;
var API_KEY = "";
var JWTOKEN=""
const axios = require('axios');
let urlLogin = "https://25hi3sjce7.execute-api.us-east-1.amazonaws.com/marketplace/v1/Recipients/GetRecipientsAuthorized";
let dataLogin = {
    "Authorization":"Bearer "+JWTOKEN,
    "StartDate": "2020-02-20" ,
    "EndDate":"2020-02-20",
    "Account":"145580241470001019"
}
let headersLogin = {
  "x-api-key": API_KEY,
};

var responseLogIn = axios.get(urlLogin,dataLogin,{headers: headersLogin}).then(response =>{
});
