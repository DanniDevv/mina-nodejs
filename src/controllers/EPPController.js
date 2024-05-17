const EPP = require('../models/EPP')

// Crear EPP
exports.createEPP = async (req, res) => {
  try {
    const newEPP = new EPP(req.body)
    const savedEPP = await newEPP.save()
    res.status(201).json(savedEPP)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el EPP' })
  }
}

// Obtener EPPs
exports.getEPPs = async (req, res) => {
  try {
    const epps = await EPP.find().populate('user_id').populate('eplista_id')
    res.status(200).json(epps)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los EPPs' })
  }
}

// Obtener un EPP por ID
exports.getEPPById = async (req, res) => {
  try {
    const epp = await EPP.findById(req.params.id).populate('user_id').populate('eplista_id')
    if (epp) {
      res.status(200).json(epp)
    } else {
      res.status(404).json({ message: 'EPP no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el EPP' })
  }
}

// Actualizar EPP
exports.updateEPP = async (req, res) => {
  try {
    const updatedEPP = await EPP.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedEPP)
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el EPP' })
  }
}

// Eliminar EPP
exports.deleteEPP = async (req, res) => {
  try {
    await EPP.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'EPP eliminado' })
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el EPP' })
  }
}
