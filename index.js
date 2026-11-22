required('dotenv').config()

const express = require('express')
// import express from "express" or 1st line
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/twitter', (req, res) => {
    res.send("Hello twitter")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login into the chai aur code</h1>')
})

app.get('/chai', (req, res)=>{
    res.send("<h2>I am having my tea</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`);
})
