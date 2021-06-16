import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {lookupSingleGist} from '../../redux/actions/singleGist.actions';
import Forks from '../../components/forks';
import './styles.css';

function GistDetails(props) {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const gistId = props.match.params.id;
    dispatch(lookupSingleGist(gistId));
  },[]);
  
  const {
    isLoading, 
    error, 
    forks
  } = useSelector(state => state.singleGistReducer);
  
  const renderForks = () => {
    
    if(isLoading) {
      return (<p className="text-secondary">Loading ...</p>);
    }
    if(forks.length && !error) {
      return (
        <Forks forks={forks.slice(0,3)}/>
      );
    } else {
      return (
        <span className="text-danger indent-left">{error}</span>
      );
    }
  }

  const {description, files} = props.location.state;
  return (
    <div className="container">
      <div className="details-box">
        <p className="lead">{(description) || 'No Description'}</p>
        <div className="files-box">
          <p className="text-primary">Files:</p>
          <ul className="indent-left">
            {Object.values(files).map((file, index) => {
              return (
                <li key={index} className="text-secondary">
                    <a href={file.raw_url} target="_blank" className="text-secondary">
                      {file.filename}
                    </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="forks-box">
          <p className="text-primary">Forks:</p>
          {renderForks()}
        </div>
      </div>
    </div>
  )
}

export default GistDetails;