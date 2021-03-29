import React from 'react';
import { Jumbotron } from 'reactstrap';
import Welcome from './Welcome';
import Tingkat1 from './Tingkat1';

function Publik(props) {

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  
  return (
    <>
      <Jumbotron>
        <h1 className="display-3">Latihan React Functional Component</h1>
        <h2>1. props</h2>
        <Welcome name='Sara' />
        <Tingkat1
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
      </Jumbotron>
    </>
  )
}

export default Publik
