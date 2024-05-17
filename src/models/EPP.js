const mongoose = require('../database')

const EPPSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  eplista_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Eplista',
    required: true
  }
})

const EPP = mongoose.model('EPPs', EPPSchema)

module.exports = EPP
