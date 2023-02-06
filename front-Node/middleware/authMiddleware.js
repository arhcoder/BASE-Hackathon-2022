const User = require('../models/User')

module.exports = (req, res, next) => {
    if (req.session.idClientUnique)
    {
        return res.redirect('/')
    }
    next();
}
