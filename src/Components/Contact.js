import React, { useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dfie64b', // ✅ Your EmailJS Service ID
        'template_66kcfl8', // ✅ Your Template ID
        formRef.current,
        'atH9AMr0yxhZGvtUn' // ✅ Your Public Key
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error('❌ EmailJS error:', error);
          alert('❌ Failed to send message. Please try again.');
        }
      );
  };

  const inputStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    border: '1px solid #555',
    color: '#fff',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '16px',
  };

  return (
    <div id="Contact" style={{ backgroundColor: '#0f0f2d', minHeight: '100vh', padding: '80px 0' }}>
      <Container>
        <h2 className="text-white text-center fw-bold mb-2 display-5">Contact</h2>
        <p style={{ color: '#ccc' }} className="text-center mb-5 fw-bold">
          Feel free to reach out to me for any questions or job opportunities!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Row className="justify-content-center">
            <Col md={10} lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="p-4"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '20px',
                  boxShadow: '0 0 20px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <h4 className="text-white mb-4">Email Me</h4>
                <Form ref={formRef} onSubmit={sendEmail}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="custom-placeholder"
                        style={inputStyle}
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="user_email" // ✅ Updated for auto-reply
                        placeholder="Your Email"
                        required
                        className="custom-placeholder"
                        style={inputStyle}
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="custom-placeholder"
                        style={inputStyle}
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Message"
                        required
                        className="custom-placeholder"
                        style={inputStyle}
                      />
                    </Form.Group>
                  </motion.div>

                  {/* Optional: add time field if needed by your EmailJS template */}
                  <input type="hidden" name="time" value={new Date().toLocaleString()} />

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      className="w-100 fw-bold"
                      style={{
                        background: 'linear-gradient(to right, #a100ff, #e400ff)',
                        border: 'none',
                        padding: '12px',
                        borderRadius: '8px',
                        fontSize: '16px',
                      }}
                    >
                      Send
                    </Button>
                  </motion.div>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <style>{`
        .custom-placeholder::placeholder {
          color: #b3b3b3 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
