
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

app.use(express.json())

  app.get('/api/token', async (req, res) => {
    try {
      const response = await axios.get('https://ipg1.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken', {
        params: req.query
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  app.post('/submit', (req, res) => {
    const uniqueToken = uuidv4(); // Generate a unique tokens
    res.json({ BASKET_ID: uniqueToken }); // Send the token back to the client
  });
  
dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
	console.log("DB connected")
}).catch((err)=>{console.log('Error in establishing database')})

//middlewares
// app.use(req, res, next)

app.use(express.json())

//linking the routes
app.use(require('./router/accounts/auth'))
app.use(require('./router/payments/paymentapis'))

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