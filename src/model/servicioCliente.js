const controller = require('./daoCliente.js');
const {
    daoLeerCliente } = require('./daoCliente.js')

const lecturaCliente = async () => {
    return await controller.list();
}

module.exports = {
    lecturaCliente
}