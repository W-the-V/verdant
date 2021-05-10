import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Splash from "./Components/Splash";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import "./App.css";

function App() {
  let history = useHistory();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Splash history={history} />
        </Route>
        <Route exact path="/home">
          <NavBar />
          <Home />
        </Route>
        <Route path={`/product`}>
          <NavBar />
          <Product />
        </Route>
        <Route exact path="/cart">
          <NavBar />
          <Cart />
        </Route>
        <Route>
          <NavBar />
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
