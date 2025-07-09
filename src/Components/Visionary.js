import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const VisionarySection = () => {
  const cardStyle = {
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 0 15px 0 rgb(123, 0, 255)',
    maxWidth: '850px',
    margin: '0 auto 10px',
  };

  const subtitleStyle = {
    fontSize: '0.9rem',
    color: '#b0b0b0',
    marginBottom: '12px',
  };

  const paragraphStyle = {
    color: '#d0d0d0',
    lineHeight: '1.6',
  };

  const verticalLineStyle = {
    width: '5px',
    backgroundColor: '#6f42c1',
    borderRadius: '16px',
    height: '80%',
     position: "relative",
     left:"120%",
     top:"8%", 
   };

  return (
    <section
      id="Visionary"
      className="text-white py-5"
      style={{
        backgroundColor: '#0f0f2d',
        position: 'relative',
      }}
    >
      <Container>
        <h2 className="text-center fw-bold display-5 mb-2">Visionary</h2>
        <p className="text-center fw-bold mb-4" style={{ fontSize: '1.1rem' }}>
          Launching My Career: A Fresh Perspective on Front-End Development
        </p>

        {/* Row 1 - Personalisation */}
        <Row className="justify-content-center align-items-stretch mb-5 px-3">
          <Col xs={1} className="d-none d-md-flex justify-content-center">
            <div style={verticalLineStyle}></div>
          </Col>
          <Col xs={12} md={9} lg={10}>
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card style={cardStyle}>
                <Card.Title className="fw-bold text-white">Personalisation</Card.Title>
                <Card.Subtitle style={subtitleStyle}>A glimpse of my individuality</Card.Subtitle>
                <Card.Text style={paragraphStyle}>
                  I'm a passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, jQuery, and React. I enjoy turning creative ideas into responsive and user-friendly websites. Whether it's a travel page or a to-do app, I love crafting smooth user interfaces that blend functionality with design. I believe in continuous learning, and I'm always eager to improve my skills by building real-world projects.
                </Card.Text>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Row 2 - Reason to Hire Me */}
        <Row className="justify-content-center align-items-stretch px-3">
          <Col xs={1} className="d-none d-md-flex justify-content-center">
            <div style={verticalLineStyle}></div>
          </Col>
          <Col xs={12} md={9} lg={10}>
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card style={cardStyle}>
                <Card.Title className="fw-bold text-white">Reason to Hire Me</Card.Title>
                <Card.Subtitle style={subtitleStyle}>What Sets Me Apart</Card.Subtitle>
                <Card.Text style={paragraphStyle}>
                  As a fresher in front-end development, I bring energy, adaptability, and a commitment to writing clean, maintainable code. I've built several responsive websites using technologies like React, Bootstrap, and Framer Motion. I'm currently pursuing a Java Full Stack Developer course where I'm expanding my skills with tools like Node.js, MongoDB, and MySQL. My teamwork, problem-solving mindset, and eagerness to learn make me a strong addition to any development team.
                </Card.Text>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisionarySection;
