import React, { useState, useContext } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../App';

function menuAdmin() {
  return  <Nav className="mr-auto" navbar>
            <NavItem><NavLink to="/dashboard" className="nav-link">HOME</NavLink></NavItem>
            <NavItem><NavLink to="/akses" className="nav-link">AKSES</NavLink></NavItem>
            <NavItem><NavLink to="/mahasiswa" className="nav-link">MAHASISWA</NavLink></NavItem>
          </Nav>
}

function menuStaff() {
  return  <Nav className="mr-auto" navbar>
            <NavItem><NavLink to="/dashboard" className="nav-link">HOME</NavLink></NavItem>
            <NavItem><NavLink to="/akses" className="nav-link">AKSES</NavLink></NavItem>
            <NavItem><NavLink to="/mahasiswa" className="nav-link">MAHASISWA</NavLink></NavItem>
          </Nav>
}

function menuMember() {
  return  <Nav className="mr-auto" navbar>
            <NavItem><NavLink to="/mahasiswa" className="nav-link">MAHASISWA</NavLink></NavItem>
          </Nav>
}

function menuPublik() {
  return  <Nav className="mr-auto" navbar>
            <NavItem><NavLink to="/usestateeffect" className="nav-link">Use State/Use Effect</NavLink></NavItem>
            <NavItem><NavLink to="/usereducer" className="nav-link">useReducer</NavLink></NavItem>
          </Nav>
}

function tombolLogout(dispatch) {
  return <Button color="success" onClick={() => dispatch({type: "LOGOUT"})}>LOGOUT</Button>
}

function tombolLogin() {
  return <NavLink to="/login">LOGIN</NavLink>
}

export default function MenuComp() {
  const { dispatch, state } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-dark bg-dark" expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {state.role === 'admin' ? menuAdmin() : ''}
          {state.role === 'staff' ? menuStaff() : ''}
          {state.role === 'member' ? menuMember() : ''}
          {state.role === 'admin' || 'staff' || 'member' ? menuPublik() : ''}
          <NavbarText>
            {state.isAuthenticated ? tombolLogout(dispatch) : tombolLogin()}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}