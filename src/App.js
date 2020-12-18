import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Vtubers } from './pages/Vtubers';
import { Profile } from './pages/Profile';
import { Navbar } from './components/navbar';
import './App.css';

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/vtubers" component={Vtubers} />
            <Route path="/:id/posts" component={Profile} />
            <Route path="/:id/community" component={Profile} />
            <Route path="/:id/socials" component={Profile} />
            <Route path="/:id" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
