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
app.get('/dashboard', authMiddleware, tokenMiddleware, dashboardController)
app.get('/sugerencias/compra', authMiddleware, tokenMiddleware, sugerenciasCompraController)
app.get('/sugerencias/venta', authMiddleware, tokenMiddleware, sugerenciasVentaController)
app.get('/sugerencias/divisas', authMiddleware, tokenMiddleware, sugerenciasDivisasController)
app.get('/notificaciones', authMiddleware, tokenMiddleware, notificacionesController)
app.get('/accesos', authMiddleware, tokenMiddleware, accesosController)
app.get('/autorizaciones', authMiddleware, tokenMiddleware, autorizacionesController)

app.get('/movimientos', authMiddleware, tokenMiddleware, movimientosController)
app.get('/sugerencias/busqueda', authMiddleware, tokenMiddleware, busquedaController)
app.get('/transaccion', authMiddleware, tokenMiddleware, transaccionController)
app.get('/sugerencias/primeraVez', authMiddleware, tokenMiddleware, primeraVezSugerenciaController)
app.get('/cuentas', authMiddleware, tokenMiddleware, cuentasController)



app.get('/backend/validarCredenciales', redirectIfAuthenticatedMiddleware, validarCredencialesController)

app.post('/usuario/iniciarSesion', redirectIfAuthenticatedMiddleware, loginController)
app.post('/backend/iniciarSesion', redirectIfAuthenticatedMiddleware, loginUserController)


app.post('/usuario/cerrarSesion', redirectIfAuthenticatedMiddleware, logoutController)
app.get('/user/credencialOlvidada', redirectIfAuthenticatedMiddleware, credencialOlvidadaController)

//Error
app.use((req, res) => res.render('notfound'));