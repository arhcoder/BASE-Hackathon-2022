const express = require('express')

const app = new express()

//
const authMiddleware = require('./middleware/authMiddleware');
//
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

global.loggedIn = null;

const ejs = require('ejs')

const expressSession = require('express-session');

const bodyParser = require('body-parser')

const flash = require('connect-flash');



global.loggedIn = null;

app.set('view engine', 'ejs')


app.use(express.static('public'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(flash());

app.use(expressSession({
    secret: 'gatoapestoso78454d5f4s65f4df5d4f5sd6f4d5fds6f4sfdsfe78sf6',
    name: 'session',
    store: false,
    proxy: true,
    resave: true,
    saveUninitialized: true
}))

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});


app.listen(process.env.PORT || 8080, function () {
    console.log('App listening...');
});

/*
CONTROLADORES
*/

let Usuario = require('./models/User')
Usuario.companyName='bimbo'


const indexController = require('./controllers/index')
const sugerenciasVentaController = require('./controllers/sugerenciasVenta')
const sugerenciasCompraController = require('./controllers/sugerenciasCompra')
const sugerenciasDivisasController = require('./controllers/sugerenciasDivisas')
const notificacionesController = require('./controllers/sugerenciasDivisas')
const accesosController = require('./controllers/accesosController')
const autorizacionesController = require('./controllers/autorizacionesController')
const dashboardController = require('./controllers/dashboardController')

const movimientosController = require('./controllers/movimientosController')
const busquedaController = require('./controllers/busquedaController')
const transaccionController = require('./controllers/transaccionController')
const primeraVezSugerenciaController = require('./controllers/primeraVezSugerenciaController')
const cuentasController = require('./controllers/cuentasController')


const loginController = require('./controllers/loginController')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')
const credencialOlvidadaController = require('./controllers/credencialOlvidadaController')

const validarCredencialesController = require('./controllers/validarCredencialesController')
/*
RUTAS
*/

app.get('/', indexController)
app.get('/dashboard', dashboardController)
app.get('/sugerencias/compra', sugerenciasCompraController)
app.get('/sugerencias/venta', sugerenciasVentaController)
app.get('/sugerencias/divisas', sugerenciasDivisasController)
app.get('/notificaciones', notificacionesController)
app.get('/accesos', accesosController)
app.get('/autorizaciones', autorizacionesController)

app.get('/movimientos', movimientosController)
app.get('/sugerencias/busqueda', busquedaController)
app.get('/transaccion', transaccionController)
app.get('/sugerencias/primeraVez', primeraVezSugerenciaController)
app.get('/cuentas', cuentasController)



app.get('/backend/validarCredenciales', validarCredencialesController)

app.post('/usuario/iniciarSesion', loginController)
app.post('/backend/iniciarSesion', loginUserController)


app.get('/usuario/cerrarSesion', logoutController)
app.get('/user/credencialOlvidada', credencialOlvidadaController)

//Error
app.use((req, res) => res.render('notfound'));