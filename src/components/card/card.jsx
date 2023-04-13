import { useRef } from "react"
import * as THREE from "three"
import { extend, useFrame } from "@react-three/fiber"
import WaveShaderMaterial from "../../shaders/wave/wave"
import { useLoader } from "@react-three/fiber"

extend({ WaveShaderMaterial })

const handlePointerEnter = () => {
	console.log("in")
}
const handlePointerLeave = () => {
	console.log("out")
}

export default function Card({ position, index }) {
	const shaderRef = useRef()

	useFrame(({ clock }) => {
		// get uTime for shader
		shaderRef.current.uTime = clock.getElapsedTime()
	})
	const [image] = useLoader(THREE.TextureLoader, ["/bball.jpg"])

	return (
		<mesh
			position={position}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
		>
			<planeGeometry args={[0.4, 0.6, 16, 16]} />
			<waveShaderMaterial
				ref={shaderRef}
				uColor={"hotpink"}
				uTexture={image}
				uIndex={index}
			/>
		</mesh>
	)
}
