import React, { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features.js';
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
            'Created and maintained automation test suites using Selenium, Appium, ReadyAPI, and SQL scripts, reducing testing time by 30%.',
            'Built a custom C# testing tool, reducing testing time by 80%, contributing to a project’s early completion by 8 months.',
            'Developed Selenium frameworks from scratch, supporting tests for 22 unique applications, enhancing test coverage and efficiency.',
            'Implemented a DevOps code deployment strategy, now fully adopted by the QA automation team, improving deployment efficiency by 40%.',
            'Integrating Cucumber.',
            'Integrated Cucumber into Selenium test suites, facilitating Gherkin and BDD project management, streamlining testing processes..',
            'Organized and facilitated defect meetings with developers and team leads, enhancing collaboration and reducing defect resolution time by 25%.'
          ],
        },
        {
          title: 'Old Republic National Insurance Co - Quality Assurance Test Analyst',
          descriptions: [
            'Conducted manual testing of websites, executables, web servers/services, and databases, collaborating closely with the business community to ensure product quality.',
            'Led QA testing for a flagship application integrated with 20 other applications for over 4 years, ensuring seamless operation and integration.',
            'Managed testing efforts for Disaster Recovery, data migrations, and production deployments, ensuring smooth transitions and minimal downtime.',
            'Oversaw testing efforts for events, including Disaster Recovery, data migrations, and frequent involvement in scheduled or emergency production deployments.',
            'Served as a Subject Matter Expert for an application, addressing nationwide user inquiries and providing tailored solutions for diverse use cases.',
            'Trained new team members on corporate applications, technologies, and departmental policies, enhancing team productivity and knowledge transfer.',
          ],
        },
        {
          title: 'Eagle Creek Software Services - Quality Assurance Analyst',
          descriptions: [
            'Conducted testing of ETL workflows using Teradata and PuTTY, ensuring data integrity and process efficiency.',
            'Authored comprehensive test plans, test cases, summaries, and best practices documentation, facilitating team collaboration and project success.',
            'Documented detailed test procedures, ensuring replicability and compliance with industry standards, enhancing process reliability.',
            '•Investigated and resolved customer issues referred by technical support, improving customer satisfaction and product performance.',
            'Worked closely with field staff and customers to diagnose and resolve issues, providing effective solutions and improving product quality.',
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
