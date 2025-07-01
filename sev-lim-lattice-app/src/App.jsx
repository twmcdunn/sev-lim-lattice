import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera} from '@react-three/drei'

//docs: https://r3f.docs.pmnd.rs/api/canvas
//docs: https://threejs.org/manual/#en/fundamentals

function Scene() {
  const camRef = useRef();
  const meshRef = useRef();

  useFrame(() => {
    if (camRef.current && meshRef.current) {
      camRef.current.lookAt(meshRef.current.position);
    }
  }
  );
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[5, 5, 5]}
        ref={camRef}
      />
      <OrbitControls />
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} color="red" />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="canvas-container">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App
