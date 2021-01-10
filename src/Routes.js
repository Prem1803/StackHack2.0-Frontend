import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home'
import Register from './Components/Authentication/Register'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
