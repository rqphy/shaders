import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { ScrollControls } from "@react-three/drei"
import Container from "../container/container"
import Trailer from "../trailer/trailer"

export default function Experience() {
	return (
		<Canvas camera={{ fov: 10 }}>
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				<ScrollControls distance={2} pages={4} damping={0.2}>
					<Container />
				</ScrollControls>
			</Suspense>
			<Trailer />
		</Canvas>
	)
}
