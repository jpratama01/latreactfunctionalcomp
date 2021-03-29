import React, {useReducer} from 'react';
import { Jumbotron, Button } from 'reactstrap';
// import { AuthContext } from '../App';
import {NavLink} from 'react-router-dom';

const initialState = {
  jumlah: 0,
  hargasatuan: 10000,
  hargatotal: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      };
    case 'decrement':
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan};
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  // const {state, dispatch} = useContext(AuthContext)
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Jumbotron>
        <h3>3. useReducer ( + useContext)</h3>
        <p>Harga satuan: 10000</p>
        <p>Jumlah: {state.jumlah}</p>
        <p>
          <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
          <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
        </p>
        <p>Total: {state.hargatotal}</p>
        <NavLink to='/usecontext'>Pembayaran Tagihan</NavLink>
      </Jumbotron>
    </>
  );
}