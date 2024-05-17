const router = require('express').Router()

router.use('/usuarios', require('./usuarioRouter'))
router.use('/pruebas', require('./pruebaRouter'))
router.use('/resultados', require('./resultadoRouter'))
router.use('/epps', require('./eppRouter'))
router.use('/epplista', require('./epplistaRouter'))
router.use('/confirmacion', require('./confirmacionRouter'))

module.exports = router
