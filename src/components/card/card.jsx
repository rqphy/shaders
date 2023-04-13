import { extend } from "@react-three/fiber"
import WaveShaderMaterial from "../../shaders/wave/wave"

extend({ WaveShaderMaterial })

export default function Card() {
	return (
		<mesh>
			<planeBufferGeometry args={[3, 5]} />
			<waveShaderMaterial uColor={"hotpink"} />
		</mesh>
	)
}
