import React, {useContext} from 'react';
import { AuthContext } from '../App';
import { Jumbotron} from 'reactstrap';

export default function UseContext() {
  const {state} = useContext(AuthContext)
  return(
    <>
      <Jumbotron>
        <p>Jumlah : {state.jumlah}</p>
        <p>Total : {state.hargatotal}</p>
      </Jumbotron>
    </>
  )
}