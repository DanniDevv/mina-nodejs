const router = require('express').Router()
const ResultadoController = require('../controllers/ResultadoController')

router.post('/', ResultadoController.createResultado)
router.get('/', ResultadoController.getResultados)
router.get('/:id', ResultadoController.getResultadoById)
router.put('/:id', ResultadoController.updateResultado)
router.delete('/:id', ResultadoController.deleteResultado)

module.exports = router
