const controller = {  };


/*const daoLeerCliente = () => {
    console.log('daoleer');
    return new Promise((resolve, reject) => {
        console.log('promise');
        todasCliente = (req, res) => {
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
};*/

/*app.use(myConnection(mysql, { 
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'musicpro'
    }, 'single')); */


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuarios) => {
            if (err) {
                res.json(err);
            }
            console.log(usuarios);
            res.render('index.html', {
                data: usuarios
            });
        });
    });
};

/*module.exports =
{
    daoLeerCliente
};*/

module.exports = controller;