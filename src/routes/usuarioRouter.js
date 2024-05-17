const router = require('express').Router()
const UsuarioController = require('../controllers/UsuarioController')

router.post('/', UsuarioController.createUsuario)
router.get('/', UsuarioController.getUsuarios)
router.get('/:id', UsuarioController.getUsuarioById)
router.put('/:id', UsuarioController.updateUsuario)
router.delete('/:id', UsuarioController.deleteUsuario)

module.exports = router
