import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h3>Welcome to our travel haven, a sanctuary where the world of travel guides awaits you.</h3>
        <Link to="/login"><button className='login-btnn'>Login/Signup</button></Link>
        <h1>Featured Travel Guides</h1>
      </header>
      <section className="featured-guides">
        <div className="guide-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Eiffel_Tower_from_the_Trocadero%2C_Paris_5_February_2019.jpg" alt="Paris" />
          <h3>Explore Paris</h3>
          <p>A comprehensive guide to the city of lights.</p>
        </div>
        <div className="guide-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/New_York_City_at_night_HDR.jpg" alt="New York" />
          <h3>New York City</h3>
          <p>The ultimate travel guide to the Big Apple.</p>
        </div>
        <div className="guide-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Great_Wall_of_China_July_2006.JPG" alt="Great Wall of China" />
          <h3>Great Wall of China</h3>
          <p>A journey through China's ancient wonder.</p>
        </div>
      </section>
      <footer className="contact">
        <h2>Contact Us</h2>
        <p>Email: travelguides@example.com</p>
        <p>Phone: +1234567899</p>
      </footer>
    </div>
  );
};

export default Home;
