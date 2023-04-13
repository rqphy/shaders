import { Canvas } from "@react-three/fiber"
import Card from "../card/card"
import { Suspense } from "react"

export default function Experience() {
	return (
		<Canvas camera={{ fov: 10 }}>
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				{[...new Array(4)].map((el, index) => (
					<Card
						key={index}
						position={[index * 0.5, index * -0.5, 0]}
						index={index}
					/>
				))}
			</Suspense>
		</Canvas>
	)
}
