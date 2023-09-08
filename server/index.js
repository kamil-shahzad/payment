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
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
app.use(express.json())
app.use(bodyParser.json());
const PORT = 3001;
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8080', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.post('/webhook', (req, res) => {
    console.log("Webhook is here...")
    // Handle the webhook callback here
    const { merchantID, secureKey, basketID, transactionAmount } = req.body;
  
    const generateToken = (merchantID, secureKey, basketID, transactionAmount) => {
        // Concatenate the parameters (in the order specified by your API documentation)
        const concatenatedString = `${merchantID}${secureKey}${basketID}${transactionAmount}`;
      
        // You might also want to add additional security measures, like hashing or encryption
      
        // For simplicity, let's assume you're using a very basic hash function
        const tokengiven = hashFunction(concatenatedString);
      
        return token;
  
    // Respond back with the token
    const token = tokengiven;
    res.json({ token });
    }
  });
  const hashFunction = (data) => {
    // This is a simplified example, for real-world applications, use a proper hashing algorithm like SHA-256
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash.toString();
  };
  
  app.post('/https://ipguat.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken', (req, res) => {
    const { merchantID, secureKey, basketID, transactionAmount } = req.body;
  
    // Generate the token
    const token = generateToken(merchantID, secureKey, basketID, transactionAmount);
  
    // Respond back with the token
    res.json({ token });
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