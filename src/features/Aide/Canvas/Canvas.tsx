import { useEffect, useRef } from "react";
import './Canvas.css'

const Canvas = () => {

  const canvasRef = useRef(null)

  const drawPoint = (
    context: CanvasRenderingContext2D,
    x: number,
    y: number
  ) => {
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI, false);
    context.fill()
    context.stroke();
  }

  const drawLine = (
    context: CanvasRenderingContext2D,
    aX: number,
    aY: number, 
    bX: number, 
    bY: number
  ) => {
    context.beginPath()
    context.moveTo(aX, aY)
    context.lineTo(bX, bY)
    context.stroke()
  }

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current
    const context = canvas!.getContext!('2d')

  }, [])

  return(
    <canvas width="500px" height="500px" ref={canvasRef}></canvas>
  )
}

export default Canvas;