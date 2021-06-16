import React from 'react';
import Avatar from '../avatar';
const Forks = ({forks}) => {
  return(
    <ul className="indent-left">
      {forks.map((fork, index) => {
        return (
          <li key={index}>
            <a href={`https://gist.github.com/${fork.id}`} target="_blank">
              <Avatar avatarUrl={fork.user.avatar_url} name={fork.user.login} />
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default Forks;