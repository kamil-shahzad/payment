import React, { useState } from 'react';

export const WebHook = () => {

  const [BASKET_ID, setBasketId] = useState(uuidv4());
  const [TXNMAMT, setTxnAmt] = useState('');
  const [MERCHANT_ID, setMerchantId] = useState(18647); // Initialize with your constant merchant ID
  const [SECURED_KEY, setSecureKey] = useState('hCF9uHVboGFFH6p4qPQcsa9'); // Initialize with your constant secure key
  const [submitted, setSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const fetchAccessToken = async () => {
    try {
      const response = await axios.get('/payments', {
        params: {
          MERCHANT_ID: '18647',
          SECURED_KEY: 'hCF9uHVboGFFH6p4qPQcsa9'
        }
      });
      setAccessToken(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 order-md-1">
            <h4 className="mb-3">Transaction Process</h4>
            <form className="needs-validation" noValidate="">
              <div className="row">
                <div className="col-md-4 mb-4">
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
    </>
  )
}
