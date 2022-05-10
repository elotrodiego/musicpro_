const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {tittle: 'asd'} );
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {tittle: 'contact'} );
});

module.exports = router;