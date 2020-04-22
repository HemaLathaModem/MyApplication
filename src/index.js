import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import './index.css'

const Footer =() =>
(
    <footer className="footer">
        <p>@copyright</p>
    </footer>
);
 
ReactDOM.render(
 [ <Main/>,               <Footer  /> ],
  document.getElementById("root")
);