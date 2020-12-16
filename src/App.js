import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
