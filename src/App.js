import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

 import HomePage from './components/HomePage';
 import CreatePage from './components/CreatePage';
 import EditPage from './components/EditPage';
 import NoMatchPage from './components/NoMatchPage';

function App() {
  return (
    <Router>
      <div>
        <h1>Költségvető</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Főoldal</Link>
            </li>
            <li>
              <Link to="/create">Létrehozás</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/edit/:id" component={EditPage} />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
