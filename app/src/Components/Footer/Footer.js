import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkStyles = {
  color: "white",
  textDecoration: "none",
};

function Footer() {
  return (
    <footer className="bg-dark text-white py-3" style={{ marginTop: "10%" }}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4} className="text-center ">
            <div>
              <h3>Company</h3>
              <div style={{ textAlign: "left", paddingLeft: "35%" }}>
                <Link to="#" style={linkStyles} className="d-block mb-2">
                  About Us
                </Link>
                <Link to="#" style={linkStyles} className="d-block mb-2">
                  Subscription Plan
                </Link>
                <Link to="#" style={linkStyles} className="d-block">
                  Careers
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div>
              <h4>Support</h4>
              <div style={{ textAlign: "left", paddingLeft: "40%" }}>
                <Link to="#" style={linkStyles} className="d-block mb-2">
                  FAQs
                </Link>
                <Link to="#" style={linkStyles} className="d-block mb-2">
                  Email Us
                </Link>
                <Link to="#" style={linkStyles} className="d-block">
                  Refund Policy
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div style={{ textAlign: "left", paddingLeft: "35%" }}>
              <h4>Partnerships</h4>
              <div>
                <Link to="#" style={linkStyles} className="d-block mb-2">
                  Become a Partner
                </Link>
                <Link to="#" style={linkStyles} className="d-block">
                  Check Status
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-5">
        <p>Discover new Bool, Book Harmony</p>
      </div>
    </footer>
  );
}

export default Footer;
