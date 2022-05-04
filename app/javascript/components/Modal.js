import React from "react";
import styled from "@emotion/styled";

export default function Modal(props){

  const pokemon = {
    name: "diglett",
    level: 15,
    picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  }
  const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(23 23 23 / 75%);
    display:flex;
    justify-content: center;
    align-items: center;
  `

  const Card = styled.div`
    width: 15rem;
    height: 20rem;
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Title = styled.div`
    font-size: large;
    text-align: center;
  `

  const Text = styled.p`
    font-size: medium;
    text-align: center;
  `

  const Picture = styled.img`
    height: 10rem;
    width: 10rem;
  `

  const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Button = styled.button`
    margin: 1rem;
  `

  function handleLeaveClick(e){
    e.preventDefault();
    alert("closed!");
  }
  
  function handleCaptureClick(e){
    e.preventDefault();
    alert("captured");
  }

  return (
    <Container>
      <Card>
        <Title>Wild {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} appeared!</Title>
        <Picture src={pokemon.picture}/>
        <Text>Level {pokemon.level}</Text>
        <Footer>
          <Button onClick={e => handleCaptureClick(e)}>Capture</Button>
          <Button onClick={e => handleLeaveClick(e)}>Leave</Button>
        </Footer>
      </Card>
    </Container>
  )
}