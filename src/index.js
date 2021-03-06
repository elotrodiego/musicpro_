const express = require('express');
const app = express();
const path = require('path');
const morgan = require ('morgan');
const mysql = require('mysql');
const myconn = require('express-myConnection');
const clienteController = require('../src/controllers/clienteController');
const router = require('./routes/index');

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'musicpro'
}

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.urlencoded({extended: false}));
// routes
app.use(require('./routes/index'));
// static files
app.use(express.static(path.join(__dirname, 'public')));
//

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});