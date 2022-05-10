const express = require('express');
const app = express();
const path = require('path');
const morgan = require ('morgan');
const mysql = require('mysql');
const myConnection = require('express-myConnection');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, { 
    host: 'localhost',
    user: 'root',
    password: 'pass',
    port: 3306,
    database: 'musicpro'
    }, 'single')); 
// routes
app.use(require('./routes/index'));
// static files
app.use(express.static(path.join(__dirname, 'public')));
//

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});