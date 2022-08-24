import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Detail } from './pages/Detail';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/detail" exact component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
