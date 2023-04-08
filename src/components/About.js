import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import about from "../images/a1.jpeg";
import CountUp from "react-countup";

const About = () => {
  return (
    <div>
      <Container className="container" id="about" style={{ width: "85%" }}>
        <Row>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={about} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about_content">
              <h2>About us</h2>
              <p className="text">
                We are a consultancy in this business from past 23 years
              </p>
              <div className="about_counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter_title">Completed projects</p>
                  </div>

                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={3} suffix="M" />
                    </span>
                    <p className="counter_title">Patient arount world</p>
                  </div>
                </div>
                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter_title">Completed projects</p>
                  </div>

                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={3} suffix="M" />
                    </span>
                    <p className="counter_title">Patient arount world</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
