const router = require('express').Router()
const PruebaController = require('../controllers/PruebaController')

router.post('/', PruebaController.createPrueba)
router.get('/', PruebaController.getPruebas)
router.get('/:id', PruebaController.getPruebaById)
router.put('/:id', PruebaController.updatePrueba)
router.delete('/:id', PruebaController.deletePrueba)

module.exports = router
