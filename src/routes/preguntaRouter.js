const router = require('express').Router()
const PreguntaController = require('../controllers/PreguntaControler')

router.post('/', PreguntaController.crearPregunta)
router.get('/', PreguntaController.getPreguntas)
router.get('/:id', PreguntaController.getPreguntaById)
router.put('/:id', PreguntaController.updatePregunta)
router.delete('/:id', PreguntaController.deletePregunta)

module.exports = router
