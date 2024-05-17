const mongoose = require('../database')

const PruebaSchema = new mongoose.Schema({
  pregunta: {
    type: String,
    required: true,
    maxlength: 200
  },
  respuestas: {
    type: String,
    required: true
  },
  facha: {
    type: Date,
    required: true
  },
  tiempo: {
    type: String,
    required: true
  }
})

const Prueba = mongoose.model('Pruebas', PruebaSchema)

module.exports = Prueba
