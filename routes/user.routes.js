var express = require('express');

var db = require('../db');
var controller = require('../controllers/user.controller');
var authMiddleware = require('../middlewares/auth.middleware')


var router = express.Router();

router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/cookie', (req, res, next) =>{
	res.cookie('user-id',12345); //respone gui cookie len
	res.send('Hello');
});

router.get('/search', controller.sreach);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', controller.postCreate);

module.exports = router;