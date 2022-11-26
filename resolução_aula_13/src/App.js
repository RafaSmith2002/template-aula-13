/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from './rotas/routing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>              
    </div>
  );
}

export default App;
