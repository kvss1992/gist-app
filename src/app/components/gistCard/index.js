import React from 'react';
import {Link} from 'react-router-dom';
import Badge from '../badge';

import './gistCardStyle.css'

const GistCard = ({gistData}) => {
  //  Calculating the number of the files to display either "file" or "files"
  //  based on occurrence
  const numberOfFiles = Object.keys(gistData.files).length;
  return(
    <React.Fragment>
      <Link to={{pathname: `/${gistData.id}`, state: {description: gistData.description, files: gistData.files}}}>
        <li className="list-row">
          <p className="lead">{(gistData.description) || 'No Description'}</p>
          <p className="text-secondary">{numberOfFiles} {(numberOfFiles > 1) ? 'Files' : 'File'}</p>
          <Badge files={gistData.files}/>
        </li>
      </Link>
    </React.Fragment>
  )
}

export default GistCard;