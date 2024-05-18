const mongoose = require('../database')
// const Pregunta = require('./Pregunta')

const PruebaSchema = new mongoose.Schema({
  preguntas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Preguntas'
  }],
  fecha: {
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
