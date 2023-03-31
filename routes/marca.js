const { Router } = require('express')
const { createMarca, getMarcas, updateMarcaByID, deleteMarcaByID } =
 require('../controllers/marca')

const router = Router()

// crear Marca
router.post('/', createMarca)

// consultar todas las marcas
router.get('/', getMarcas)

//Editar marca por Id
router.put('/:id', updateMarcaByID)

//Elinar marca por ID
router.delete('/:id', deleteMarcaByID)

module.exports = router;