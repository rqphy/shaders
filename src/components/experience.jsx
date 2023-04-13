import { Canvas } from "@react-three/fiber"

export default function Experience() {
	return (
		<Canvas>
			<pointLight position={[10, 10, 10]} />
			<mesh>
				<planeBufferGeometry args={[3, 5]} />
				<meshStandardMaterial color="red" />
			</mesh>
		</Canvas>
	)
}
