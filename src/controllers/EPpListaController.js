const EPpLista = require('../models/EPpLista')

// Crear EPpLista
exports.createEPpLista = async (req, res) => {
  try {
    const newEPpLista = new EPpLista(req.body)
    const savedEPpLista = await newEPpLista.save()
    res.status(201).json(savedEPpLista)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la lista de EPp' })
  }
}

// Obtener EPpListas
exports.getEPpListas = async (req, res) => {
  try {
    const ePpListas = await EPpLista.find()
    res.status(200).json(ePpListas)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las listas de EPp' })
  }
}

// Obtener una lista de EPp por ID
exports.getEPpListaById = async (req, res) => {
  try {
    const ePpLista = await EPpLista.findById(req.params.id)
    if (ePpLista) {
      res.status(200).json(ePpLista)
    } else {
      res.status(404).json({ message: 'Lista de EPp no encontrada' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la lista de EPp' })
  }
}

// Actualizar EPpLista
exports.updateEPpLista = async (req, res) => {
  try {
    const updatedEPpLista = await EPpLista.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedEPpLista)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Eliminar EPpLista
exports.deleteEPpLista = async (req, res) => {
  try {
    await EPpLista.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Lista de EPp eliminada' })
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la lista de EPp' })
  }
}
