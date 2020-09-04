if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const DARKSKYAPI = process.env.DARKSKY_API_KEY
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
    console.log(req.body)
    
})

app.listen(3000, () => {
    console.log('sever started')
})