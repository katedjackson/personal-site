import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function () {
  return (
    <div className="project-grid">
      <Row>
        <Col xs={12} sm={12} md={6} lg={4}>
          <img src={""}/>
          <h3>Get [F]it Done</h3>
          <p></p>
          <h4>
            <a>GitHub Repo</a>
            <a>Deployed Site</a>
          </h4>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <img src={""}/>
          <h3>Advize</h3>
          <p></p>
          <h4>
            <a>GitHub Repo</a>
            <a>Deployed Site</a>
          </h4>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <img src={""}/>
          <h3>Animal Apparel</h3>
          <p></p>
          <h4>
            <a>GitHub Repo</a>
            <a>Deployed Site</a>
          </h4>
        </Col>
      </Row>
    </div>
  );
}
