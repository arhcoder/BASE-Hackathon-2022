const User = require('../models/User')

module.exports = (req, res, next) => {
    if (!User.permission)
    {
        return res.redirect('/')
    }
    next();
}
