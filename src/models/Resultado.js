const mongoose = require('../database')

const ResultadoSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  intentos: {
    type: Number,
    required: true
  },
  prueba_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prueba',
    required: true
  }
})

const Resultado = mongoose.model('Resultados', ResultadoSchema)

module.exports = Resultado
