import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0f0f2d' }} className="text-white py-5">
      {/* Top horizontal line */}
      <hr
        style={{
          borderColor: 'rgb(255, 255, 255)',
          margin: '0 auto 2rem',
          width: '80%',
        }}
      />

      <Container>
        <Row className="text-center">
          <Col>
            {/* Name */}
            <h5 className="text-primary fs-4">Mohan K</h5>

            {/* Navigation Links */}
            <Nav className="justify-content-center flex-wrap my-3">
              <Nav.Link href="#About" className="text-white-50 px-2">
                About
              </Nav.Link>
              <Nav.Link href="#Skills" className="text-white-50 px-2">
                Skills
              </Nav.Link>
              <Nav.Link href="#Visionary" className="text-white-50 px-2">
                Visionary
              </Nav.Link>
              <Nav.Link href="#Projects" className="text-white-50 px-2">
                Projects
              </Nav.Link>
              <Nav.Link href="#Education" className="text-white-50 px-2">
                Education
              </Nav.Link>
            </Nav>

            {/* Social Icons */}
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 fs-5">
              <a href="tel:+916382307145" className="text-white" aria-label="Phone">
                <FaPhoneAlt />
              </a>
              <a href="mailto:mohan.jobs2025@gmail.com" className="text-white" aria-label="Email">
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/mohanjob2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Mohan2822"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/916382307145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Bottom horizontal line */}
            <hr
              style={{
                borderColor: 'rgb(255, 255, 255)',
                margin: '2rem auto 1rem',
                width: '80%',
              }}
            />

            {/* Copyright */}
            <p className="mt-3 text-white-50">
              © 2025 Mohan K. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
