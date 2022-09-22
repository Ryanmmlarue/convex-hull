import './Aide.css'
import Canvas from './Canvas/Canvas';

import Pseudocode from './Pseudocode/Pseudocode'

const Aide = () => {

return (
  <div className="aide-container">
    <div className="left">
      <Canvas />
    </div>
    <div className="right">
        <Pseudocode />
    </div>
  </div>
)

}

export default Aide;