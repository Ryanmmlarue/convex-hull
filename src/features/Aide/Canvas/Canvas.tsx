import './Canvas.css'
import { Stage, Layer, Rect, Circle } from 'react-konva';
import { useState } from 'react';



const Canvas = () => {

  const initialPoints: any = []
  const [points, setPoints] = useState(initialPoints)

  const placePoint = (event: any) => {
    console.log(event.evt)
    const x = event.evt.layerX
    const y = event.evt.layerY
    const point = <Circle x={x} y={y} radius={5} fill="black"/>
    const temp = points.slice()
    temp.push(point)
    setPoints(temp)
    console.log(x, y)
  }


  return(
    <Stage width={500} height={500} onMouseDown={placePoint}>
      <Layer>
        {points}
      </Layer>
    </Stage>
  )
}

export default Canvas;