import React, { useRef, useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

function getRandomOptionFromArray(Array){
  const rndInt = Math.floor(Math.random() * Array.length);
  return Array[rndInt];
}

export default function Map(props) {

  const [show, setShow] = useState(false);

  const canvasRef = useRef(null)

  class Player {
    constructor(){
      this.position = {
        x: 100,
        y: 100
      }
      this.velocity = {
        x: 0,
        y: 0
      }
      this.width = 25
      this.height = 25
    }

    draw(context){
      context.fillStyle= 'red'
      context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(context, canvas) {
      this.draw(context)
      if (this.position.y + this.velocity.y <= 0 || this.position.y + this.height + this.velocity.y >= canvas.height) this.velocity.y = 0;
      this.position.y += this.velocity.y
      if (this.position.x + this.velocity.x <= 0 || this.position.x + this.width + this.velocity.x >= canvas.width) this.velocity.x = 0;
      this.position.x += this.velocity.x
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = innerWidth
    canvas.height = innerHeight
    const context = canvas.getContext('2d')

    const player = new Player()

    function animate() {
      requestAnimationFrame(animate)
      context.clearRect(0,0, canvas.width, canvas.height)
      player.update(context, canvas)
    }
    animate()

    addEventListener('keydown', ({keyCode}) => {

      const chosenPokemon = getRandomOptionFromArray(props.pokemons);

      const encounterDetails = chosenPokemon.version_details
          .find(element => element.version.name === "yellow")
          .encounter_details.filter(element => element.method.name ==="super-rod" || 
            element.method.name ==="walk" || 
            element.method.name ==="surf"
          );
      
      const chosenEncounter = getRandomOptionFromArray(encounterDetails);

      switch(keyCode){
        case 37:
          player.velocity.x = -5
          player.velocity.y = 0
          if (Math.random() <= chosenEncounter.chance/100) {
            alert(`Wild ${chosenPokemon.pokemon.name}`)
            player.velocity.x = 0
          };
          break;
        case 40:
          player.velocity.y = 5
          player.velocity.x = 0
          if (Math.random() <= chosenEncounter.chance/100) {
            alert(`Wild ${chosenPokemon.pokemon.name}`)
            player.velocity.y = 0
          };
          break;
        case 39:
          player.velocity.x = 5
          player.velocity.y = 0
          if (Math.random() <= chosenEncounter.chance/100) {
            alert(`Wild ${chosenPokemon.pokemon.name}`)
            player.velocity.x = 0
          };
          break;
        case 38:
          player.velocity.y = -5
          player.velocity.x = 0
          if (Math.random() <= chosenEncounter.chance/100) {
            alert(`Wild ${chosenPokemon.pokemon.name}`)
            player.velocity.y = 0
          };
          break;
      }
    })

    addEventListener('keyup', ({keyCode}) => {
      switch(keyCode){
        case 37:
          player.velocity.x = 0
          break;
        case 40:
          player.velocity.y = 0
          break;
        case 39:
          player.velocity.x = 0
          break;
        case 38:
          player.velocity.y = 0
          break;
      }
    })
  }, [])
  

  return (
  <Fragment>
    <Modal show={show} pokemon={chosenPokemon} level={}/>
    <canvas ref={canvasRef} {...props}/>
  </Fragment>
  )
}
