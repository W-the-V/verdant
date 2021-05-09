import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Splash from "./Components/Splash";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Splash />
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
