import React, { Fragment , useState} from "react";
import { Form } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";
import axios from "axios";
const Checkout = () => {
   const [transactionAmount, setTransactionAmount] = useState('');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const handleSubmit = async (e) => {
      e.preventDefault();
      const transactionData = {
         name: name,
         email : email,
        amount: transactionAmount
      };
      try {
        const response = await fetch('http://192.168.0.161:8080/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transactionData),
        });
    console.log(response);
        if (response.ok) {
          // Handle success, e.g., show a success message
        } else {
          // Handle error, e.g., show an error message
        }
      } catch (error) {
        console.log(error);
      }
    };

    const handleSubmit2 = async (e) => {
      e.preventDefault();
      console.log("helo")
      const transactionData = {
         name: "name",
         email : "email@ghj.com",
        amount: 234
      };
      const apiUrl = 'http://192.168.0.161:8080/api/transactions'; // Replace with your actual API URL

// Make the POST request using Axios
axios.post(apiUrl, transactionData)
  .then((response) => {
    // Handle success, if applicable
    console.log('Request succeeded:', response.data);
  })
  .catch((error) => {
    // Handle error, including "Bad Request"
    if (error.response) {
      console.error('Error response from server:', error.response.status, error.response.statusText);
      console.error('Error data:', error.response.data);
    } else {
      console.error('Network error:', error.message);
    }
  });
   }

   const handleSubmit3 = async (e) => {
      fetch('http://192.168.0.119:8080/transactions', {
         method: 'POST',
         headers: {
             Accept: 'application/json',
             'content-Type': 'application/json',
 
         },
         body: JSON.stringify({
           name:name,
           email:email,
           amount:transactionAmount

         }),
     })
         .then(response => response.json())
         .then(responseJson => {
           
          console.log(responseJson)
          
 
      
            
          if (responseJson.email) 
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
                           <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
                              <div className="row">
                                 <div className="col-md-12 mb-12">
                                    <label htmlFor="firstName">
                                       Enter Merchant ID
                                    </label>
                                    <input
                                       type="number"
                                       className="form-control"
                                       id="name"
                                       placeholder=""
                                       required
                                       onChange={(e) => setName(e.target.value)}
                                    />
                                     <label htmlFor="firstName">
                                       Enter Basket Id
                                    </label>
                                    <input
                                       type="number"
                                       className="form-control"
                                       id="email"
                                       placeholder=""
                                       required
                                       onChange={(e) => setEmail(e.target.value)}
                                    />
                                     <label htmlFor="firstName">
                                       Enter Token
                                    </label>
                                    <input
                                       type="number"
                                       className="form-control"
                                       id="amount"
                                       placeholder=""
                                       required
                                       onChange={(e) => setTransactionAmount(e.target.value)}
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
