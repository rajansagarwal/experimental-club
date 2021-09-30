import React from "react";
import Card1 from './Card1';

// reactstrap components
import { Container, Row, Col } from "react-grid-system";

function Example() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={3}>
            <Card1/>
          </Col>
          <Col sm={3}>
          <Card1/>
          </Col>
          <Col sm={3}>
          <Card1/>
          </Col>
          <Col sm={3}>
          <Card1/>
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
            <Card1/>
          </Col>
          <Col sm={3}>
          <Card1/>
          </Col>
          <Col sm={3}>
          <Card1/>
          </Col>
          <Col sm={3}>
          <Card1/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Example;