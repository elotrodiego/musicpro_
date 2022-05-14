const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

const test = require('../model/daoCliente');

router.get('/', test.list);



//router.get('/', clienteController.todasCliente);

/*router.get('/', (req, res) => {
    req.getConnection()
})*/

router.get('/contact', (req, res) => {
    res.render('contact.html', {tittle: 'contact'} );
});

module.exports = router;