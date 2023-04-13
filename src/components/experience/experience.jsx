import { Canvas } from "@react-three/fiber"
import Card from "../card/card"
import { Suspense } from "react"
import { ScrollControls } from "@react-three/drei"
import Container from "../container/container"

export default function Experience() {
	return (
		<Canvas camera={{ fov: 10 }}>
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				<ScrollControls distance={2} pages={6} damping={0.2}>
					<Container />
				</ScrollControls>
			</Suspense>
		</Canvas>
	)
}
