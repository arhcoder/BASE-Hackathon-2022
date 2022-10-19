var USER = "";
var PASS = "";
var TOKEN = 0;
var API_KEY = "L0hCHKgnm8ajjIEYXuHmO9iWanPESgiI7PQlcZ1L";
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
    console.log(response.data);
});

  
