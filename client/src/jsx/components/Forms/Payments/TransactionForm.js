import React  , {useEffect, useState} from 'react'

export const TransactionForm = (props) => {
    const { TXTAMT } = props;
    const { Basket_ID } = props;
    const {Generated_Token} = props;
    const [mobile, setMobile] = useState('0909090');
    const [email, setEmail] = useState('usergmail.com');
    const [currency, setCurrecy] = useState('PKR');
    const [merchandId, setMerchantId] = useState('233');
    const [merchantName, setMerchantName] = useState('merchantName');
    const [token, setToken] = useState(Generated_Token);
    const [successURL, setSuccessURL] = useState('https://https:google.com');
    const [failureURL, setFailureURL] = useState('https://https:google.com');
    const [checkoutURL, setCheckoutURL] = useState('https://https:google.com');
    const [transDate, setTransDate] = useState('238');
    const [signature, setSignature] = useState('Ovex');
    const [version, setVersion] = useState('Ovex');
    const [item, setItem] = useState('Ovex');
    const [procode, setProcode] = useState('Ovex');
    const [transType, setTransType] = useState('Ovex');

        const handleFormSubmit = async (e) => {
            e.preventDefault();
        
            try {
             console.log("before fetch")
              const response = await fetch('https://ipg1.apps.net.pk/Ecommerce/api/Transaction/PostTransaction', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    MERCHANT_ID : merchandId ,
                    MERCHANT_NAME: merchantName,
                    TOKEN: token,
                    PROCCODE: procode,
                    TXNAMT: TXTAMT,
                    CUSTOMER_MOBILE_NO:mobile,
                    CUSTOMER_EMAIL_ADDRESS:email,
                    SIGNATURE:signature,
                    VERSION: version,
                    TXNDESC:transType,
                    SUCCESS_URL:successURL,
                    FAILURE_URL:failureURL,
                    BASKET_ID:Basket_ID,
                    ORDER_DATE:transDate,
                    CHECKOUT_URL:checkoutURL,
                })
              });


              console.log("after fetch")
        
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
        
              const data = await response.json();
            } catch (error) {
              console.error('Error:', error);
            }
          };
        

        // getLatestTransactionDetails();

  
    const getLatestTransactionDetails = async () => {
        console.log("Waiting for the payments")
        try {
          const response = await fetch('<?php echo USER_REGISTRATION_API . "transaction_page_refreshed_data"; ?>', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              header: "",
            })
          });
    
          if (!response.ok) {
            throw new Error('Request failed');
          }
    
          const data = await response.json();
    
          if (data.success) {
            document.getElementById('CUSTOMER_MOBILE_NO').value = data.transactionData['mobile'];
            document.getElementById('CUSTOMER_EMAIL_ADDRESS').value = data.transactionData['email'];
            document.getElementById('CURRENCY_CODE').value = 'PKR';
            document.getElementById('BASKET_ID').value = data.transactionData['basket_id'];
            document.getElementById('MERCHANT_ID').value = data.transactionData['merchant_id'];
            document.getElementById('MERCHANT_NAME').value = 'UAT Demo Merchant';
            document.getElementById('TOKEN').value = data.transactionData['token'];
            document.getElementById('SUCCESS_URL').value = 'http://localhost/asantaxproject/UserRegistrationBasic/paysuccess';
            document.getElementById('FAILURE_URL').value = 'http://localhost/asantaxproject/UserRegistrationBasic/paysuccess';
            document.getElementById('CHECKOUT_URL').value = 'http://localhost/asantaxproject/UserRegistrationBasic/paysuccess';
            document.getElementById('ORDER_DATE').value = data.transactionData['dateTime'];
            document.getElementById('SIGNATURE').value = 'SOME-RANDOM-STRING';
            document.getElementById('VERSION').value = 'MERCHANT-CART-0.1';
            document.getElementById('TXNDESC').value = 'Item Purchased from Cart';
            document.getElementById('PROCCODE').value = '00';
            document.getElementById('TRAN_TYPE').value = 'ECOMM_PURCHASE';
            document.getElementById('MERCHANT_USERAGENT').value = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0';
            document.getElementById('ITEMS[0][SKU]').value = 'SAMPLE-SKU-01';
            document.getElementById('ITEMS[0][NAME]').value = 'An Awesome Dress';
            document.getElementById('ITEMS[0][PRICE]').value = '150';
            document.getElementById('ITEMS[0][QTY]').value = '2';
            document.getElementById('ITEMS[1][SKU]').value = 'SAMPLE-SKU-02';
            document.getElementById('ITEMS[1][NAME]').value = 'IceCream';
            document.getElementById('ITEMS[1][PRICE]').value = '45';
            document.getElementById('ITEMS[1][QTY]').value = '5';
            document.getElementById("transaction_form").submit();
          } else {
            alert('Errors');
          }
        } catch (error) {
          console.error('Error fetching transaction details:', error);
          alert('Error in fetching Transaction');
        }
      }
    
      useEffect(() => {
        getLatestTransactionDetails();
      }, []);
    
    return (
        <div>
            <form action="https://ipg1.apps.net.pk/Ecommerce/api/Transaction/PostTransaction" method="POST" onSubmit={handleFormSubmit}>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Amount to be Paid</label>
                    <div className='col-sm-9'>
                        <input
                            value={TXTAMT}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Application Id</label>
                    <div className='col-sm-9'>
                        <input
                            value={Basket_ID}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Mobile Number</label>
                    <div className='col-sm-9'>
                        <input
                            value={mobile}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Email</label>
                    <div className='col-sm-9'>
                        <input
                            value={email}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Currency Code</label>
                    <div className='col-sm-9'>
                        <input
                            value={currency}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Transaction Amount</label>
                    <div className='col-sm-9'>
                        <input
                            value={TXTAMT}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Basket Id</label>
                    <div className='col-sm-9'>
                        <input
                            value={Basket_ID}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Merchant Id</label>
                    <div className='col-sm-9'>
                        <input
                            value={merchandId}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Merchant Name</label>
                    <div className='col-sm-9'>
                        <input
                            value={merchantName}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Token</label>
                    <div className='col-sm-9'>
                        <input
                            value={token}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Success URL</label>
                    <div className='col-sm-9'>
                        <input
                            value={successURL}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Failure URL</label>
                    <div className='col-sm-9'>
                        <input
                            value={failureURL}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Checkout URL</label>
                    <div className='col-sm-9'>
                        <input
                            value={checkoutURL}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Transaction Date</label>
                    <div className='col-sm-9'>
                        <input
                            value={transDate}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Signature</label>
                    <div className='col-sm-9'>
                        <input
                            value={signature}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Version</label>
                    <div className='col-sm-9'>
                        <input
                            value={version}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Item Purchased from Cart</label>
                    <div className='col-sm-9'>
                        <input
                            value={item}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Pro Code</label>
                    <div className='col-sm-9'>
                        <input
                            value={procode}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Transaction Type</label>
                    <div className='col-sm-9'>
                        <input
                            value={transType}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>

            {/* optional for merchants */}
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Merchant Username</label>
                    <div className='col-sm-9'>
                        <input
                            value={merchantName}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>SKU</label>
                    <div className='col-sm-9'>
                        <input
                            value={TXTAMT}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Item Purchased from Cart</label>
                    <div className='col-sm-9'>
                        <input
                            value={TXTAMT}
                            type='number'
                            className='form-control'
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <div className='col-sm-4'>
                        <button onClick={handleFormSubmit} type='submit' className='btn btn-primary'>
                            Pay Now
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
