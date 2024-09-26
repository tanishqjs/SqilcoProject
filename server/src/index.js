const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()



const app = express()

const port = 5000 || process.env.PORT


mongoose.connect(process.env.MongoDB)
    .then(() => { console.log('MongoDB Connected') })
    .catch((e) => { console.log(e) })

app.listen(port,()=>{console.log(`Server is Running ${port}`)})