const Prueba = require('../models/Prueba')

// Crear prueba
exports.createPrueba = async (req, res) => {
  try {
    const newPrueba = new Prueba(req.body)
    const savedPrueba = await newPrueba.save()
    res.status(201).json(savedPrueba)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la prueba' })
  }
}

// Obtener pruebas
exports.getPruebas = async (req, res) => {
  try {
    const pruebas = await Prueba.find()
    res.status(200).json(pruebas)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las pruebas' })
  }
}

// Obtener una prueba por ID
exports.getPruebaById = async (req, res) => {
  try {
    const prueba = await Prueba.findById(req.params.id)
    if (prueba) {
      res.status(200).json(prueba)
    } else {
      res.status(404).json({ message: 'Prueba no encontrada' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la prueba' })
  }
}

// Actualizar prueba
exports.updatePrueba = async (req, res) => {
  try {
    const updatedPrueba = await Prueba.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedPrueba)
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la prueba' })
  }
}

// Eliminar prueba
exports.deletePrueba = async (req, res) => {
  try {
    await Prueba.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Prueba eliminada' })
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la prueba' })
  }
}
