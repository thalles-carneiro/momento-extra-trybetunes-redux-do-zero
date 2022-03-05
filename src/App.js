import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppRoutes />
      </Router>
    );
  }
}

export default App;
