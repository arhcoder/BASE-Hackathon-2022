const User = require('../models/User')

module.exports = (req, res) => {
    let nombre=User.name
    res.render('dashboard',{
        nombre
    })
}