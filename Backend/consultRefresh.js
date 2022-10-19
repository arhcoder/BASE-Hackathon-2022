var API_KEY = "L0hCHKgnm8ajjIEYXuHmO9iWanPESgiI7PQlcZ1L";
var JWTOKEN="";
const axios = require('axios');
let urlLogin = "https://25hi3sjce7.execute-api.us-east-1.amazonaws.com/marketplace/v1/Accounts/GetAccounts";

let headersrefresh = {
  "x-api-key": API_KEY,
  "Authorization":"Bearer "+JWTOKEN
};

var responseLogIn = axios.get(urlLogin,{headers: headersrefresh}).then(response =>{

});
