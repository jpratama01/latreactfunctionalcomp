import React, {useContext} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { AuthContext } from '../App';
import { Redirect } from 'react-router-dom';

export default function HomeComp() {
  const {state} = useContext(AuthContext)

  if(!state.isAuthenticated){
    return <Redirect to="/login" />
  }
  
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, {state.user}!</h1>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>  
    </div>
  )
}