/*
const { lecturaCategoria,
  insertarCategoria,
  actualizarCategorias,
  eliminarCategorias } = require('../model/servicioCategorias');


*/

const { lecturaCliente, 
    } = require('../model/servicioCliente');

const todasCliente = async (req, res) => {
  res.json(await lecturaCliente());
}

module.exports =
{
  todasCliente
}