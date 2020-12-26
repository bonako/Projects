import React from 'react';
import logo from './logo.svg';
import home from './components/home'
import create from './components/create'
import profile from './components/profile'
import story from './components/story'
import view from './components/view'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import './navbar.css'
import './bootstrap.css'
import history from './components/history';


class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/" >Home</NavLink>
            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/view" >View</NavLink>
            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/create" >Create</NavLink>
            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/profile" >Profile</NavLink>
          </nav>

          <hr />

          <Switch>
              <Route exact path='/' component={home} />
              <Route path='/view' component={view} />
              <Route path='/create' component={create} />
              <Route path='/profile' component={profile} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;