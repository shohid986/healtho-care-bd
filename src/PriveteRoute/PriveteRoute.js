import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../Hooks/useFirebase';

const PriveteRoute = ({children, ...rest}) => {
  const {user, handleGoogleSign, isLoading} = useFirebase();
  console.log("from privete route", user, handleGoogleSign)
  if(isLoading){
    return <Spinner animation="border" variant="primary" />
}
    return (
        <Route
      {...rest}
      render={({ location }) =>
          user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PriveteRoute;