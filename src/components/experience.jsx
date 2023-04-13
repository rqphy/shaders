import { Canvas } from "@react-three/fiber"

export default function Experience() {
	return (
		<Canvas>
			<mesh>
				<planeBufferGeometry args={[3, 5]} />
				<meshStandardMaterial color="red" />
			</mesh>
		</Canvas>
	)
}
