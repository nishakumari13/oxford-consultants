import React from "react";
import "./course.css";
import { Container, Row, Col } from "reactstrap";
import a1 from "../images/a1.jpeg";
import CourseCard from "./CourseCard";

const courseData = [
  {
    id: "01",
    title: "web design for beginers",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: a1,
  },
  {
    id: "02",
    title: "web design for beginers",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: a1,
  },
  {
    id: "03",
    title: "web design for beginers",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: a1,
  },
];
const Courses = () => {
  return (
    <div>
      <Container id="course" style={{ width: "85%" }}>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course_top d-flex justify-content-between align-items-center">
              <div className="course_top_left">
                <h2>Our popular courses</h2>
                <p className="text">
                  gg ffgvbn gcg vf v f c v v v vgcfffxs gdfd fssdsd gg ffgvbn
                  gcg vf v f c v v v vgcfffxs gdfd fssdsd gg ffgvbn gcg vf v f c
                  v v v vgcfffxs gdfd fssdsd{" "}
                </p>
              </div>
              {/* <div>
                <button></button>
              </div> */}
            </div>
          </Col>
          {courseData.map((item) => (
            <Col lg="4" md="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
