import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function () {
  return (
    <div className="header-div">
      <Row className="header">
        <img id="headshot" src={"/public/personal-site-pic\ copy.jpg"}/>
        <h1>Katelyn Jackson</h1>
        <h3>Full Stack Developer</h3>
        <h4>
          <a href="">Resume</a>
          <a href="">GitHub</a>
          <a href="">LinkedIn</a>
          <a href="">Twitter</a>
        </h4>
      </Row>
    </div>
  );
}
