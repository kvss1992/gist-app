import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Results from './app/screens/results';
import GistDetails from './app/screens/gistDetails';

function App(){
  return (
    <Router>
      <div>
        <Route 
          path="/" 
          exact={true}
          component={Results}
        />
        <Route 
          path="/:id" 
          component={GistDetails} 
        />
      </div>
    </Router>
  )
}

export default App;