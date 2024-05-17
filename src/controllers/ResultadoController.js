const Resultado = require('../models/Resultado')

// Crear resultado
exports.createResultado = async (req, res) => {
  try {
    const newResultado = new Resultado(req.body)
    const savedResultado = await newResultado.save()
    res.status(201).json(savedResultado)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el resultado' })
  }
}

// Obtener resultados
exports.getResultados = async (req, res) => {
  try {
    const resultados = await Resultado.find()
    res.status(200).json(resultados)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los resultados' })
  }
}

// Obtener un resultado por ID
exports.getResultadoById = async (req, res) => {
  try {
    const resultado = await Resultado.findById(req.params.id)
    if (resultado) {
      res.status(200).json(resultado)
    } else {
      res.status(404).json({ message: 'Resultado no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el resultado' })
  }
}

// Actualizar resultado
exports.updateResultado = async (req, res) => {
  try {
    const updatedResultado = await Resultado.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedResultado)
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el resultado' })
  }
}

// Eliminar resultado
exports.deleteResultado = async (req, res) => {
  try {
    await Resultado.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Resultado eliminado' })
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el resultado' })
  }
}
