import "./App.css";
import { Header } from "./component/header/Header";
import { Home } from "./component/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Checkout } from "./component/checkout/Checkout";
import { Login } from "./component/login/Login";



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path={"/"} exact element={<Home />}></Route>
          <Route path={"/checkout"} element={<Checkout />}></Route>
          <Route path="/login" element={<Login/>}></Route>

          {/* unknown route */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
                <Link to={"/"}>
                  <button
                    style={{ backgroundColor: "green", textDecoration: "none" }}
                  >
                    Home
                  </button>
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
