import React, { useContext } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../App';

export default function RoleAkses() {
  const { state } = useContext(AuthContext)

  if (!state.isAuthenticated) {
    return <Redirect to="/login" />
  }
  return (
    <div>
        <Jumbotron>
            <h1 className="display-3">Halaman Role {state.role} yaitu {state.user} </h1><p className="lead">
                <Button color="primary">Learn More</Button>
            </p>
        </Jumbotron>
    </div>
  )
}