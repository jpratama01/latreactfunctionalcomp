import React from 'react';
import Tingkat2 from './Tingkat2';

export default function Tingkat1(props) {
  
  function formatDate(date) {
    return date.toLocaleDateString();
  }

  return (
    <div className="Comment">
      <Tingkat2 user={props.author} />
      {/* <Tingkat2 user={props.author} text={props.text} /> */}
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}