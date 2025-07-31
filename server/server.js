const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config()
const app = express();


// connecting to mangoDb
mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


// server running ...
app.listen(process.env.PORT,()=>{
      console.log(`${process.env.PORT} running...`)
})
