import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import PageTitle from "../../layouts/PageTitle";

const ModelTrans = () => {
   const [modalCentered, setModalCentered] = useState(false);
   return (
      <div className="h-80">
         <PageTitle motherMenu={"Bootstrap"} activeMenu={"Modal"} />
         <Row>
            <Col>
                     <div className="bootstrap-modal">
                        {/* <!-- Modal --> */}
                        <Modal className="fade" show={modalCentered}>
                           <Modal.Header>
                              <Modal.Title>Modal title</Modal.Title>
                              <Button
                                 onClick={() => setModalCentered(false)}
                                 variant=""
                                 className="close"
                              >
                                 <span>&times;</span>
                              </Button>
                           </Modal.Header>
                           <Modal.Body>
                              <p>
                                 Cras mattis consectetur purus sit amet
                                 fermentum. Cras justo odio, dapibus ac
                                 facilisis in, egestas eget quam. Morbi leo
                                 risus, porta ac consectetur ac, vestibulum at
                                 eros.
                              </p>
                           </Modal.Body>
                           <Modal.Footer>
                              <Button
                                 onClick={() => setModalCentered(false)}
                                 variant="danger light"
                              >
                                 Close
                              </Button>
                              <Button variant="primary">Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                     </div>
            </Col>
         </Row>
      </div>
   );
};

export default ModelTrans;
