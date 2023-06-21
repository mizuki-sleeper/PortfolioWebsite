import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Ecosystem-amico.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            私はプログラミングに夢中になり、少なくとも何かを学んだと思います… 🤷‍♂️
            <br />
            <br />
            私はまず初めに、Webの幅広い分野を学びました。
            <i>
              <b className="purple">
                {" "}
                Linux、プログラミング、セキュリティ、アーキテクティング、AI/データサイエンス、UI/UX{" "}
              </b>
            </i>
            ...
            <br />
            <br />
            興味のある分野は、AWSなどのクラウドサービスも含めた &nbsp;
            <i>
              <b className="purple">バックエンドの設計 </b> など、{" "}
              <b className="purple">アーキテクチャ</b>
            </i>
            に関連する分野です。
            <br />
            <br />
            多くのことを学び、点と点がつながる感覚を得ました。ここからは、分野を絞って本格的に学んでいきたいと思います。
            {/* <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js and Next.js</b>
            </i> */}
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
    </Container>
  );
}
export default Home2;
