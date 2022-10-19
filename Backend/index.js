// Librerías necesarias...
const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const { spawn } = require("child_process");
const axios = require('axios');
require("dotenv").config();

// Creating an express library object named "app"...
var app = express();
app.use(bodyparser.json());

// Se obtiene la contraseña de la base de datos del arhivo .env...
const API_KEY = process.env.API_KEY;
const BD_PASSWORD = process.env.BD_PASSWORD;

// GLOBAL JAVA WEB TOKENS:
var JWT = ""
var JWT_REFRESH = ""

// Se conecta a la base de datos local del hackathon...
var connection = mysql.createConnection(
{
    host: "localhost",
    user: "root",
    port: 3306,
    password: BD_PASSWORD,
    database: "hackathon_db",
    multipleStatements: true
});
connection.connect((error) =>
{
    if (!error)
    {
        console.log("Conectado correctamente con la base de datos :D");
    }
    else
    {
        console.log("No se pudo conectar con la base de datos D:\n"+
        JSON.stringify(error, undefined, 2));
    }
});


// Abre el puerto 3000 para escuchar peticiones...
app.listen(3000, () => console.log("Aplicación corriendo en https://34.227.231.244:3000/ :D"));


// [GET] Obtiene todos los ID's de los clientes existentes...
app.get("/getClients", (request, response) =>
{
    // if (request.ip == "127.0.0.1")
    // {
        connection.query("SELECT rfcUserCompany FROM UserCompany", (error, rows, fields) =>
        {
            if (!error)
            {
                // console.log(rows);
                response.send(rows);
            }
            else
            {
                console.log(error);
                response.send(error);
            }
        });
    // }
    // else response.send("Nop :3");
});


// [GET] Obtiene todos los ID's de facturas de un cliente "x", con la antigüedad de "y" días...
app.get("/getInvoices/:clientID/:days", (request, response) =>
{
    // if (request.ip == "127.0.0.1")
    // {
        var sql = "SELECT uuid, rfcProvider FROM Invoice WHERE rfcUserCompany = ? AND expeditionDate BETWEEN DATE_SUB(NOW(), INTERVAL ? DAY) AND NOW();";
        connection.query(sql, [request.params.clientID, request.params.days],
        (error, rows, fields) =>
        {
            if (!error)
            {
                // console.log(rows);
                response.send(rows);
            }
            else
            {
                console.log(error);
                response.send(error);
            }
        });
    // }
    // else response.send("Nop :3");
});

// [GET] Obtiene todos los productos de una factura según su ID...
app.get("/getPurchases/:invoiceID", (request, response) =>
{
    // if (request.ip == "127.0.0.1")
    // {
        var sql = "SELECT * FROM Product WHERE Invoice_uuid = ?";
        connection.query(sql, [request.params.invoiceID],
        (error, rows, fields) =>
        {
            if (!error)
            {
                // console.log(rows);
                response.send(rows);
            }
            else
            {
                console.log(error);
                response.send(error);
            }
        });
    // }
    // else response.send("Nop :3");
});

// [GET] Obtiene las sugerencias del cliente que tiene sesión activa:
app.get("/suggestions/:idClientUnique", (request, response) =>
{
    // Primero verifica si el token de la sesión coincide con el generado:
    // if (token)
    // {
        // Ejecuta el script de Python que obtiene las mejores sugerencias del cliente actual:
        // const suggestorCommand = "python ..\\Algorithms\\intelligent-suggestor.py \""+request.params.idClientUnique+"\"";
        const intelligentSuggestor = spawn("python", ["../Algorithms/intelligent-suggestor.py", ""+request.params.idClientUnique]);
        intelligentSuggestor.stdout.on("data", function(data)
        {
            suggestions = data.toString();
            suggestions = suggestions.replace(/"/g,"");
            suggestions = suggestions.replace(/'/g,"\"");
            suggestions = JSON.parse(suggestions);
        });

        intelligentSuggestor.on("close", (code) =>
        {
            response.send(suggestions);
        });
    // }
});


// MANEJO DE SESIONES //
app.post("/validate", (request, response) =>
{
    // Recibe el dato USERNAME:
    //BODY del request:
    //{
    //  "username": "El nombre de usuario que se envia"
    //}
    let urlLogin = "https://25hi3sjce7.execute-api.us-east-1.amazonaws.com/marketplace/v1/Login/ValidateAccount";
    let dataLogin =
    {
        "userName": request.body.username
    };
    let headersLogin =
    {
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
    };

    var responseLogIn = axios.post(urlLogin,dataLogin, {headers: headersLogin}).then(myResponse =>
    {
        /* var respuestaValidate =
        {
            "fullName": myResponse.data.fullName,
            "idStatus": myResponse.data.idStatus,
            "roleName": myResponse.data.roleName,
            "isBasic": myResponse.data.isBasic,
            "phrase": myResponse.data.phrase,
            "imagePath": myResponse.data.imagePath
        };
        response.send(respuestaValidate);*/
        response.send(myResponse.data)
    });
});

// [POST] Recibe datos de login y retorna respuesta de inicio de sesión
// Para primero solicitar el TOKEN de acceso...
app.post("/login", (request, response) =>
{
    // Datos de login que se mandan desde el frontend...
    // BODY del request:
    // {
    //      "account": "Lo que se capturó en la barra de cuenta",
    //      "password": "Lo que se capturó en la barra de contraseña",
    //      "token": "Lo que se capturó en la barra de token"
    // }

    // let loginData = request.body;
    // console.log(loginData.account);
    // console.log(loginData.password);
    // console.log(loginData.token);

    // Hace la petición de inicio de sesión a la API de BASE...
    // Se mandan los datos que se trajeron del frontend...
    //FALTA GET DE PARAMETROS DEK USUARIO QUE ESTÁ INICIANDO SESIÓN

    let urlLogin = "https://25hi3sjce7.execute-api.us-east-1.amazonaws.com/marketplace/v1/Login/SignIn";
    let dataLogin =
    {
        "account": request.body.account,
        "password": request.body.password,
        "token": request.body.token
    };
    let headersLogin =
    {
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
    };

    var responseLogIn = axios.post(urlLogin, dataLogin, {headers: headersLogin}).then(xresponse =>
    {
        try
        {
            // Se obtiene el JWTOKEN:
            JWTOKEN = responseLogIn.data.jwt;
            // console.log(response.data);

            // Si el inicio de sesión retorna un OK...
            if (JWTOKEN)
            {
                // Se hace la petición de validar cuenta para obtener los
                // datos de seguridad como la frase e imágen especiales...
                fullName = response.data.fullName;
                roleName = response.data.roleName;
                phrase = response.data.phrase;
                imagePath = response.data.imagePath;

                // Responde con:
                let ok =
                {
                    "permission": true,
                    "name": xresponse.content.name,
                    "userName": xresponse.content.userName,
                    "firstLastName": xresponse.content.firstLastName,
                    "secondLastName": xresponse.content.secondLastName,
                    "email": xresponse.content.email,
                    "companyName": xresponse.content.companyName,
                    "rfc": xresponse.content.rfc,
                    "idClientUnique": 0,
                    "idGroup": 0,
                    "jwt": xresponse.content.jwt,
                    "jwtExpiredTime": 0,
                    "jwtRefresh": xresponse.content.jwtRefresh,
                    "specialData":
                    {
                        "fullName": fullName,
                        "roleName": roleName,
                        "phrase": phrase,
                        "imagePath": imagePath
                    }
                };

                // Guarda los TOKENS para futuros usos:
                JWT = ok.jwt;
                JWT_REFRESH = ok.jwtRefresh;

                response.send(ok);
            }
        }
        catch (error)
        {
            console.log(error);
            let notOk =
            {
                "permission": false
            };
            response.send(notOk);
        }
    });
    // response.send("Inicio de sesión solicitado :3");
});