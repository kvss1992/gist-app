import React from 'react';
import './avatarStyles.css';

const Avatar = ({avatarUrl, name}) => {
  return [
    <img key="image" src={avatarUrl} alt={name} className="avatar"/>,
    <span key="username" className="text-secondary">{name}</span>
  ]
}

export default Avatar;