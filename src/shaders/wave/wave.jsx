import { shaderMaterial } from "@react-three/drei"
import vertexShader from "./vertex.glsl"
import fragmentShader from "./fragment.glsl"
import * as THREE from "three"

const WaveShaderMaterial = shaderMaterial(
	// Uniform
	{
		uColor: new THREE.Color(0, 0, 0),
	},
	vertexShader,
	fragmentShader
)

export default WaveShaderMaterial
