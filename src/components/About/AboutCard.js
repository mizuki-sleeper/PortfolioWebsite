import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            私の名前は<span className="purple">勝山瑞己</span>
            です。新潟県出身です。
            {/* <span className="purple"> Niigata, Japan.</span> */}
            <br />
            <br />
            千葉大学法政経学部の学生で、統計学のゼミに所属しています。
            {/* <br /> */}
            しかし、私は現在、休学してプログラミングを学んでいます！
            <br />
            <br />
            最近は、GolangとEchoを用いたクリーンアーキテクチャの実装に取り組んでいます！{" "}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgba(116, 250, 255)" }}>
            "明るい未来のために毎日努力しよう！"{" "}
          </p>
          {/* <footer className="blockquote-footer">Mizuki</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
