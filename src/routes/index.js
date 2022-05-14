const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');



router.get('/', clienteController.todasCliente);


router.get('/contact', (req, res) => {
    res.render('contact.html', {tittle: 'contact'} );
});

module.exports = router;