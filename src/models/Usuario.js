const mongoose = require('../database')

const UsuarioSchema = new mongoose.Schema({
  codigo_usuario: {
    type: String,
    required: true,
    maxlength: 7,
    unique: true
  },
  nombre: {
    type: String,
    required: true,
    maxlength: 200
  },
  email: {
    type: String,
    required: true,
    maxlength: 200,
    unique: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 100
  }
})

const Usuario = mongoose.model('Usuarios', UsuarioSchema)

module.exports = Usuario
