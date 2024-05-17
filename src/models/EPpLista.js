const mongoose = require('../database')

const EPpListaSchema = new mongoose.Schema({
  lentes: {
    type: Boolean,
    required: true
  },
  casco: {
    type: Boolean,
    required: true
  },
  mameluco: {
    type: Boolean,
    required: true
  },
  mascarilla: {
    type: Boolean,
    required: true
  },
  guantes: {
    type: Boolean,
    required: true
  },
  zapatos: {
    type: Boolean,
    required: true
  },
  orejeras: {
    type: Boolean,
    required: true
  }
})

const EPpLista = mongoose.model('EPpListas', EPpListaSchema)

module.exports = EPpLista
