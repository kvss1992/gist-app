import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {lookupAllGists} from '../../redux/actions/allGists.actions'

function SearchForm() {
  
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(lookupAllGists(userName));
  }
  return(
    <form 
      onSubmit={handleSubmit}
      className="searchform"
    >
      <label />
      <input
        className="form-control" 
        type="text"
        placeholder="Search for a user, eg. markerikson."
        onChange={e => setUserName(e.target.value)}
      />
      {/* <button>Magic!</button> */}
    </form>
  )
}

export default SearchForm;