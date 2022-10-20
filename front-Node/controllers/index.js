
const User = require('../models/User')

module.exports = (req, res) =>{
    req.session.error=''
    res.render('index')
    }