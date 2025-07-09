import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGithub
} from "react-icons/fa";
import { SiJquery, SiJson } from "react-icons/si";

// Skill Data
const skills = [
  { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
  { name: "JSON", icon: <SiJson color="#f29111" /> },
  { name: "React Js", icon: <FaReact color="#61DBFB" /> },
  { name: "GitHub", icon: <FaGithub color="#fff" /> },
];

const FrontendSkills = () => {
  return (
    <div
      id="Skills"
      style={{ backgroundColor: "#0f0f2d", color: "#fff", padding: "80px 0" }}
    >
      <Container>
        {/* Title Animation */}
        <motion.h2
          className="text-center mb-3 display-5 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frontend Skills
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          className="p text-center mb-5 fs-6 fw-6 fw-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technologies I use to build beautiful and functional websites
        </motion.p>

        {/* Skills Grid - 4 Columns, 2 Rows */}
        <Row className="justify-content-center justify-evenly gy-3 px-0 ">
          {skills.map((skill, index) => (
            <Col
              key={skill.name}
              xs={6}
              sm={6}
              md={3}
              lg={3}
              className="d-flex justify-content-center mb-4 py-2 "
            >
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.10,
                  type: "spring",
                  stiffness: 120,
                }}
                viewport={{ once: true }}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#1c1c3c",
                  borderRadius: "12px",
                  padding: "20px",
                  width: "100%",
                  maxWidth: "130px",
                  minHeight: "130px",
                  boxShadow: "0 0 15px 0 rgb(123, 0, 255)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                  {skill.icon}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: "500" }}>
                  {skill.name}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FrontendSkills;
