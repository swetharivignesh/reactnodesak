// Services.jsx
import React from 'react';
import Card from '../Card/Card';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleInternshipClick = () => {
    // Navigate to the contact page when asking about internship
    navigate('/contact');
  };

  const handleTrainingClick = () => {
    // Navigate to the contact page when asking about training
    navigate('/contact');
  };

  return (
    <div className="serve-container">
      <div>
      <Card
        title="Internship Opportunities"
        subtitle="Explore exciting internship opportunities with us."
        buttonText="Ask about Internship"
        onClick={handleInternshipClick}
      />
      </div>
      <div>
      <Card
        title="Training Programs"
        subtitle="Join our training programs to enhance your skills."
        buttonText="Ask about Training"
        onClick={handleTrainingClick}
      />
      </div>
    </div>
  );
};

export default Services;
