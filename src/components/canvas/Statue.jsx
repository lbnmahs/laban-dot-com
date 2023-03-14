import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader from '../Loader'

const Statue = () => {
  const statue = useGLTF('./statue/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} />
      <pointLight intensity={0.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
      />
      <primitive 
        object={statue.scene}
        scale={1} 
        position-y={0} 
        rotation-y={0}
      />
    </mesh>
  )
}

const StatueCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      camera={{ 
        fov:45, 
        near: 0.1, 
        far: 200, 
        position: [-4, 3, 6]  
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Statue />
      </Suspense>
    </Canvas>
  )
}

export default StatueCanvas