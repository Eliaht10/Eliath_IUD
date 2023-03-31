const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos, getTipoEquipoByID, updateTipoEquipoByID, deleteTipoEquipoByID } =
 require('../controllers/tipoEquipo')

const router = Router()

// Crear Equipos
router.post('/', createTipoEquipo)

// Buscar Todos Los Equipos
router.get('/', getTipoEquipos)

//Buscar Todos Los Equipos por Id
router.get('/:id', getTipoEquipoByID)

//Editar Los Tipos de Equipos Ya existentes
router.put('/:id', updateTipoEquipoByID)

//Eliminar El tipo Equipo
router.delete('/:id', deleteTipoEquipoByID)


module.exports = router;