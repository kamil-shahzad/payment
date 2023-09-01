import React from "react";
import loadable from "@loadable/component";
import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import pMinDelay from "p-min-delay";

import PageTitle from "../../../layouts/PageTitle";

const ApexBar2 = loadable(() => pMinDelay(import("./Bar2"), 1000));
const ApexBar3 = loadable(() => pMinDelay(import("./Bar3"), 1000));
const ApexRedialBar = loadable(() => pMinDelay(import("./RadialBar"), 1000));
const ApexLine = loadable(() => pMinDelay(import("./Line5"), 1000));
const ApexLine3 = loadable(() => pMinDelay(import("./Line3"), 1000));
const ApexLine4 = loadable(() => pMinDelay(import("./Line4"), 1000));
const ApexPie = loadable(() => pMinDelay(import("./Pie4"), 1000));
const ApexPie5 = loadable(() => pMinDelay(import("./Pie5"), 1000));

function ApexChart() {
  return (
    <div className="h-80">
      <PageTitle motherMenu="Charts" activeMenu="ApexChart" />
      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Easy Paisa</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexBar2 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Jazz Cash</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexBar3 />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>HBL</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexLine />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
        <Link to='/paymentintegeration' className='card-link float-right'>
          <Card>
            <Card.Header>
              <Card.Title>PayFast</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexLine3 />
            </Card.Body>
          </Card>
          </Link>
        </Col>
       
      </Row>
    </div>
  );
}

export default ApexChart;
