function recordarColorMiddleware (req,res,next){
if(req.cookies.colorPreferido != undefined){
colorCookie = req.cookies.colorPreferido;
} else {
colorCookie = undefined
}
next();
};

module.exports = recordarColorMiddleware;