import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Canvas} from '@react-three/fiber'

//docs: https://r3f.docs.pmnd.rs/api/canvas
//docs: https://threejs.org/manual/#en/fundamentals

function App() {
  const [count, setCount] = useState(0)

  return (
   <div id="canvas-container">
    <Canvas>
      <mesh>
        <boxGeometry args = {[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0,0,5]} color="red" />

    </Canvas>
   </div>
  );
}

export default App
