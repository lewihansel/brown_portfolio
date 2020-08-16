import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div layout className="pageContainer">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </motion.div>
  );
}

export default App;
