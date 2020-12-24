import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Vtubers } from './pages/Vtubers';
import { Profile } from './pages/Profile';
import { Navbar } from './components/navbar';
import { Missing } from './pages/Missing';
import { Socials } from './pages/Socials';
import './App.css';

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          <Navbar />
          <Switch>
            <Route path="/vtubers" component={Vtubers} />
            {/* <Route path="/profile/:id/posts" component={Profile} /> */}
            {/* <Route path="/profile/:id/community" component={Profile} /> */}
            <Route path="/profile/:id/socials" component={Socials} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Missing} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
