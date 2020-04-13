import React from 'react';
import { 
    Link,
    useLocation
   } from 'react-router-dom';

function NoMatchPage() {
    let location = useLocation();
  
    return (
      <div>
        <h1>404!</h1>
        <h3>
          Az oldal nem létezik: <code>{location.pathname}</code>
        </h3>
        <Link to="/">Vissza a főoldalra</Link>
      </div>
    );
}

export default NoMatchPage;