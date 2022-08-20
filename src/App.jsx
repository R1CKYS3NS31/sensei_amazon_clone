import "./App.css";
import { Header } from "./component/header/Header";
import { Home } from "./component/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Checkout } from "./component/checkout/Checkout";
import { Login } from "./component/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { useStateValue } from "./utils/StateProvider";
import { Payment } from "./component/payment/Payment";



function App() {
  const [{},dispatch] = useStateValue()

useEffect(() => {
  // run when App compenent loads
  onAuthStateChanged(auth,(user)=>{
    if (user) {
      // User is signed in
      const uid = user.uid;
      // console.log('user: '+uid);
      dispatch({
        type:'SET_USER',
        user:user
      })
      // ...
    } else {
      // User is signed out
      dispatch({
        type:'SET_USER',
        user:null
      })
      // ...
    }
  
  })
 
}, [])

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path={"/"} exact element={<Home />}></Route>
          <Route path={"/checkout"} element={<Checkout />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/payment" element={<Payment/>}></Route>

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
