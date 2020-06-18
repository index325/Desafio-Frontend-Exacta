import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../screens/Home";
import ListAll from "../screens/ListAll";
import Edit from "../screens/Edit";
import { UserProvider } from "../contexts/users";

const Routes = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={ListAll} path="/list-all" />
        <Route component={Edit} path="/edit/:id" />
      </BrowserRouter>
    </UserProvider>
  );
};

export default Routes;
