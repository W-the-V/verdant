import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Splash from "./Components/Splash";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Checkout from "./Components/Checkout";
import NotFound from "./Components/NotFound";
import Cart from "./Components/Cart";
import "./App.css";

function App() {
  let history = useHistory();
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Splash history={history} />
        </Route>
        <Route exact path="/home">
          <NavBar history={history} />
          <Cart showCart={showCart} setShowCart={setShowCart} />
          <Home />
        </Route>
        <Route path={`/product`}>
          <NavBar history={history} />
          <Cart showCart={showCart} setShowCart={setShowCart} />
          <Product />
        </Route>
        <Route exact path="/checkout">
          <NavBar history={history} />
          <Checkout />
        </Route>
        <Route>
          <NavBar history={history} />
          <Cart showCart={showCart} setShowCart={setShowCart} />
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
