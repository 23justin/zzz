import React, { useState, useEffect } from 'react';
import './TravelGuideList.css'; // Ensure you have a CSS file for styling

const TravelGuideList = ({ guides }) => {
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  useEffect(() => {
    setFilteredGuides(guides); // Initialize filteredGuides with all guides initially
  }, [guides]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterGuides(term, filterLocation);
  };

  const handleFilterLocation = (e) => {
    const location = e.target.value.toLowerCase();
    setFilterLocation(location);
    filterGuides(searchTerm, location);
  };

  const filterGuides = (searchTerm, filterLocation) => {
    let filtered = guides.filter(guide => {
      return (
        guide.title.toLowerCase().includes(searchTerm) &&
        (filterLocation === '' || guide.location.toLowerCase().includes(filterLocation))
      );
    });
    setFilteredGuides(filtered);
  };

  return (
    <div className="guide-list-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={filterLocation}
          onChange={handleFilterLocation}
        />
      </div>
      <div className="guides">
        {filteredGuides.map(guide => (
          <div key={guide.id} className="guide">
            <h2>{guide.title}</h2>
            <p>Location: {guide.location}</p>
            <img src={guide.image} alt={guide.title} />
            <p>{guide.description}</p>
            <button>Explore Guide</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelGuideList;
