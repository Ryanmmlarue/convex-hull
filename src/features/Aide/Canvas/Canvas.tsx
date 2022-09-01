import './Canvas.css'
import { Stage, Layer, Rect, Circle } from 'react-konva';
import { useState } from 'react';



const Canvas = () => {

  const initialCircles: any = []
  const [points, setCircles] = useState(initialCircles)

  const placePoint = (event: any) => {
    console.log(event.evt)
    const x = event.evt.layerX
    const y = event.evt.layerY
    const point = <Circle x={x} y={y} radius={5} fill="black"/>
    const temp = points.slice()
    temp.push(point)
    setCircles(temp)
    console.log(x, y)
  }

  return(
    <>
      <div className='canvas'>
        <Stage width={500} height={500} onMouseDown={placePoint}>
          <Layer>
            {points}
          </Layer>
        </Stage>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-secondary">Clear</button>
        <button type="button" className="btn btn-secondary">Reset</button>
        <button type="button" className="btn btn-secondary">Start</button>
      </div>
    </>
  )
}

export default Canvas;