import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./Components/Splash";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="App">
      {loaded && <NavBar />}
      <Switch>
        <Route exact path="/">
          {!loaded && <Splash setLoaded={setLoaded} />}
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path={`/product`}>
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
