module.exports = (req, res) =>{
    req.session.destroy(() =>{
        res.render('logout')
    })
    }

