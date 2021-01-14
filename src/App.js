import React from 'react';

import Home from "./components/home-component/home-component";
import Navbar from "./components/navbar-component/NavBar-component";

function App() {
  return (
  <div>
    <Navbar />
    <Home greeting="Bienvenidos" />
  </div>
  );}

export default App;