import React, { useState } from "react";
import "./choose.css";
import { Container, Row, Col } from "reactstrap";
import a1 from "../images/a1.jpeg";
import { BsPlayCircle } from "react-icons/bs";
import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div>
      <Container id="choose" style={{ width: "85%" }}>
        <Row>
          <Col lg="6">
            <div className="choose_content">
              <h2>Why choose us</h2>
              <p className="text">
                hfgfgfg fgf gff fdxc yffdxc bfsd gddx vdx td hvb fdx dd hfgfgfg
                fgf gff fdxc yffdxc bfsd gddx vdx td hvb fdx dd hfgfgfg fgf gff
                fdxc yffdxc bfsd gddx vdx td hvb fdx dd hfgfgfg fgf gff fdxc
                yffdxc bfsd gddx vdx td hvb fdx dd hfgfgfg fgf gff fdxc yffdxc
                bfsd gddx vdx td hvb fdx dd hfgfgfg fgf gff fdxc yffdxc bfsd
                gddx vdx td hvb fdx dd
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="choose_img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  controls
                  width="100%"
                  height="300px"
                />
              ) : (
                <img src={a1} alt="img" className="w-100" />
              )}

              {!showVideo && (
                <div className="play_icon">
                  <BsPlayCircle
                    style={{ color: "#44a1db", fontSize: "3rem" }}
                    onClick={() => setShowVideo(!showVideo)}
                  />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseUs;
