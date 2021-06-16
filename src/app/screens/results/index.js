import React from 'react';

import SearchHeader from '../../components/searchHeader';
import SearchForm from '../../components/searchForm';
import SearchResults from '../../components/searchResults';

function Results() {
    return (
      <div>
        <SearchHeader>
          <SearchForm />
          </SearchHeader>
          <div className="container">
            <SearchResults />
          </div>
      </div>     
    )
}

export default Results;