const {
    daoLeerCliente } = require('./daoCliente.js')

const lecturaCliente = async () => {
    return await daoLeerCliente();
}

module.exports = {
    lecturaCliente
}