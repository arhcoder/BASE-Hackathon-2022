const express = require('express')

const app = new express()

//
const authMiddleware = require('./middleware/authMiddleware');
//
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

const tokenMiddleware = require('./middleware/tokenMiddleware')

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
    saveUninitialized: false,
    cookie:{
        expires: 240000
    }
}))

app.use("*", (req, res, next) => {
    loggedIn = req.session.idClientUnique;
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

const validarCredencialesController = require('./controllers/validarCredencialesController');
const { Cookie } = require('express-session');
/*
RUTAS
*/

app.get('/', indexController)
app.get('/dashboard',authMiddleware, dashboardController)
app.get('/sugerencias/compra', sugerenciasCompraController)
app.get('/sugerencias/venta', authMiddleware,  sugerenciasVentaController)
app.get('/sugerencias/divisas', authMiddleware,  sugerenciasDivisasController)
app.get('/notificaciones', authMiddleware,  notificacionesController)
app.get('/accesos', authMiddleware,  accesosController)
app.get('/autorizaciones', authMiddleware,  autorizacionesController)

app.get('/movimientos', authMiddleware,  movimientosController)
app.get('/sugerencias/busqueda', authMiddleware,  busquedaController)
app.get('/transaccion', authMiddleware,  transaccionController)
app.get('/sugerencias/primeraVez', authMiddleware,  primeraVezSugerenciaController)
app.get('/cuentas', authMiddleware,  cuentasController)



app.get('/backend/validarCredenciales', redirectIfAuthenticatedMiddleware, validarCredencialesController)

app.post('/usuario/iniciarSesion', redirectIfAuthenticatedMiddleware, loginController)
app.post('/backend/iniciarSesion', redirectIfAuthenticatedMiddleware, loginUserController)


app.post('/usuario/cerrarSesion', redirectIfAuthenticatedMiddleware, logoutController)
app.get('/user/credencialOlvidada', redirectIfAuthenticatedMiddleware, credencialOlvidadaController)

//Error
app.use((req, res) => res.render('notfound'));