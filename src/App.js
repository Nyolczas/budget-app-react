import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
 } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <div>
              About
            </div>
          </Route>
          <Route path="/users">
            <div>
              Users
            </div>
          </Route>
          <Route exact path="/">
            <div>
              Dashboard Page
            </div>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h1>404</h1>
      <h3>
        Az oldal nem létezik: <code>{location.pathname}</code>
      </h3>
      <Link to="/">Vissza a főoldalra</Link>
    </div>
  );
}

export default App;
