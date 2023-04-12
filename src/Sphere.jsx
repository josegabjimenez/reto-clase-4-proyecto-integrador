import {useTexture} from '@react-three/drei';
import {DoubleSide} from 'three';

export default function Door() {
	const PATH = '/static/textures/stone/';

	const props = useTexture({
		map: PATH + 'color.jpg',
		displacementMap: PATH + 'height.png',
		normalMap: PATH + 'normal.jpg',
		roughnessMap: PATH + 'roughness.jpg',
		aoMap: PATH + 'ao.jpg',
		// metalnessMap: PATH + 'metallic.jpg',
	});

	return (
		<mesh castShadow rotation-y={Math.PI / 12}>
			{/* <sphereGeometry args={[1, 50, 50]} /> */}
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial {...props} side={DoubleSide} />
		</mesh>
	);
}
