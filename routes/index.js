var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var recordarColorMiddleware = require('../middleware/recordarColorMiddleware');

/* GET home page. */
router.get('/', recordarColorMiddleware, indexController.index);

router.post('/', indexController.color);

router.get('/borrar', indexController.borrar);

router.get('/queColorEs', recordarColorMiddleware, indexController.queColorEs);


module.exports = router;
