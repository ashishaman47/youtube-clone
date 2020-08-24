import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        {/* Header */}
        {/* if something is plced outside switch it always comes up */}
        <Header />
        <Switch>
          {/* sending the search text to our URL */}
          <Route path='/search/:searchTerm'>
            <div className='app__page'>
              {/* Sidebar --> 20% */}
              <Sidebar />

              {/* Recommended Videos --> 80% */}
              <SearchPage />
            </div>
          </Route>
          <Route path='/'>
            <div className='app__page'>
              {/* Sidebar --> 20% */}
              <Sidebar />

              {/* Recommended Videos --> 80% */}
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
