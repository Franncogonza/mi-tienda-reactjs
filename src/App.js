import React from 'react';
import Home from "./components/home-component/home-component";
import Navbar from "./components/navbar-component/NavBar-component";
import ItemListContainer from "./components/itemnListContainer/itemListContainer";

function App() {
  return (
  <div>
    <Navbar />
    <Home greeting="Bienvenidos" />
    <ItemListContainer />
  </div>
  );}

export default App;