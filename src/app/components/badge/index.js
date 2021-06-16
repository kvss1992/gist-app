import React from 'react';
import './badge.css';

const Badge = ({files}) => {

  let languages  = []; 
  Object.keys(files).map((fileName) => {
    const language = files[fileName].language
    if (languages.indexOf(language) < 0)
      languages.push(files[fileName].language)
  })

  return (
    <React.Fragment>
       <ul>
         {languages &&
          languages?.map((language, index) => {
           return (
            <li 
              className="badge" 
              key={index}
            >
              {language}
            </li>);
          })
        }
        </ul>
    </React.Fragment>
  )
}

export default Badge;