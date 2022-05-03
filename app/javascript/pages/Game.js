import React, { useRef, useEffect } from "react";

export default function Canvas(props) {
  
  const canvasRef = useRef(null)

  class Player {
    constructor(){
      this.position = {
        x: 100,
        y: 100
      }
      this.velocity = {
        x: 0,
        y: 1
      }
      this.width = 25
      this.height = 25
    }

    draw(context){
      context.fillStyle= 'red'
      context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(context) {
      this.position.y += this.velocity.y
      this.draw(context)
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
      player.update(context)
    }
    animate()
  }, [])
  

  return <canvas ref={canvasRef} {...props}/>
}
