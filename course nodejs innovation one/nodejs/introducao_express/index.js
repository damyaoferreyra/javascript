const express = require('express')
const bodyParser =  require('body-parser')

// modularização: funcionalidades em arquivos separados
const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))


userRoute(app)

app.get('/', (req, res) => {
    res.send('Olá mundo via Express')
})

app.listen(port, () => console.log(`API rodando na porta ${port}`))
