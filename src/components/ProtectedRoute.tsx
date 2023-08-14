import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import React from 'react';
import {UserContext} from '../App';
import Loading from './Loading';

interface ProtectedRouteProps {
  route: 'results' | 'test' | 'loggedOut';
  component: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props: ProtectedRouteProps) => {
  const {user} = useContext(UserContext);

  if (props.route === 'results') {
    if (user.loggedIn === undefined || user.completed === undefined) {
      return <Loading />;
    } else {
      return user.loggedIn === 'loggedIn' && user.completed === 'completed' ? (
        props.component
      ) : (
        <Navigate to={'/'} replace />
      );
    }
  } else if (props.route === 'test') {
    if (user.loggedIn === undefined || user.completed === undefined) {
      return <Loading />;
    } else {
      return user.loggedIn === 'loggedIn' && user.completed !== 'completed' ? (
        props.component
      ) : (
        <Navigate to={'/'} replace />
      );
    }
  } else if (props.route === 'loggedOut') {
    if (user.loggedIn === undefined) {
      return <Loading />;
    } else {
      return user.loggedIn !== 'loggedIn' ? props.component : <Navigate to={'/'} replace />;
    }
  }

  return <Navigate to={'/'} replace />;
};

export default ProtectedRoute;
