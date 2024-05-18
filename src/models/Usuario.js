const mongoose = require('../database')

const UsuarioSchema = new mongoose.Schema({
  codigo_usuario: {
    type: String,
    required: true,
    maxlength: 7
  },
  nombre: {
    type: String,
    required: true,
    maxlength: 200
  },
  email: {
    type: String,
    required: true,
    maxlength: 200
  },
  password: {
    type: String,
    required: true,
    maxlength: 100
  }
})

const Usuario = mongoose.model('Usuarios', UsuarioSchema)

module.exports = Usuario
