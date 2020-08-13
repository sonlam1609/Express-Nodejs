var db = require('../db');

var md5 =  require('md5');

module.exports.login = (req, res) =>{
	res.render('auth/login')
};

module.exports.postLogin = (req, res) =>{
	var email = req.body.email;
	var password = req.body.password;
	var errors= [];

	var user = db.get('users').find({email: email}).value();
	
	if (!user) {
		res.render('auth/login',{
			errors: [
				'Users does not exist.'
			],
			values: req.body
		});
		return;
	}

	var hasdedPassword = md5(password);

	if (user.password !== hasdedPassword) {
		res.render('auth/login',{
			errors: [
				'Wrong password.'
			],
			values: req.body
		});
		return;
	}

	res.cookie('userId', user.id);
	res.redirect('/users');
};