import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
export const WebHook = () => {

  const [BASKET_ID, setBasketId] = useState(uuidv4()); 
  const [TXNMAMT, setTxnAmt] = useState('');
  const [MERCHANT_ID, setMerchantId] = useState(18647); // Initialize with your constant merchant ID
  const [SECURED_KEY, setSecureKey] = useState('hCF9uHVboGFFH6p4qPQcsa9'); // Initialize with your constant secure key
  const [submitted, setSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
 const handleSubmit = async (e) => {
  e.preventDefault();
// setSubmitted(true)
  try {
    console.log("hiting api")

    const webhookResponse = await fetch(`https://ipg1.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken?MERCHANT_ID=18647&SECURED_KEY=hCF9uHVboGFFH6p4qPQcsa9`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        MERCHANT_ID : 18647,
        SECURED_KEY: 'hCF9uHVboGFFH6p4qPQcsa9',
      })
    });
    console.log("hiting api")

    const accessTokenData = await webhookResponse.json();
    const accessToken = accessTokenData.access_token;

    alert('Webhook API has been hit. Access Token: ' + accessToken);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const handleWebhookRequest = async () => {
  try {
    const response = await fetch('https://ipguat.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken?MERCHANT_ID=18647&SECURED_KEY=hCF9uHVboGFFH6p4qPQcsa9', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //static
        MERCHANT_ID: 18647,
        SECURED_KEY: 'hCF9uHVboGFFH6p4qPQcsa9',

        //own
        BASKET_ID :'kah0ak',
        TXNMAMT:99
      })
    });

    const data = await response.json();
    setResponseData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


async function fetchAccessToken() {
  const MERCHANT_ID = '18647'; // Your merchant ID
  const SECURE_KEY = 'hCF9uHVboGFFH6p4qPQcsa9'; // Your secure key

  try {
    const response = await fetch(`https://ipg1.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken?MERCHANT_ID=${MERCHANT_ID}&SECURED_KEY=${SECURE_KEY}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const accessToken = data.access_token;

    console.log('Access Token:', accessToken);
    return accessToken; // You can return the token if you need to use it in your application
  } catch (error) {
    console.error('Error fetching data:', error);
    // You might want to handle the error here, like showing a message to the user
  }
}
const fetchAccessToken2 = async () => {
  try {
    const response = await axios.post('https://ipg1.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken?MERCHANT_ID=18647&SECURED_KEY=hCF9uHVboGFFH6p4qPQcsa9', {
      MERCHANT_ID: '18647',
      SECURED_KEY: 'hCF9uHVboGFFH6p4qPQcsa9'
    });

    const data = response.data;
    const token = data.access_token;
    
    setAccessToken(token);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  return (
    <div>
    <form onSubmit={fetchAccessToken}>
      <div>
        <label>
          Merchant ID:
          <input
            type="text"
            value={MERCHANT_ID}
            onChange={(e) => setMerchantId(e.target.value)}
            readOnly
          />
        </label>
      </div>
      <div>
        <label>
          Secure Key:
          <input
            type="text"
            value={SECURED_KEY}
            onChange={(e) => setSecureKey(e.target.value)}
            readOnly
          />
        </label>
      </div>
      <div>
        <label>
          Transaction Amount:
          <input
            type="text"
            value={TXNMAMT}
            onChange={(e) => setTxnAmt(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
       <button onClick={handleSubmit}>Make Webhook Request</button>
      {/* {responseData && (
        <div>
          <h2>Response from Webhook:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>)} */}
    </form>
    {submitted && (
      <div>
         <div>Basket ID: {BASKET_ID}</div>
        <div>Entered Transaction Amount: {TXNMAMT}</div>
        <div>Merchant ID: {MERCHANT_ID}</div>
        <div>Secure Key: {SECURED_KEY}</div>
      </div>
    )}
       <button onClick={fetchAccessToken2}>Fetch Access Token</button>
      {accessToken && <div>Access Token: {accessToken}</div>}
  </div>
  )
}
