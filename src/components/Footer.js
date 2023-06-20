import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Katsuyama Mizuki</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          {/* <h3>Copyright © {year} SB</h3> */}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <div
                // href=""
                style={{ color: "white" }}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <AiFillGithub />
              </div>
            </li>
            <li className="social-icons">
              <div
                // href=""
                style={{ color: "white" }}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </div>
            </li>
            <li className="social-icons">
              <div
                // href=""
                style={{ color: "white" }}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </div>
            </li>
            <li className="social-icons">
              <div
                // href=""
                style={{ color: "white" }}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
