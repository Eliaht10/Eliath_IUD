const { Router } = require('express')
const { createInventario, getInventarios, updateInventarioByID, deleteInventarioByID} =
 require('../controllers/inventario')

const router = Router()

// crear
router.post('/', createInventario)

// consultar todos
router.get('/', getInventarios)

//Editar Inventario
router.put('/:id', updateInventarioByID)

//Eliminar Inventario
router.delete('/:id', deleteInventarioByID)

module.exports = router;