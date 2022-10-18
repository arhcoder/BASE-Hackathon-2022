    var USER = "";
    var PASS = "";
    var TOKEN = 0;
    var API_KEY = "";
    var JWTOKEN;
    const axios = require('axios');
    let urlLogin = "https://25hi3sjce7.execute-api.us-east-1.amazonaws.com/marketplace/v1/Login/SignOut";
    let dataLogin = {
        "account": USER,
        "password": PASS,
        "token": TOKEN
    };
    let headersLogin = {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
    "Authorization": "Bearer "+JWTOKEN
    };

    var responseLogIn = axios.put(urlLogin,dataLogin,{headers: headersLogin}).then(response =>{
        console.log(response.data);
    });

    