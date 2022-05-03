//import React from "react"
import { useState, useEffect } from "react"
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`

export default function HomePage(){

  const[locations, setLocations] = useState([]);
  const[areas, setAreas] = useState([]);
  const[pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/region/kanto/")
      .then(response => response.json())
      .then(data => setLocations(data.locations));
  }, []);

  function handleClick(e, location){
    e.preventDefault();
    fetch(location.url)
      .then(response => response.json())
      .then(data => {
        setAreas(data.areas);
        setPokemons("");
      });
  };

  function handleClickPoke(e, area){
    e.preventDefault();
    fetch(area.url)
      .then(response => response.json())
      .then(data => setPokemons(data.pokemon_encounters));
  };

  return(
    <Container>
      <ul>
        {locations ? locations.map(location => {
          return (<li style={{cursor: "pointer"}} key={location.name} onClick={e =>handleClick(e, location)}>{location.name}</li>)
        }) : ""}
      </ul>
      <ul>
        {areas ? areas.map(area => {
          return <li style={{cursor: "pointer"}} key={area.name} onClick={e =>handleClickPoke(e, area)}>{area.name}</li>
        }): ""}
      </ul>
      <ul>
        {pokemons ? pokemons.map(pokemon => {
          return <li style={{cursor: "pointer"}} key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
        }): ""}
      </ul>
    </Container>
  )
}