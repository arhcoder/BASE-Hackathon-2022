
const User = require('../models/User')

module.exports = (req, res) =>{
    let frase=User.phrase;
    let image=User.imagePath;
    res.render('login'), {
        frase,image
    }};