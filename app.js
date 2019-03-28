const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const keys =require('./keys')
const postRouter = require('./routes/post')

const app = express()
const clientpath = path.join(__dirname , 'client')

mongoose.connect(keys.mongoURI ,  { useNewUrlParser: true })
    .then( () => {
        console.log('MongoDB connected')
    })

    .catch((err) => {
        console.error(err)
    })


    app.use('/api/post', postRouter)
    app.use(express.static(clientpath))


const port = process.env.port || 5000

app.listen(port , () => {
    console.log('Server has been started on port: ' + port + '!')
})