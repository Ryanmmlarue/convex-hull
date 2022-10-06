import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import quickHull from '../../../utils/model/QuickHull';
import { EventType } from '../../../utils/types/Event';
import './Pseudocode.css'

const Pseudocode = () => {


    const test = [{x: 10, y: 4}, {x: 7, y: 3}, {x: 8, y: 1}, {x: 6, y: -1}, {x: 9, y: -2}, {x: 11, y: -1}, {x: 12, y: 0}, {x: 15, y: 1}, {x: 14, y: 3}, {x: 13, y: 3}]

    const data = quickHull(test)
    console.log(data)

    data?.eventQueue.forEach(e => {
      if (e.eventType === EventType.FindMinMax) {
        console.log(document.getElementById(e.eventType.toString()))
        // document.getElementById(e.eventType.toString())!.style.background = 'blue'
      }
      
    })



  return (
    <table>
      <tbody>
        <tr>
          <td><b>QuickHull(S):</b></td>
        </tr>
        <tr>
          <td id={EventType.FindMinMax.toString()} className="indent">
            Find left and right most points A and B
            </td>
        </tr>
        <tr>
          <td className="indent">
            Draw segment AB, divide remaining points into S1 and S2 where S1 contains points on the right of AB and S2 contains those on the left
          </td>
        </tr>
        <tr>
          <td className="indent">
            FindHull(S1, A, B)
          </td>
        </tr>
        <tr>
          <td className="indent">
            FindHull(S2, A, B)
          </td>
        </tr>
        <tr>
          <td><b>FindHull(Sk, P, Q):</b></td>
        </tr>
        <tr>
          <td className="indent">If Sk has no point, return</td>
        </tr>
        <tr>
          <td className="indent">Find furthest point, C, from the segment PQ and add to hull</td>
        </tr>
        <tr>
          <td className="indent">
            Divide points into S1 and S2, where S1 contains the points to the right of segment PC, and S2 contains the points to the right of segment CQ
          </td>
        </tr>
        <tr>
          <td className="indent">
            FindHull(S1, P, C)
          </td>
        </tr>
        <tr>
          <td className="indent">
            FindHull(S2, C, Q)
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Pseudocode;