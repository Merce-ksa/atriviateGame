import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { Helmet } from 'react-helmet';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import BoardList from './components/board-list/board-list';
import BoardDetail from './components/board-detail/board-detail';
import TrivialGame from './components/trivial-game/trivial-game';
import PrivateRoute from './components/privateRoute/privateroute';
import Profile from './components/profile/profile';

import store from './redux/stores/configure-store';

function App() {
  return (
    <Provider store={store}>
      <Helmet>
        <meta property="og:title" content="aTriviate" />
        <meta property="og:image" content="../public/img/atriviate-logo" />
        <meta property="og:description" content="Application trivial game" />
        <meta property="og:url" content="//atriviate.netlify.app/" />
        <title>aTriviate</title>
      </Helmet>
      <Auth0Provider
        domain={process.env.REACT_APP_domain}
        clientId={process.env.REACT_APP_clientID}
        redirectUri={process.env.REACT_APP_redirectUri}
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/boardlist" component={BoardList} />
            <PrivateRoute path="/edit/:id" exact component={BoardDetail} />
            <PrivateRoute path="/edit" component={BoardDetail} />
            <PrivateRoute path="/game/:id" component={TrivialGame} />
          </Switch>
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  );
}

export default App;
