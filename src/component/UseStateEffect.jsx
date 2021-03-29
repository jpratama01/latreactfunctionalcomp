import React, {useState, useEffect} from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default function UseStateEffect() {
  const [nilai, setNilai] = useState(0);

  useEffect(() => {
    document.title = `Sudah diklik ${nilai} kali`;
  });

  return (
    <>
      <Jumbotron>
        <h1>2. useState/useEffect</h1>
        <p>Sudah diklik {nilai} kali</p>
        <p className="lead">
          <Button color="primary" onClick={() => {setNilai(nilai-1)}}>-</Button>
          <Button color="primary" onClick={() => {setNilai(nilai+1)}}>+</Button>
        </p>
      </Jumbotron>
    </>
  );
}