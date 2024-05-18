const Pregunta = require('../models/Pregunta')

// Create nueva Pregunta
exports.crearPregunta = async (req, res) => {
  try {
    const nuevaPregunta = new Pregunta(req.body)
    await nuevaPregunta.save()
    res.status(201).json(nuevaPregunta)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get todas las Preguntas
exports.getPreguntas = async (req, res) => {
  try {
    const preguntas = await Pregunta.find()
    res.status(200).json(preguntas)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get una Pregunta por id
exports.getPreguntaById = async (req, res) => {
  try {
    const pregunta = await Pregunta.findById(req.params.id)
    if (!pregunta) {
      return res.status(404).json({ message: 'Pregunta no encontrada' })
    }
    res.status(200).json(pregunta)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update una Pregunta por id
exports.updatePregunta = async (req, res) => {
  try {
    const pregunta = await Pregunta.findByIdAndUpdate(req.params, req.body, {
      new: true,
      runValidators: true
    })
    if (!pregunta) {
      return res.status(404).json({ message: 'Pregunta no encontrada' })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete una Pregunta por id
exports.deletePregunta = async (req, res) => {
  try {
    const pregunta = await Pregunta.findByIdAndDelete(req.params.id)
    if (!pregunta) {
      return res.status(404).json({ message: 'Pregunta no encontrada' })
    }
    res.status(200).json({ message: 'Pregunta eliminada' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
