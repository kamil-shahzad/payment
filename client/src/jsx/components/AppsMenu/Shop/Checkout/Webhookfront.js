import React, { useState } from 'react';

export const WebHook = () => {


  const [BASKET_ID, setBasketId] = useState();

  function generateBasketID() {
    const randomNumber = Math.floor(Math.random() * 90) + 10;

    const firstThreeAlphabets = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const basketID = firstThreeAlphabets + '-' + randomNumber;

    return basketID;
  }
  const generatedID = generateBasketID();
  // console.log(generatedID); 
  const [TXNMAMT, setTxnAmt] = useState('');
  const [MERCH_ID, setMerchantId] = useState();
  const [SECUR_KEY, setSecureKey] = useState();
  const [submitted, setSubmitted] = useState('');

  const getTokenAccess = async (e) => {
    console.log("Data is going to be fetched")
    fetch('http://192.168.0.161/payments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        Basket_id: 8983,
        Merchant_id: 238,
        name: "Hamza",
        Acesstoken: "alksasa",
        Amount: 840
      }),
    })
      .then(response => response.json())
      .then(responseJson => {

        console.log(responseJson)
      })
      .catch(err => {
        console.log("error",err)

      });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ITS HERE")
    const url = `http://192.168.0.119:8080/api/access-token`
    const webhookResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (webhookResponse.ok) {
      const contentType = webhookResponse.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const accessTokenData = await webhookResponse.json();
        console.log("JSON Response Data:", accessTokenData.ACCESS_TOKEN);
      } else {
        const htmlResponse = await webhookResponse.text();
        console.log("HTML Response Data:", htmlResponse);
      }
    } else {
      console.error("Request to API failed with status:", webhookResponse.status);
    }
  };
  return (
    <div className="">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 order-md-1 border p-5 shadow card">
            <h4 className="mb-3">Transaction Process</h4>
            <form className="needs-validation" noValidate="">
              <div className="row">
                <div className="col-12 mb-4">
                  <label htmlFor="firstName">
                    Transaction Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="name"
                    placeholder=""
                    required
                    onChange={(e) => setTxnAmt(e.target.value)}
                  />
                </div>
              </div>
              <hr />
              <button
                onClick={getTokenAccess}
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue Transaction
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <form >
    //     <div>
    //       <label>
    //         Merchant ID:
    //         <input
    //           type="text"
    //           value={MERCH_ID}
    //           onChange={(e) => setMerchantId(e.target.value)}
    //           readOnly
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Secure Key:
    //         <input
    //           type="text"
    //           value={SECUR_KEY}
    //           onChange={(e) => setSecureKey(e.target.value)}
    //           readOnly
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Transaction Amount:
    //         <input
    //           type="text"
    //           value={TXNMAMT}
    //           onChange={(e) => setTxnAmt(e.target.value)}
    //         />
    //       </label>
    //     </div>
    //     <button type="submit">Submit</button>
    //     <button onClick={handleSubmit}>Make Webhook Request</button>
    //     {/* {responseData && (
    //     <div>
    //       <h2>Response from Webhook:</h2>
    //       <pre>{JSON.stringify(responseData, null, 2)}</pre>
    //     </div>)} */}
    //   </form>
    //   {submitted && (
    //     <div>
    //       <div>Basket ID: {BASKET_ID}</div>
    //       <div>Entered Transaction Amount: {TXNMAMT}</div>
    //       <div>Merchant ID: {MERCH_ID}</div>
    //       <div>Secure Key: {SECUR_KEY}</div>
    //     </div>
    //   )}
    //   <button>Fetch Access Token</button>
    // </div>
  )
}