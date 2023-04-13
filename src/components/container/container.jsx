import { useFrame } from "@react-three/fiber"
import Card from "../card/card"
import { useScroll } from "@react-three/drei"
import { useRef } from "react"

const numberOfProject = 10

export default function Container() {
	const data = useScroll()
	const containerRef = useRef()

	useFrame(() => {
		const currentScrollOffset = data.offset
		containerRef.current.position.x =
			-currentScrollOffset * numberOfProject * 0.45
		containerRef.current.position.y =
			currentScrollOffset * numberOfProject * 0.45
	})

	return (
		<group ref={containerRef}>
			{[...new Array(numberOfProject)].map((el, index) => (
				<Card
					key={index}
					position={[index * 0.5, index * -0.5, 0]}
					index={index}
				/>
			))}
		</group>
	)
}
