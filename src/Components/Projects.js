import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Import images
import img1 from '../assets/Screenshot (241).png';
import img2 from '../assets/Screenshot (236).png';
import img3 from '../assets/Screenshot (237).png';
import img4 from '../assets/Screenshot (401).png';
import img5 from '../assets/Screenshot (400).png';
import img6 from '../assets/Screenshot (238).png';
import img7 from '../assets/Screenshot (240).png';

// Projects array
const projects = [
  {
    title: "RedStore-Ecommerce-website",
    img: img1,
    description: "RedStore is a responsive e-commerce website for browsing and purchasing a variety of sports materials online. The project is designed with a clean user interface and focuses on a smooth shopping experience across all devices.",
    codeLink: "https://github.com/Mohan2822/RedStore-Ecommerce-website-landing-page.git",
    liveLink: "https://mohan2822.github.io/RedStore-Ecommerce-website-landing-page/",
  },
  {
    title: "Estate-landing-page",
    img: img2,
    description: "Estate Landing Page A responsive and modern real estate landing page built with React, Bootstrap, and Framer Motion. Features include smooth navigation, animated hero section, project showcase, and user authentication routes.",
    codeLink: "https://github.com/Mohan2822/Estate-landing-page.git",
    liveLink: "https://mohan2822.github.io/Estate-landing-page/",
  },
  {
    title: "To-Do-list",
    img: img3,
    description: "A basic to-do list web app using HTML, CSS, and JavaScript. You can add, edit, delete, and mark tasks as complete. Tasks are saved in local storage, and a progress bar shows your completion status. Includes a confetti effect when all tasks are done!",
    codeLink: "https://github.com/Mohan2822/To-Do-list.git",
    liveLink: "https://mohan2822.github.io/To-Do-list/",
  },
   {
    title: "Weather-App",
    img: img4,
    description: "A simple weather app built using HTML, CSS, and JavaScript, which fetches real-time weather data using the OpenWeatherMap API.",
    codeLink: "https://github.com/Mohan2822/WeatherApp.git",
    liveLink: " https://mohan2822.github.io/WeatherApp/",
  },
   {
    title: "Quiz-App",
    img: img5,
    description: "This is a simple and interactive Quiz Web Application developed using HTML, CSS, and JavaScript. The app allows users to test their knowledge on various questions by selecting the correct answers from multiple choices. It's designed to be responsive and user-friendly across devices.",
    codeLink: "https://github.com/Mohan2822/Quiz-app.git",
    liveLink: "https://mohan2822.github.io/Quiz-app/",
  },
  {
    title: "Bootstrap-Website",
    img: img6,
    description: "Delicious Delivered is a food delivery platform offering a variety of dishes from multiple cuisines. Built using Bootstrap for a responsive and user-friendly experience.",
    codeLink: "https://github.com/Mohan2822/Bootsrtapp-Website.git",
    liveLink: "https://mohan2822.github.io/Bootsrtapp-Website/",
  },
  {
    title: "Adventure-Explorer-Landing",
    img: img7,
    description: "Discover breathtaking destinations and outdoor experiences. Whether you're trekking, exploring rainforests, or diving, we bring you the best travel adventures.",
    codeLink: "https://github.com/Mohan2822/adventure-explorer-landing.git",
    liveLink: "https://mohan2822.github.io/adventure-explorer-landing/",
  },
];

// Style constants
const cardStyle = {
  backgroundColor: "#1c1c3c",
  borderRadius: '15px',
  border: '4px solid rgb(123, 0, 255)',
  height: '100%',
  overflow: 'hidden',
};

const imgStyle = {
  objectFit: 'cover',
  borderTopLeftRadius: '13px',
  borderTopRightRadius: '13px',
  height: '200px',
  width: '100%',
};

const Project = () => {
  return (
    <div id="Projects" style={{ backgroundColor: '#0f0f2d', color: '#fff' }}>
      <Container className="py-5">
        {/* Section Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center display-5 fw-bold mb-2">My Projects</h2>
          <p className="text-center fw-bold mb-4" style={{ color: '#ccc' }}>
            A selection of projects I’ve built using modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <Row className="gx-4 gy-4 justify-content-center">
          {projects.map((project, idx) => (
            <Col xs={12} sm={6} lg={4} key={idx} className="d-flex">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-100"
              >
                <Card className="shadow-sm h-100" style={cardStyle}>
                  <Card.Img
                    variant="top"
                    src={project.img}
                    alt={`Preview of ${project.title}`}
                    style={imgStyle}
                  />
                  <Card.Body className="d-flex flex-column p-3">
                    <Card.Title style={{ color: '#ddd' }} className="mb-1">
                      {project.title}
                    </Card.Title>
                    {project.year && (
                      <Card.Subtitle
                        className="mb-2"
                        style={{ color: '#8fa6d8', fontSize: '0.9rem' }}
                      >
                        {project.year}
                      </Card.Subtitle>
                    )}
                    <Card.Text style={{ color: '#ddd' }} className="mb-3" title={project.description}>
                      {project.description.length > 150
                        ? project.description.slice(0, 150) + '...'
                        : project.description}
                    </Card.Text>
                    <div className="mt-auto d-flex justify-content-between">
                      <Button
                        variant="outline-light"
                        size="sm"
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#4c8bff',
                          borderColor: '#4c8bff',
                        }}
                      >
                        View Code
                      </Button>
                      <Button
                        size="sm"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: '#4c8bff',
                          borderColor: '#4c8bff',
                        }}
                      >
                        Live Website
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Project;
