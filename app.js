const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url)

const con =mongoose.connection

con.on("open",function(){
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

//listener
app.listen(9000, function(){
    console.log('Server Started')
})