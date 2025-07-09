import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaBriefcase } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0f0f2d' }} className="text-white py-5">
      {/* Top horizontal line */}
      <hr style={{ borderColor: 'rgb(255, 255, 255)', margin: '0 auto 2rem', width: '80%' }} />

      <Container>
        <Row className="text-center">
          <Col>
            <h5 className="text-primary fs-4">Mohan K</h5>

            <Nav className="justify-content-center">
              <Nav.Link href="#About" className="text-white-50">About</Nav.Link>
              <Nav.Link href="#Skills" className="text-white-50">Skills</Nav.Link>
              <Nav.Link href="#Visionary" className="text-white-50">Visionary</Nav.Link>
              <Nav.Link href="#Projects" className="text-white-50">Projects</Nav.Link>
              <Nav.Link href="#Education" className="text-white-50">Education</Nav.Link>
            </Nav>

            <div className="mt-3">
              <a href="tel:+91 6382307145" className="text-white mx-2 fs-5"><FaPhoneAlt /></a>
              <a href="mailto:mohanpgpcet@gmail.com" className="text-white mx-2 fs-5"><FaEnvelope /></a>
              <a href="www.linkedin.com/in/mohan2822" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-5"><FaLinkedin /></a>
              <a href="https://github.com/Mohan2822" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-5"><FaGithub /></a>
              <a href="https://www.naukri.com/mnjuser/homepage?utm_source=google&utm_medium=cpc&utm_campaign=Brand" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-5"><FaBriefcase /></a>
              <a href="https://wa.me/6382307145" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-5"><FaWhatsapp /></a>
            </div>

            {/* Bottom horizontal line just below icons */}
            <hr style={{ borderColor: 'rgb(255, 255, 255)', margin: '2rem auto 1rem', width: '80%' }} />

            <p className="mt-3 text-white-50">© 2025 Mohan K. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
