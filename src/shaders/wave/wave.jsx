import { shaderMaterial } from "@react-three/drei"
import vertexShader from "./vertex.glsl"
import fragmentShader from "./fragment.glsl"

const WaveShaderMaterial = shaderMaterial(
	// Uniform
	{},
	vertexShader,
	fragmentShader
)

export default WaveShaderMaterial
