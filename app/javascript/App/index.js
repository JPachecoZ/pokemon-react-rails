import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Map from "../pages/Map";

export default function App(){
  const [pokemons, setPokemons] = useState([]);
  const [cartData, setCartData] = useState([]);
  const handlePokemons = (data) => setPokemons(data);

  function handleAddToCart(pokemon){
    const newData = {...cartData, pokemon}
    setCartData(newData);
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage handlePokemons={handlePokemons}/>}/>
        <Route path="/map" element={<Map pokemons={pokemons} handleAddToCart={handleAddToCart}/>}/>
        <Route path="/cart" element={<CartPage data={cartData}/>}/>
      </Routes>
    </BrowserRouter>
  )
}