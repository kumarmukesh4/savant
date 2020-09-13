import React from 'react';
import { Redirect, Route, Switch, useLocation, useHistory } from "react-router-dom";
import Routes from './common/router/router';


function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
