const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();


const authRoutes = require('./routes/userRoutes');
const codeRoutes = require("./routes/runApi");


app.use('/api/auth', authRoutes);
app.use('/api/code', codeRoutes)

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




