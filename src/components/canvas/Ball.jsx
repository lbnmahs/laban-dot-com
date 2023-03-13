import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  OrbitControls, Decal, Float, Preload, useTexture 
} from '@react-three/drei'
import Loader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
      />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color='#222831' 
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading 
        />
        <Decal 
          map={decal} 
          position={[0, 0, 1]} 
          rotation={[2* Math.PI, 0, 6.25]} 
          flatShading 
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameLoop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}> 
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}  />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas