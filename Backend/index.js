// Included libraries...
const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();

// Creating an express library object named "app"...
var app = express();
app.use(bodyparser.json());
const bd_password = process.env["BD_PASSWORD"];
// Creating the connection to the database "crud", on the localhost...
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


// Put the app listenting on the port 3000...
app.listen(3000, () => console.log("Express server running on port 3000! :D"));



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