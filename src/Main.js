import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Coupons from "./Coupons";
import About from "./About";
import News from "./News";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>My Kupons</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/coupons">Coupons</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
            <Route path="/coupons" component={Coupons}/>
            <Route path="/about" component={About}/>
            <Route path="/news"  component={News}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;