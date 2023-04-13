import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"

export default function Trailer() {
	const trailerRef = useRef()
	const { viewport } = useThree()

	useFrame(({ mouse }) => {
		const x = (mouse.x * viewport.width) / 2
		const y = (mouse.y * viewport.height) / 2
		trailerRef.current.position.set(x, y, 0)
		trailerRef.current.rotation.set(-y, x, 0)
	})

	return (
		<mesh ref={trailerRef} position={[0, 0, 2]}>
			<circleGeometry args={[0.025]} />
			<meshBasicMaterial color={"#f5ebe0"} />
		</mesh>
	)
}
