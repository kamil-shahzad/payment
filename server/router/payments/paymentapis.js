const express = require('express')
const app = express()

app.use(express.json())


const cors = require('cors');


const allowedOrigins = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));
app.use(cors());

app.post('/api/access-token', async (req, res) => {
    try {
      const merchantId = '18647';
      const securedKey = 'hCF9uHVboGFFH6p4qPQcsa9';
  
      const apiUrl = `https://ipg1.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken?MERCHANT_ID=${merchantId}&SECURED_KEY=${securedKey}`;
  
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Request to external API failed with status ${response.status}`);
      }
  
      const data = await response.json();
  
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
    }
  });


  module.exports = app