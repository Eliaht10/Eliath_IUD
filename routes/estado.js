const { Router } = require('express')
const {createEstado, getEstados, updateEstadoByID, deleteEstadoByID } =
 require('../controllers/estado')

const router = Router()

// crear
router.post('/', createEstado)

// consultar todos
router.get('/', getEstados)

//Editar por ID
router.put('/:id', updateEstadoByID)

//Eliminar Por ID
router.delete('/:id', deleteEstadoByID)

module.exports = router;