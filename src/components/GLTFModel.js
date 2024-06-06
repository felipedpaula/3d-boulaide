// src/GLTFModel.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const GLTFModel = ({ path, pointsOfInterest, onPointClick }) => {
    const { scene } = useGLTF(path);
    const ref = useRef();

    return (
        <group ref={ref}>
            <primitive object={scene} />
            {pointsOfInterest.map((point, index) => (
                <mesh
                    key={index}
                    position={point.position}
                    onClick={(e) => onPointClick(point, e)}
                >
                    <sphereGeometry args={[0.1, 32, 32]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            ))}
        </group>
    );
};

export default GLTFModel;
