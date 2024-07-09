import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const TravelGuideCard = ({ travelGuide, deleteTravelGuide, id }) => {
  return (
    <div className="card">
      <h2>{travelGuide.title}</h2>
      <img src={travelGuide.image} alt={travelGuide.title} />
      <p>{travelGuide.description}</p>
      <Link to={`/travelguides/${id}`}><button>Learn More</button></Link>
      <button onClick={() => deleteTravelGuide(id)}>Delete Travel Guide</button>
    </div>
  );
};

export default TravelGuideCard;
