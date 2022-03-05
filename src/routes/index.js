import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Pages from '../pages';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Pages.Login } />

        <Route path="/album/:id" component={ Pages.Album } />

        <Route path="/favorites" component={ Pages.Favorites } />

        <Route path="/profile/edit" component={ Pages.ProfileEdit } />

        <Route path="/profile" component={ Pages.Profile } />

        <Route path="*" component={ Pages.NotFound } />
      </Switch>
    );
  }
}

export default AppRoutes;
