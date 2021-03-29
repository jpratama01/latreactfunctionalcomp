import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenuComp from './component/MenuComp';
import LoginComp from './component/LoginComp';
import HomeComp from './component/HomeComp';
import RegisterComp from './component/RegisterComp';
import Publik from './component/Publik';
import ListMahasiswa from './component/ListMahasiswa';
import RoleAkses from './component/RoleAkses';
import UseStateEffect from './component/UseStateEffect';
import UseReducer from './component/UseReducer';
import UseContext from './component/UseContext';

//Context
export const AuthContext = createContext()

//Inisiasi state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  tokenExpires: 0,
  role: 0,

  jumlah: 0,
  hargasatuan: 10000,
  hargatotal: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        tokenExpires: action.payload.expires,
        role: action.payload.role
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
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
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{state, dispatch}}>
          <MenuComp />
          <Route exact path="/" component={Publik}/>
          <Route exact path="/login" component={LoginComp}/>
          <Route exact path="/dashboard" component={HomeComp}/>
          <Route exact path="/register" component = {RegisterComp}/>
          <Route exact path="/mahasiswa" component = {ListMahasiswa}/>
          <Route exact path="/akses" component = {RoleAkses}/>
          <Route exact path="/usestateeffect" component = {UseStateEffect}/>
          <Route exact path="/usereducer" component = {UseReducer}/>
          <Route exact path="/usecontext" component = {UseContext}/>
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}