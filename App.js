import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; // Ensure you have a CSS file for global styling
import Home from './components/Home'; // Import your Home component
import TravelGuideList from './components/TravelGuideList'; // Import your TravelGuideList component
import TravelGuideDetails from './components/TravelGuideDetails'; // Import your TravelGuideDetails component
import Login from './components/Login'; // Import your Login component
import SignUp from './components/SignUp'; // Import your SignUp component

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Home Page Route */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* Travel Guide List Route */}
          <Route exact path="/guides">
            <TravelGuideList />
          </Route>

          {/* Travel Guide Details Route */}
          <Route path="/guides/:id">
            <TravelGuideDetails />
          </Route>

          {/* Login Route */}
          <Route path="/login">
            <Login />
          </Route>

          {/* SignUp Route */}
          <Route path="/signup">
            <SignUp />
          </Route>

          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
