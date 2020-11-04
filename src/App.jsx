import Number from "./components/number";
import { useState } from "react";
import "./App.css";
import { Router } from '@reach/router';
import Welcome from "./components/welcome";

function App() {
    
    return (
        <div className="App">
            <Router>
            <Welcome path="/home" /> 
            <Number  path="/:input" />
            <Number  path="/:input/:textcolor" />
            <Number  path="/:input/:textcolor?/:backcolor?" />
            </Router>
        </div>
    );
}

export default App;
