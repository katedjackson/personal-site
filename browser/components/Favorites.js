import React from 'react';
import { Row, Col, Button, Link } from 'react-bootstrap';

const Favorites = () => {
  return (
    <div className="favorites">
      <Row>
        <Col xs={12} sm={12} md={6} lg={4}>
          <h3>Who I Am</h3>
          <img src={""}/>
          <p></p>
          <Button>Learn More</Button>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <h3>What I Do</h3>
          <img src={""}/>
          <p></p>
          <Button>Learn More</Button>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <h3>How To Find Me</h3>
          <img src={""}/>
          <p></p>
          <Button>Learn More</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Favorites;
