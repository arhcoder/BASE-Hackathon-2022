var USER = "";
var API_KEY = "L0hCHKgnm8ajjIEYXuHmO9iWanPESgiI7PQlcZ1L";
var JWTOKEN;
const axios = require('axios');
let urlLogin = "https://25hi3sjce7.execute-api.us-east-1.amazonaws.com/marketplace/v1/Login/ValidateAccount";
let dataLogin = {
     "userName": USER,
};
let headersLogin = {
  "x-api-key": API_KEY,
  "Content-Type": "application/json"
};
var responseLogIn = axios.post(urlLogin,dataLogin,{headers: headersLogin}).then(response =>{
   JWTOKEN = responseLogIn.data.jwt;
    console.log(response.data);
});

  
