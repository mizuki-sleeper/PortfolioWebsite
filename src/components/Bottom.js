import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function Bottom() {
  return (
    <Container className="bottom">
      <Row>
        <Col md={12} className="home-about-social">
          <h1>THANK YOU FOR FINDING ME</h1>
          <p>
            (The icon below is a decoration. There is no link.)
            {/* <span className="sub-color">connect </span>with me */}
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <div
                href=""
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </div>
            </li>
            <li className="social-icons">
              <div
                // href=""
                // target="_blank"
                // rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </div>
            </li>
            <li className="social-icons">
              <div
                // href=""
                // target="_blank"
                // rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </div>
            </li>
            <li className="social-icons">
              <div
                // href=""
                // target="_blank"
                // rel="noreferrer"
                className="icon-colour home-social-icons"
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
export default Bottom;
