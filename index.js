var express = require('express');
var cookieParser = require('cookie-parser')// Can de doc cookie
var app = express();
var port = 3000;

var userRoutes = require('./routes/user.routes');
var authRoutes = require('./routes/auth.routes');

app.set('view engine', 'pug'); // cai file pug
app.set('views', './views');// lay file view hien thi

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())//Can de doc cookie

app.use(express.static('public')); //static file

app.get('/', (req, res) => {
	res.render('index', {
		name: 'Lam Son'
	})
});

app.use('/users', userRoutes); //Goi user route
app.use('/auth', authRoutes)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});