import { useRef } from "react"
import * as THREE from "three"
import { extend, useFrame } from "@react-three/fiber"
import WaveShaderMaterial from "../../shaders/wave/wave"
import { useLoader } from "@react-three/fiber"

extend({ WaveShaderMaterial })

export default function Card() {
	const shaderRef = useRef()
	useFrame(({ clock }) => (shaderRef.current.uTime = clock.getElapsedTime()))

	const [image] = useLoader(THREE.TextureLoader, ["/bball.jpg"])

	return (
		<mesh>
			<planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
			<waveShaderMaterial
				ref={shaderRef}
				uColor={"hotpink"}
				uTexture={image}
			/>
		</mesh>
	)
}
