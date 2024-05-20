import React, { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Home = () => {
  const [sections, setSections] = useState([
    {
      id: '1',
      title: 'Professional Experience',
      features: [
        {
          title: 'Old Republic National Insurance Co - Automation Test Engineer',
          descriptions: [
            'Responsible for creating and maintaining automation test suites, through Selenium, Appium, ReadyAPI and SQL scripts.',
            'Built a custom C# testing tool that reduced testing time by 80% and helped contribute to a project completing 8 months early.',
            'Developed Selenium frameworks from scratch, the largest containing tests for 22 unique applications.',
            'Integrated Cucumber into an established Selenium test suite that helped with the use of Gherkin and BDD project management.',
            'Integrating Cucumber.',
            'Organized and attended open defect meetings with developers and team leads that improved collaboration and lead to quicker solutions.',
          ],
        },
        {
          title: 'Old Republic National Insurance Co - Quality Assurance Test Analyst',
          descriptions: [
            'Manual testing of websites or executables, web servers/services, and databases, along with working closely with the business community.',
            'Principal QA tester for over 4 years on a flagship application that had integrations with 20 other applications.',
            'Oversaw testing efforts for events, including Disaster Recovery, data migrations, and frequent involvement in scheduled or emergency production deployments.',
            'Acted as a SME on an application and answered questions from users located nationwide and had different use cases.',
            'Trained new team members on the large scope of corporate applications, required technologies, and departmental policies.',
          ],
        },
        {
          title: 'Eagle Creek Software Services - Quality Assurance Analyst',
          descriptions: [
            'Participated in work contracts that required testing of ETL workflows using Teradata and PuTTY',
            'Authored test plans, test cases, test summaries, use case guides, and best practices documentation for team building.',
            'Documented test procedures to produce replicability and compliance with standards.',
            'Investigated customer problems referred by technical support.',
            'Collaborated with field staff and customers to evaluate and diagnose problems and recommended solutions.',
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Professional Skills',
      features: [
        {
          title: 'Programming Languages',
          descriptions: ['C#, MSSQL, VB, JS, TS, Java, Python'],
        },
        {
          title: 'Testing Tools',
          descriptions: [
            'Selenium, Appium, Browserstack, ReadyAPI, Postman, ADO/GIT CI workflow',
          ],
        },
        {
          title: 'Other Tools',
          descriptions: [
            'UIPath, TestConnect, Json, HTML, CSS, Jenkins, NUnit, Web Design, Restful Services, VMWare, Node.js',
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'Education',
      features: [
        {
          title: 'Bachelor of Arts in Business Information Systems',
          descriptions: [
            'St. Cloud State University, 2009',
            'Relevant Courses: Data Structures, Algorithms, Operating Systems, Computer Networks',
          ],
        },
      ],
    },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newSections = Array.from(sections);
    const [removed] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, removed);

    setSections(newSections);
  };

  return (
    <div className="home-container">
      <Hero />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections" type="SECTION">
          {(provided) => (
            <div
              className="content-grid"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided) => (
                    <div
                      className="section"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Features title={section.title} features={section.features} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Contact />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
