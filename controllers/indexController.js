
let indexController = {
    index: function (req,res){
    res.render('index', {color: req.session.color, colorCookie:colorCookie});
    },

    color: function (req,res){
    req.session.color = req.body.color;
    if (req.body.recordar_color != undefined){
    res.cookie("colorPreferido", req.session.color, {maxAge:60000})
    }
    res.redirect('/');
    },

    borrar: function(req,res){
    req.session.color = undefined;
    res.cookie.colorPreferido = undefined;
    res.redirect('/')
    },

    queColorEs: function(req,res){
    res.render('queColorEs', {color: req.session.color, colorCookie:colorCookie})
    },

}

module.exports = indexController;