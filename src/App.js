import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Vtubers } from './pages/Vtubers';
import { Profile } from './pages/Profile';
import { Navbar } from './components/navbar';
import { Missing } from './pages/Missing';
import { Socials } from './pages/Socials';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { CreateVtuber } from './pages/CreateVtuber';
import { UpdateVtuber } from './pages/UpdateVtuber';

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          <Navbar />
          <Switch>
            <Route path="/vtubers" component={Vtubers} />
            {/* <Route path="/profile/:id/posts" component={Profile} /> This is for a future implementation  */}
            {/* <Route path="/profile/:id/community" component={Profile} /> This is for a future implementation */}
            <Route path="/profile/:id/socials" component={Socials} />
            <Route path="/profile/:name" component={Profile} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/createvtuber" component={CreateVtuber} />
            <Route path="/updatevtuber/:name" component={UpdateVtuber} />
            <Route path="/" component={Missing} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
