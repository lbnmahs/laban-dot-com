import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { useEffect, useState, Suspense } from 'react'
import Loader from '../Loader'

const Car = ({ isMobile }) => {
  const car = useGLTF('./car/scene.gltf')
  
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
        object={car.scene}
        scale={isMobile ? 1.3 : 2}
        position={isMobile ? [0, -3, -2.2] :[0, -3.75, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const CarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)
    const handleResizeChange = (e) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener('change', handleResizeChange)
    return () => {
      mediaQuery.removeEventListener('change', handleResizeChange)
    }
  }, [])
  return (
    <Canvas
      frameLoop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.7}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default CarCanvas