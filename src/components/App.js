import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import SignUp from "./SignUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </div>
  );
};

export default App;
