const controller = {};

const daoLeerCliente = () => {
    console.log('daoleer');
    return new Promise((resolve, reject) => {
        console.log('promise');
        controller.list = (req, res) => {
            console.log('cont list');
            req.getConnection((err, conn) => {
                console.log('getconn');
                conn.query('SELECT * FROM cliente', (err, cliente) => {
                    if (err) {
                        res.json(err);
                    }
                    res.render('index.html', {
                        data: cliente
                    });
                });
            });
        }
    });
};

/*controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, cliente) => {
            if (err) {
                res.json(err);
            }
            res.render('index.html', {
                data: cliente
            });
        });
    });
}*/

module.exports = controller
{
    daoLeerCliente
};

//module.exports = controller;