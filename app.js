const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routesUser')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', routes)

mongoose.connect("mongodb://localhost:27017/mongocrud")
.then(() => {
    //console.log("Conectado no banco de dados")
    
}).catch(err => {
    console.log(err)
})


app.listen(8000, () => { console.log("Servidor no Ar")})

module.exports = app.listen()