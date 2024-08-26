import { Canvas } from "@react-three/fiber"
import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function Test() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <mesh>
        <sphereGeometry args={[2, 2, 2]} />
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 2]} />
            <color attach="background" args={["#212121"]} />
            <Text fontSize={1} color="#00ffee">
              Hello
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>

    </Canvas>
  )
}
