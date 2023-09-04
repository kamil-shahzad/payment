// const express = require("express");
// const app = express();
// const cors = require("cors");
// const PORT = 4000;
// app.use(cors());
// app.listen(PORT, function() {
//   console.log("Server is running on Port: " + PORT);
// });
const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())

dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
	console.log("DB connected")
}).catch((err)=>{console.log('Error in establishing database')})

//middlewares
// app.use(req, res, next)

app.use(express.json())

//linking the routes
app.use(require('./router/auth'))

const middleware = (req, res, next) => {
    console.log('middleware is working...')
    next();
}

app.get('/', (req, res) => {
    res.send('Backend from the app.js')
})

app.get('/ovex' , middleware , (req, res)=>{
	res.send('Ovex Dashboard')
})

app.listen(8080, () => {
	console.log('Server started on 8080 from the app.js')
})