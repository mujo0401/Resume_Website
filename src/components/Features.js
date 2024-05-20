import React from 'react';

const Features = ({ title, features }) => (
  <section className="features">
    <h2>{title}</h2>
    <div className="features-list">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <h3>{feature.title}</h3>
          <ul>
            {feature.descriptions.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
