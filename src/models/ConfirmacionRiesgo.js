const mongoose = require('../database')

const ConfirmacionRiesgoSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fecha: {
    type: Date,
    required: true
  }
})

const ConfirmacionRiesgo = mongoose.model('ConfirmacionRiesgos', ConfirmacionRiesgoSchema)

module.exports = ConfirmacionRiesgo
