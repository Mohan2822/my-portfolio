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
        'service_dfie64b', // ✅ Your EmailJS service ID
        'template_66kcfl8', // ✅ Template ID
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
                  {['name', 'email', 'subject', 'message'].map((field, index) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Form.Group className="mb-3">
                        <Form.Control
                          as={field === 'message' ? 'textarea' : 'input'}
                          type={field !== 'message' ? (field === 'email' ? 'email' : 'text') : undefined}
                          name={field}
                          rows={field === 'message' ? 4 : undefined}
                          placeholder={
                            field === 'name'
                              ? 'Your Name'
                              : field === 'email'
                              ? 'Your Email'
                              : field === 'subject'
                              ? 'Subject'
                              : 'Message'
                          }
                          required={field !== 'subject'}
                          className="custom-placeholder"
                          style={inputStyle}
                        />
                      </Form.Group>
                    </motion.div>
                  ))}

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
