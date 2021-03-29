import React from 'react';
import Tingkat3 from './Tingkat3';

export default function Tingkat2(props) {
  return (
    <div className="UserInfo">
      <Tingkat3 user={props.user} />
      <div className="UserInfo-name">user.name: {props.user.name}</div>
      <div className="UserInfo-name">text: {props.text}</div>
    </div>
  );
}