import React, { useEffect, useState } from 'react';

export const TransactionForm = (props) => {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [currency, setCurrecy] = useState('PKR');
  const [merchandId, setMerchantId] = useState(18647);
  const [merchantName, setMerchantName] = useState('merchantName');
  const [token, setToken] = useState('Itpyf857yc1r19i2rENoLx_Y1KxldA89ZSsXE-EVwRU');
  const [successURL, setSuccessURL] = useState('https://www.google.com');
  const [failureURL, setFailureURL] = useState('https://www.google.com');
  const [checkoutURL, setCheckoutURL] = useState('https://www.google.com');
  const [transDate, setTransDate] = useState('');
  const [signature, setSignature] = useState('SOME-RANDOM-STRING');
  const [version, setVersion] = useState('MERCHANT-CART-0.1');
  const [item, setItem] = useState('Item Purchased from Cart');
  const [procode, setProcode] = useState('00');
  const [transType, setTransType] = useState('ECOMM_PURCHASE');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ipg1.apps.net.pk/Ecommerce/api/Transaction/PostTransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          MERCHANT_ID: merchandId,
          MERCHANT_NAME: merchantName,
          TOKEN: token,
          PROCCODE: procode,
          TXNAMT: props.TXTAMT,
          CUSTOMER_MOBILE_NO: mobile,
          CUSTOMER_EMAIL_ADDRESS: email,
          SIGNATURE: signature,
          VERSION: version,
          TXNDESC: transType,
          SUCCESS_URL: successURL,
          FAILURE_URL: failureURL,
          BASKET_ID: props.Basket_ID,
          ORDER_DATE: transDate,
          CHECKOUT_URL: checkoutURL,
        })
      });

      console.log(response,"hello")

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Handle the response data as needed.
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form action="https://ipg1.apps.net.pk/Ecommerce/api/Transaction/PostTransaction" method="POST" onSubmit={handleFormSubmit}>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Amount to be Paid</label>
          <div className='col-sm-9'>
            <input
              type='number'
              className='form-control'
              placeholder='Amount'
              value={props.TXTAMT}
              readOnly
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Application Id</label>
          <div className='col-sm-9'>
            <input
              type='number'
              className='form-control'
              placeholder='Application Id'
              value={props.Basket_ID}
              readOnly
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Mobile Number</label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control'
              placeholder='Mobile Number'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Email</label>
          <div className='col-sm-9'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {/* Add more form fields here */}
        <div className='form-group row'>
          <div className='col-sm-4'>
            <button type='submit' className='btn btn-primary'>
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
