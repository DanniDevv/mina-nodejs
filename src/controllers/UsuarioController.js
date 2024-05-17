const Usuario = require('../models/Usuario')

// Crear un nuevo usuario
exports.createUsuario = async (req, res) => {
  try {
    const newUsuario = new Usuario({
      codigo_usuario: req.body.codigo_usuario,
      nombre: req.body.nombre,
      correo: req.body.correo,
      contraseña: req.body.contraseña
    })
    const usuarioSaved = await newUsuario.save()
    res.status(201).json(usuarioSaved)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Obtener todos los usuarios
exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find()
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Obtener un usuario por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id)
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Actualizar un usuario
exports.updateUsuario = async (req, res) => {
  try {
    const updatedUsuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      {
        codigo_usuario: req.body.codigo_usuario,
        nombre: req.body.nombre,
        correo: req.body.correo,
        contraseña: req.body.contraseña
      },
      { new: true }
    )
    if (!updatedUsuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(200).json(updatedUsuario)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Eliminar un usuario
exports.deleteUsuario = async (req, res) => {
  try {
    const deletedUsuario = await Usuario.findByIdAndDelete(req.params.id)
    if (!deletedUsuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(200).json({ message: 'Usuario eliminado' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
