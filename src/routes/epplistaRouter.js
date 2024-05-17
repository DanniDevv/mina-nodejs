const router = require('express').Router()
const EppListaController = require('../controllers/EppListaController')

router.post('/', EppListaController.createEPpLista)
router.get('/', EppListaController.getEPpListas)
router.get('/:id', EppListaController.getEPpListaById)
router.put('/:id', EppListaController.updateEPpLista)
router.delete('/:id', EppListaController.deleteEPpLista)

module.exports = router
