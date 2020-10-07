import React from 'react';
import Navbar from './components/layout/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import SingleMeal from './components/meal/SingleMeal';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Error from './components/pages/Error';
import MealState from './context/meal/MealState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <MealState>
      <AlertState>
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/meals/:food" component={SingleMeal} />
            <Route exact path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </div>
      </AlertState>
    </MealState>
  );
};

export default App;
