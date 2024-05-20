import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <p>Hello! I'm Joseph Murphy, a passionate Software Automation Test Engineer with a knack for developing efficient and scalable automation frameworks. With extensive experience in various testing tools and programming languages, I strive to ensure the highest quality in software products.</p>
    <p>Over the years, I have honed my skills in manual and automated testing, DevOps strategies, and custom tool development. I enjoy collaborating with teams and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.</p>
    <p>Outside of work, I love exploring the outdoors, participating in hackathons, and contributing to open-source projects. Feel free to connect with me on LinkedIn or reach out via email.</p>
    <Link to="/" className="btn back-btn">Back</Link>
  </section>
);

export default About;
