import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/meals/:id" component={ RecipeDetails } />
        <Route path="/drinks/:id" component={ RecipeDetails } />
        <Route path="/meals" />
        <Route path="/drinks" />
        <Route path="/meals/:id/in-progress" />
        <Route path="/drinks/:id/in-progress" />
        <Route path="/profile" />
        <Route path="/done-recipes" />
        <Route path="/favorite-recipes" />
      </Switch>
    </div>
  );
}

export default App;
