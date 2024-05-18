const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes'))

app.get('/', (req, res) => {
  res.send(
    `<h1>API</h1>
    <ul>
      <li><a href="/api/usuarios">/api/usuarios</a></li>
      <li><a href="/api/resultados">/api/resultados</a></li>
      <li><a href="/api/pruebas">/api/pruebas</a></li>
      <li><a href="/api/pruebas">/api/preguntas</a></li>
      <li><a href="/api/confirmacion">/api/confirmacion</a></li>
      <li><a href="/api/epps">/api/epps</a></li>
      <li><a href="/api/epplista">/api/epplista</a></li>
    </ul>
  `)
})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
