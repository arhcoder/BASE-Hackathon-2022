const express=require('express');
const app=express();
const mysql=require('mysql2');
const jwt=require('jsonwebtoken');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const conexion=mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: process.env.CONTRADB,
    database: 'hackathon_db',
    port: 3306
});
conexion.connect((error) =>
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


app.listen(4000,()=>{
    console.log('Corriendo en http://localhost:4000/');
})

app.get('/api',validateToken,(req,res)=>{
    conexion.query('SELECT * FROM usercompany ', (error, results)=>{
        if(error){
            throw error;
        }
        res.send(results);
    })
})

app.get('/', (req,res)=>{
    res.send('<html>\n' +
        '\t<head>\n' +
        '\t\t<title>Login</title>\n' +
        '\t</head>\n' +
        '\t<body>\n' +
        '\t\t<form method=\'POST\' action="/auth">\n' +
        '\t\t\tNombre de usuario: <input type="text" name="text"><br/>\n' +
        '\t\t\tContrasenia: <input type="password" name="pasword"><br/>\n' +
        '\t\t\t<input type="submit" value="Iniciar sesion"><br/>\n' +
        '\t\t\t\n' +
        '\t\t</form>\n' +
        '\t</body>\n' +
        '</html>')
});

app.post('/auth',(req,res)=>{
    const {username, password}=req.body;
    const user={username:username};

    const accesToken=generateAccesToken(user);
    res.header('authoriation', accesToken).json({
        message: 'Usuario autenticado',
        token: accesToken
    })

});

function validateToken(req,res,next){
    const accesToken=req.headers['authorization']||req.query.accesToken;


    jwt.verify(accesToken, process.env.SECRET,(err, user)=>{
        if(err){
            res.send('Acces denied, token expired or incorrect')
        }else{

            next();
        }
    })

}
function generateAccesToken(user){
    return jwt.sign(user, process.env.SECRET, {expiresIn: '20m'});
}