import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";

const Checkout = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Checkout" motherMenu="Shop" />

         <div className="row">
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-6 order-md-1">
                           <h4 className="mb-3">Transaction Process</h4>
                           <form className="needs-validation" noValidate="">
                              <div className="row">
                                 <div className="col-md-6 mb-6">
                                    <label htmlFor="firstName">
                                       Enter Amount
                                    </label>
                                    <input
                                       type="number"
                                       className="form-control"
                                       id="amount"
                                       placeholder=""
                                       required
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
