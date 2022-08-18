import "./App.css";
import { Header } from "./component/header/Header";
import { Home } from "./component/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkout } from "./component/checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/checkout"} exact>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
