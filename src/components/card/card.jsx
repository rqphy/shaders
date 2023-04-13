import { useRef } from "react"
import { extend, useFrame } from "@react-three/fiber"
import WaveShaderMaterial from "../../shaders/wave/wave"

extend({ WaveShaderMaterial })

export default function Card() {
	const shaderRef = useRef()

	useFrame(({ clock }) => (shaderRef.current.uTime = clock.getElapsedTime()))

	return (
		<mesh>
			<planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
			<waveShaderMaterial ref={shaderRef} uColor={"hotpink"} wireframe />
		</mesh>
	)
}
