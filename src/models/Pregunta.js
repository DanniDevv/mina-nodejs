const mongoose = require('../database')

const respuestaSchema = new mongoose.Schema({
  respuesta: {
    type: String,
    required: true
  },
  esCorrecta: {
    type: Boolean,
    required: true
  }
})

const preguntaSchema = new mongoose.Schema({
  pregunta: {
    type: String,
    required: true,
    maxlength: 200
  },
  respuestas: [respuestaSchema]
})

const Pregunta = mongoose.model('Preguntas', preguntaSchema)

module.exports = Pregunta
