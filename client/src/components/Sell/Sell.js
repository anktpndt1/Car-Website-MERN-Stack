import React from "react";
import CarIllustration from "../../assets/img/1.jpg";
import Listing from "../CreateListings/Listing";
import { Container, Row, Col } from "react-bootstrap";
import { Grow } from "@material-ui/core";

//component to create car listings
const Sell = () => {
  return (
    <Grow in>
      <Container className="content-container" style={{ height: "100%" }}>
        <Row className="justify-content-center my-auto">
          <Col md={4} className="my-auto">
            <Listing />
          </Col>
          <Col md={6} className="my-auto">
            <img
              className="img-fluid"
              src={CarIllustration}
              alt="Car Illustration"
            />
          </Col>
        </Row>
      </Container>
    </Grow>
  );
};

export default Sell;
