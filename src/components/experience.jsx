import { Canvas, extend } from "@react-three/fiber"
import WaveShaderMaterial from "../shaders/wave/wave"

extend({ WaveShaderMaterial })

export default function Experience() {
	return (
		<Canvas>
			<pointLight position={[10, 10, 10]} />
			<mesh>
				<planeBufferGeometry args={[3, 5]} />
				<waveShaderMaterial uColor={"hotpink"} />
			</mesh>
		</Canvas>
	)
}
