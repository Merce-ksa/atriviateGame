import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
// import BoardList from '../board-list/board-list';
import Dashboard from '../dashboard/dashboard';

const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, { onRedirecting: () => <Dashboard /> })}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.shape({}).isRequired
};
