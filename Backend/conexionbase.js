const mysql = require('mysql2');
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
require('dotenv').config();
app.use(bodyparser.json());
const { Client } = require('ssh2');
const {config} = require("dotenv");

const sshClient = new Client();
const dbServer = {
    host: process.env.HOSTNUESTRO,
    port: '3306',
    user: process.env.USERNUESTRO,
    password: process.env.CONTRA,
    database: 'hackathon_db'
}
//ssh
const tunnelConfig = {
    host: process.env.HOSTBANCO,
    port: 1022,
    username: process.env.USERBANCO,
    privateKey:
        require('fs').readFileSync(process.env.RUTA)
}
const forwardConfig = {
    srcHost: process.env.HOSTNUESTRO,
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};
const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
            forwardConfig.srcHost,
            forwardConfig.srcPort,
            forwardConfig.dstHost,
            forwardConfig.dstPort,
            (err, stream) => {
                if (err) reject(err);
                const updatedDbServer = {
                    ...dbServer,
                    stream
                };
                const connection =  mysql.createConnection(updatedDbServer);
                connection.connect((error) => {
                    if (error) {
                        reject(error);
                    }else {
                        console.log('hola')
                    }
                    resolve(connection);
                });
                connection.query('SELECT * FROM UserCompany',(err, rows,fields)=>{
                    if(!err){
                        console.log(rows);
                    }else{
                        console.log(err);
                    }

                })

            });
    }).connect(tunnelConfig);
});



