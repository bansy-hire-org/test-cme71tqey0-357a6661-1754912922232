import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './components/ClientList';
import ClientDetails from './components/ClientDetails';
import ProjectList from './components/ProjectList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/clients" component={ClientList} />
          <Route path="/clients/:id" component={ClientDetails} />
          <Route exact path="/projects" component={ProjectList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;