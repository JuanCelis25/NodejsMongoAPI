const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/user.js')

const app = express();
const port = process.env.PORT || 3999;


//middleware
app.use(express.json());
app.use('/api', userRoutes);


//ROUTES
app.get('/', (req, res) =>{
    res.send("Welcome to your API")
});

// mongodb connection 
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Conectado a mongo Atlas"))
.catch((error) => console.eror(error));


app.listen(port, () => console.log('servidro esta funcionando', port));