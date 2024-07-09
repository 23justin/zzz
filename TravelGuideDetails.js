import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TravelGuideDetails.css'; // Ensure you have a CSS file for styling

const TravelGuideDetails = () => {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [buttonText, setButtonText] = useState('Rate this guide');

  useEffect(() => {
    const fetchGuideDetails = async () => {
      try {
        const response = await fetch(`https://your-api-url.com/guides/${id}`);
        const data = await response.json();
        setGuide(data);
      } catch (error) {
        console.error('Error fetching guide details:', error);
      }
    };

    fetchGuideDetails();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://your-api-url.com/guides/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, review }),
      });

      if (!response.ok) {
        throw new Error('Failed to rate the guide');
      }

      alert('Rating and review submitted successfully');
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting rating and review:', error);
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
    if (showForm) {
      setButtonText('Rate this guide');
    } else {
      setButtonText('Close Rating');
    }
  };

  if (!guide) return <div><h1 className='details-loading'>Getting Details...</h1></div>;

  return (
    <div className="guide-details-container">
      <div className="image-container">
        <img src={guide.image} alt={guide.title} />
        <a href={guide.link} target="_blank" rel="noopener noreferrer">Visit Guide</a>
      </div>
      <div className="details-container">
        <h1>Title: {guide.title}</h1>
        <p><strong>Location: </strong>{guide.location}</p>
        <h3>Author: {guide.author}</h3>
        <p><strong>Description:</strong> {guide.description}</p>
        <p><strong>Rating:</strong> {guide.rating}/5</p>
        <p><strong>Reviews:</strong></p>
        <ul>
          {guide.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
        <button onClick={toggleFormVisibility} className='guide-rating-btn'>{buttonText}</button>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="rating">Rate this guide:</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              required
            />
            <label htmlFor="review">Your Review:</label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              required
            ></textarea>
            <button type="submit">Submit Rating and Review</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TravelGuideDetails;
