import { Canvas } from "@react-three/fiber"
import Card from "../card/card"

export default function Experience() {
	return (
		<Canvas>
			<pointLight position={[10, 10, 10]} />
			<Card />
		</Canvas>
	)
}
