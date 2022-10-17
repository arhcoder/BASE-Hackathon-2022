// Librerías necesarias...
const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
//joto
// Creating an express library object named "app"...
var app = express();
app.use(bodyparser.json());
// Se obtiene la contraseña de la base de datos del arhivo .env...
const bd_password = process.env["BD_PASSWORD"];

// Se conecta a la base de datos del hackathon...
var connection = mysql.createConnection(
{
    host: "localhost",
    user: "root",
    port: 3306,
    password: bd_password,
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
app.listen(3000, () => console.log("Aplicación corriendo en http://localhost:3000/ :D"));


// [GET] Obtiene todos los ID's de los clientes existentes...
app.get("/getClients", (request, response) =>
{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", true);
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
});


// [GET] Obtiene todos los ID's de facturas de un cliente "x", con la antigüedad de "y" días...
app.get("/getInvoices/:clientID/:days", (request, response) =>
{

    var sql = "SELECT uuid FROM Invoice WHERE rfcUserCompany = ? AND expeditionDate BETWEEN DATE_SUB(NOW(), INTERVAL ? DAY) AND NOW();";
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
});


// [GET] Obtiene todos los productos de una factura según su ID...
app.get("/getPurchases/:invoiceID", (request, response) =>
{
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
});