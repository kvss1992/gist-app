import React from 'react';
import './searchHeader.css';

function SearchHeader ({children}) {
  return(
    <div className="search-header fixed-top">
      {children}
    </div>
  )
}

export default SearchHeader;