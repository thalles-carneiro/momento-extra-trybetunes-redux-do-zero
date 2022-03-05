import React, { Component } from 'react';

import { Header, FormProfileEdit } from '../components';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <FormProfileEdit />
      </div>
    );
  }
}

export default ProfileEdit;
