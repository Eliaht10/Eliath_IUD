const { Router } = require('express')
const {createUsuario, getUsuarios, updateUsuarioByID, deleteUsuarioByID} =
 require('../controllers/usuario')

const router = Router()

// crear
router.post('/', createUsuario)

// consultar todos
router.get('/', getUsuarios)

//Editar Usuario
router.put('/:id', updateUsuarioByID)

//Elinar usuario
router.delete('/:id', deleteUsuarioByID)

module.exports = router;