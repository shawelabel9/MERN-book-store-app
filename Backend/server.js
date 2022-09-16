const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/api/books')

const app = express()

connectDB()

// app.get('/',(req,res)=> {res.send("Book Store")})
app.use(router)

const port = process.env.PORT

app.listen(port,() => console.log(`server is running at port ${port}`) )