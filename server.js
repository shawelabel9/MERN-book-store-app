const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

const app = express()

connectDB()

app.get('/',(req,res)=> {res.send("Book Store")})

const port = process.env.PORT

app.listen(port,() => console.log(`server is running at port ${port}`) )