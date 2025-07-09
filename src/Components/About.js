import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profile from "../assets/WhatsApp Image 2025-03-24 at 11.29.58_4f37d6b0.png";
import devfolioIcon from "../assets/devfolio (1).svg";

const About = () => {
  return (
    <div id="About" style={{ backgroundColor: "#0f0f2d", minHeight: "100vh", color: "white" }}>
      {/* Navbar */}
      <Navbar
        fixed="top"
        expand="md"
        variant="dark"
        className="px-5 py-2"
        style={{
          backgroundColor: "rgba(15, 15, 45, 0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <Navbar.Brand href="#" className="d-flex align-items-center" aria-label="Devfolio Home">
          <img
            src={devfolioIcon}
            alt="Devfolio logo"
            title="Devfolio"
            width="35"
            height="35"
            className="me-2"
          />
          <span style={{ fontSize: "2rem", fontWeight: "700", color: "white" }}>
            Devfolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="#About" className="text-white mx-2">About</Nav.Link>
            <Nav.Link href="#Skills" className="text-white mx-2">Skills</Nav.Link>       
            <Nav.Link href="#Visionary" className="text-white mx-2">Visionary</Nav.Link>
            <Nav.Link href="#Projects" className="text-white mx-2">Projects</Nav.Link>
            <Nav.Link href="#Education" className="text-white mx-2">Education</Nav.Link>
            <Nav.Link href="#Contact" className="text-white mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero/About Section */}
      <Container fluid style={{ paddingTop: "100px" }}>
        <Row className="align-items-center justify-content-center px-5" style={{ minHeight: "80vh" }}>
          {/* Left Side - Text */}
          <Col md={6} className="text-center text-md-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                marginBottom: "10px"
              }}
            >
              Hi, I am <br />
              <span style={{ color: "#ffffff" }}>Mohan K</span>
            </motion.h1>

            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "#a34efc",
                marginBottom: "20px",
                minHeight: "40px"
              }}
            >
              <ReactTyped
                strings={["Front-End Developer", "React Developer", "UI Builder"]}
                typeSpeed={60}
                backSpeed={30}
                loop
              />
            </motion.h4>

            <motion.p
            className="p fw-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              style={{
                fontSize: "1.1rem",
                color: "#d3d3d3",
                lineHeight: "1.7",
                maxWidth: "550px"
              }}
            >
              I’m a fresher front-end developer with skills in HTML, CSS, JavaScript, jQuery, and React. I enjoy creating responsive and interactive web interfaces, and I'm currently learning full-stack development with Java. I’ve built several practical web projects using modern tools, and I’m eager to keep learning and growing in web development.
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <a
                href="/K-Mohan-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-4"
                style={{
                  backgroundColor: "#a34efc",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "1rem",
                  padding: "12px 32px",
                  borderRadius: "40px",
                  boxShadow: "0 0 10px #a34efc",
                  border: "none"
                }}
              >
                View Resume
              </a>
            </motion.div>
          </Col>

          {/* Right Side - Image */}
          <Col md={5} className="text-center mt-5 mt-md-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={profile}
                alt="K. Mohan"
                title="K. Mohan"
                className="rounded-circle"
                style={{
                  width: "360px",
                  height: "360px",
                  border: "4px solid #a34efc",
                  objectFit: "cover",
                  boxShadow: "0 0 20px rgba(163, 78, 252, 0.6)"
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
