import React, { Component } from 'react';

import { Header, ProfileCard } from '../components';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <ProfileCard />
      </div>
    );
  }
}

export default Profile;
