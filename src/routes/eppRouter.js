const router = require('express').Router()
const EppController = require('../controllers/EppController')

router.post('/', EppController.createEPP)
router.get('/', EppController.getEPPs)
router.get('/:id', EppController.getEPPById)
router.put('/:id', EppController.updateEPP)
router.delete('/:id', EppController.deleteEPP)

module.exports = router
