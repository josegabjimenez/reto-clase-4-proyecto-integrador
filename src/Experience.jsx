import {OrbitControls} from '@react-three/drei';
import {Perf} from 'r3f-perf';
import Door from './Door';
import Sphere from './Sphere';
import Floor from './Floor';
import {useHelper} from '@react-three/drei';
import {useRef} from 'react';
import {DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper} from 'three';

export default function Experience() {
	const hemisphereLightRef = useRef(null);
	const pointLightRef = useRef(null);
	const rectAreaLightRef = useRef(null);
	const directionalLightRef = useRef(null);
	const spotLightRef = useRef(null);

	// useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
	useHelper(pointLightRef, PointLightHelper, 1);
	// useHelper(rectAreaLightRef, RectAreaLightHelper, 1); No tiene Helper
	// useHelper(spotLightRef, SpotLightHelper, 1);
	// useHelper(directionalLightRef, DirectionalLightHelper, 1);

	return (
		<>
			<Perf position="top-left" />

			<OrbitControls makeDefault />

			{/* Lights */}
			{/* <hemisphereLight ref={hemisphereLightRef} castShadow position={[0, 5, 10]} intensity={1.5} /> */}
			<pointLight ref={pointLightRef} castShadow position={[0, 5, 10]} intensity={1.5} />
			{/* <rectAreaLight ref={rectAreaLightRef} castShadow position={[0, 5, 10]} intensity={1.5} /> */}
			{/* <spotLight ref={spotLightRef} castShadow position={[0, 1, 5]} intensity={0.5} /> */}
			{/* <directionalLight ref={directionalLightRef} castShadow position={[0, 5, 10]} intensity={1.5} /> */}

			<ambientLight intensity={0.5} />

			{/* Models */}
			{/* <Door /> */}
			<Sphere />
			<Floor />
		</>
	);
}
