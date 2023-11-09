const express = require('express');
const dotenv = require('dotenv');
const cors =require('cors')
dotenv.config()

const db =require('./configs/db')
const app = express();
const PORT = process.env.PORT || 5500


// importing all routes

const clientRouter= require('./routes/route')

app.use(cors())
app.use(express.json())
app.use('/api/v1/client', clientRouter)


app.listen(PORT , ()=>{
    console.log(`server is created succcessfully on port ${PORT}`);
})

db()