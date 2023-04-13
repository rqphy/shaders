import { Canvas } from "@react-three/fiber"
import Card from "../card/card"
import { Suspense } from "react"

export default function Experience() {
	return (
		<Canvas camera={{ fov: 10 }}>
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				<Card />
			</Suspense>
		</Canvas>
	)
}
