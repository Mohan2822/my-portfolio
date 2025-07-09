import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";

// Resume-based education data
const educationList = [
  {
    title: "B.E - Computer Science Engineering",
    institution: "PGP College of Engineering and Technology, Namakkal (Anna University)",
    duration: "2021 – 2025",
    grade: "CGPA – 7.35",
    description:
      "Chose Computer Science and Engineering in college as my interest shifted more towards technology and software development. Learned core subjects like Programming, Data Structures, Web Development, and Databases. Built practical skills through projects and gained experience in full stack development.",
    icon: <FaGraduationCap color="#61DBFB" />,
  },
  {
    title: "HSC (12th Grade) – Biology Stream",
    institution: "Kamalammal.Mr.Hr.Sec.School, Tanipadi, Tiruvannamalai",
    duration: "2020 – 2021",
    grade: "Percentage – 70.6%",
    description:
      "Studied core subjects including Biology, Mathematics, Physics, and Chemistry. This combination helped me develop both analytical and logical thinking skills. I explored both life sciences and problem-solving through math, which laid a strong foundation for technical learning.",
    icon: <MdSchool color="#f0db4f" />,
  },
  {
    title: "SSLC (10th Grade)",
    institution: "Christu Jyothi.Mr.Hr.School, Thanipadi, Tiruvannamalai",
    duration: "2018 – 2019",
    grade: "Percentage – 59.8%",
    description:
      "Completed foundational education focusing on general science, mathematics, and language skills, setting the stage for higher education.",
    icon: <MdSchool color="#7952B3" />,
  },
  {
    title: "Java Full Stack Developer - SDLC",
    institution: "Skill Development Learning Center, Namakkal",
    duration: "Ongoing (Expected Completion: Aug 2025)",
    grade: "",
    description:
      "Currently gaining hands-on experience in full-stack development using Java, Node.js, Express.js, MongoDB, MySQL, HTML, CSS, JavaScript, Bootstrap, jQuery, JSON, and React. Developing a practical understanding of the software development lifecycle, backend integration, and responsive web design.",
    icon: <SiFuturelearn color="#f29111" />,
  },
];

const Education = () => {
  return (
    <div
      id="Education"
      style={{ backgroundColor: "#0f0f2d", color: "#fff", padding: "80px 0" }}
    >
      <Container>
        {/* Title */}
        <motion.h2
          className="text-center mb-3 display-5 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center mb-5 fs-6 fw-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          style={{color:'#ccc'}}
        >
          My education has shaped my technical skills and career path. Here’s an overview of my academic and ongoing learning journey.
        </motion.p>

        <Row className="justify-content-center gy-4">
          {educationList.map((edu, index) => (
            <Col
              key={index}
              xs={12}
              md={10}
              lg={8}
              className="d-flex justify-content-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 120,
                }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: "#1c1c3c",
                  borderRadius: "12px",
                  padding: "25px",
                  width: "100%",
                  boxShadow: "0 0 15px 0 rgb(123, 0, 255)",
                  position: "relative",
                }}
              >
                {/* Right Vertical Line */}
                <div
                  style={{
                    position: "absolute",
                    top: "10%",
                    right: "0",
                    left:"100%",
                    height: "80%",
                    width: "5px",
                    backgroundColor: "#7b00ff",
                    borderRadius: "6px",
                  }}
                />

                {/* Icon and Text */}
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                  {edu.icon}
                </div>
                <h5 className="fw-bold mb-1">{edu.institution}</h5>
                <p className="text-info mb-1">{edu.title}</p>
                <p className="mb-1">
                  <strong>{edu.duration}</strong>
                </p>
                {edu.grade && (
                  <p className="mb-2">
                    <strong>{edu.grade}</strong>
                  </p>
                )}
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {edu.description}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Education;
