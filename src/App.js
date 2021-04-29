import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar';
import Sidecontent from './components/layout/Sidecontent';

// Pages
import Home from './pages/Home'
import Library from './pages/Library'
import Store from './pages/Store'

import './App.css';


function App() {

  const [state, setState] = useState({
    isDownloadActive: false
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Sidebar state={state} setState={setState} />
        <Sidecontent state={state} setState={setState}>
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
