import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar';
import Sidecontent from './components/layout/Sidecontent';

// Pages
import Home from './pages/Home'
import Library from './pages/Library'
import Store from './pages/Store'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Sidecontent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/library" component={Library} />
          </Switch>
        </Sidecontent>
      </div>
    </Router>
  );
}

export default App;
