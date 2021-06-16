import React from 'react';
import { useSelector } from 'react-redux';
import GistCard from '../gistCard';
import './searchResults.css';

function SearchResults() {
  const {
    gists,
    userName,
    isLoading,
    error
  } = useSelector(state => state.allGistsReducer);
  
  if(isLoading){
    return (
      <div className="results-box loader">
        <h4>Loading...</h4>
      </div>
    )
  }
  
  return (
    <div className="results-box">
      {
        (gists.length &&  !error) ? (
          <React.Fragment>
            <div className="status-box">
              <p className="lead">
                <strong>{gists.length}</strong> results found for <strong>{userName}</strong>
              </p>
            </div>
            <ul>
              {gists.map(gist => (
                <GistCard
                  key={gist.id}
                  gistData={gist}
                />
                ))
              }
            </ul>
          </React.Fragment>
        ) : (
          <div className='error-box'>
            <p className="text-danger">{error}</p>
          </div>
        )
      }
    </div>
  )
}

export default SearchResults;