const router = require('express').Router()
const ConfirmacionController = require('../controllers/ConfirmacionRiesgoController')

router.post('/', ConfirmacionController.createConfirmacionRiesgo)
router.get('/', ConfirmacionController.getConfirmacionesRiesgo)
router.get('/:id', ConfirmacionController.getConfirmacionRiesgoById)
router.put('/:id', ConfirmacionController.updateConfirmacionRiesgo)
router.delete('/:id', ConfirmacionController.deleteConfirmacionRiesgo)

module.exports = router
