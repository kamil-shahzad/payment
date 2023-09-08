import React, { Fragment , useState} from "react";
import { Form } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";
import axios from "axios";
const Checkout = () => {
   const [transactionAmount, setTransactionAmount] = useState('');
   const [merchantName, setMerchantName] = useState('OVEX');
   const [merchantId, setMerchantId] = useState('');
   const [basketId, setBasketId] = useState('');
   const [token, setToken] = useState('');
  
   const handleSubmit3 = async (e) => {
      fetch('http://192.168.0.161:8080/payments', {
         method: 'POST',
         headers: {
             Accept: 'application/json',
             'content-Type': 'application/json',
 
         },
         body: JSON.stringify({
           Basket_id: basketId,
           Merchant_id:merchantId,
           name:merchantName,
           token: token

         }),
     })
         .then(response => response.json())
         .then(responseJson => {
           
          console.log(responseJson) 
          if (responseJson.merchantId) 
          { 
          } 
          else
          alert("Please Try Again")
             
         })
         .catch(err => {
 
         });
   }
   return (
      <Fragment>
         <PageTitle activeMenu="Checkout" motherMenu="Shop" />

         <div className="row">
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-12 order-md-1">
                           <h4 className="mb-3">Transaction Process</h4>
                           <form action="https://ipg1.apps.net.pk/Ecommerce/api/Transaction/PostTransaction" method="POST" className="needs-validation" noValidate="" onSubmit={handleSubmit3}>
                              <div className="row">
                                 <div className="col-md-12 mb-12">
                                 <label htmlFor="firstName">
                                       Enter Merchant Name
                                    </label>
                                    <input
                                       type="string"
                                       className="form-control"
                                       id="merchatName"
                                       placeholder=""
                                       required
                                       onChange={(e) => setMerchantName(e.target.value)}
                                    />
                                    <label htmlFor="firstName">
                                       Enter Merchant ID
                                    </label>
                                    <input
                                       type="number"
                                       className="form-control"
                                       id="merchantId"
                                       placeholder=""
                                       required
                                       onChange={(e) => setMerchantId(e.target.value)}
                                    />
                                     <label htmlFor="firstName">
                                       Enter Basket Id
                                    </label>
                                    <input
                                       type="number"
                                       className="form-control"
                                       id="basketId"
                                       placeholder=""
                                       required
                                       onChange={(e) => setBasketId(e.target.value)}
                                    />
                                     <label htmlFor="firstName">
                                       Enter Amount
                                    </label>
                                    <input
                                       type="string"
                                       className="form-control"
                                       id="amount"
                                       placeholder=""
                                       required
                                       onChange={(e) => setToken(e.target.value)}
                                    />
                                    <div className="invalid-feedback">
                                       Valid Transaction Required.
                                    </div>
                                 </div>
                              </div>
                              <hr/>
                              <button
                                 className="btn btn-primary btn-lg btn-block"
                                 type="submit"
                                 onClick={handleSubmit3}
                              >
                                 Continue Transaction
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Checkout;
