import React, { useState } from 'react';
import ModelTrans from '../../../AlertsandNotifications/ModelTrans';
import { TransactionForm } from '../../../Forms/Payments/TransactionForm';

export const WebHook = () => {
  const [TXNAMT, setTxnAmt] = useState('');
  const [accessTokenData, setAccessTokenData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionForms, setTransactionForms] = useState(false)
  const [BASKET_ID, setBasketId] = useState(null);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTransactionForms(true)
    //unique ID
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const firstThreeAlphabets = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const basketID = firstThreeAlphabets + '-' + randomNumber;
    setBasketId(basketID);
    //
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
        setAccessTokenData(accessTokenData);
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
                onClick={handleSubmit}
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue Transaction
              </button>
              <button
                onClick={handleModalOpen}
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Show Values
              </button>
            </form>
          </div>
        </div>
      </div>

      {accessTokenData && (
        <div className="mt-3">
          <h5>Access Token Data:</h5>
          <pre>{JSON.stringify(accessTokenData, null, 2)}</pre>
        </div>
      )}
      {BASKET_ID && (
        <div className="mt-3">
          <h5>Generated Basket ID:</h5>
          <p>{BASKET_ID}</p>
        </div>
      )}
      {transactionForms && (
        <div>
          <TransactionForm TXTAMT={TXNAMT} />
        </div>
      )}



    </div>
  )
}
