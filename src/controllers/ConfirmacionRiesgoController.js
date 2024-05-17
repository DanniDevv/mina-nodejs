const ConfirmacionRiesgo = require('../models/ConfirmacionRiesgo')

// Crear confirmacion de riesgo
exports.createConfirmacionRiesgo = async (req, res) => {
  try {
    const newConfirmacionRiesgo = new ConfirmacionRiesgo(req.body)
    const savedConfirmacionRiesgo = await newConfirmacionRiesgo.save()
    res.status(201).json(savedConfirmacionRiesgo)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la confirmacion de riesgo' })
  }
}

// Obtener confirmaciones de riesgo
exports.getConfirmacionesRiesgo = async (req, res) => {
  try {
    const confirmacionesRiesgo = await ConfirmacionRiesgo.find()
    res.status(200).json(confirmacionesRiesgo)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las confirmaciones de riesgo' })
  }
}

// Obtener una confirmacion de riesgo por ID
exports.getConfirmacionRiesgoById = async (req, res) => {
  try {
    const confirmacionRiesgo = await ConfirmacionRiesgo.findById(req.params.id)
    if (confirmacionRiesgo) {
      res.status(200).json(confirmacionRiesgo)
    } else {
      res.status(404).json({ message: 'Confirmacion de riesgo no encontrada' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la confirmacion de riesgo' })
  }
}

// Actualizar confirmacion de riesgo
exports.updateConfirmacionRiesgo = async (req, res) => {
  try {
    const updatedConfirmacionRiesgo = await ConfirmacionRiesgo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedConfirmacionRiesgo)
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la confirmacion de riesgo' })
  }
}

// Eliminar confirmacion de riesgo
exports.deleteConfirmacionRiesgo = async (req, res) => {
  try {
    await ConfirmacionRiesgo.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Confirmacion de riesgo eliminada' })
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la confirmacion de riesgo' })
  }
}
