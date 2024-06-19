import React, { Suspense, lazy, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const LazyFBXModel = lazy(() => import('./FBXModel'));

const CameraController = ({ selectedPoint }) => {
    const { camera } = useThree();

    useFrame(() => {
        if (selectedPoint) {
            camera.position.lerp(
                new THREE.Vector3(selectedPoint.position[0], selectedPoint.position[1], selectedPoint.position[2] + 2),
                0.1
            );
            camera.lookAt(new THREE.Vector3(selectedPoint.position[0], selectedPoint.position[1], selectedPoint.position[2]));
        }
    });

    return null;
};

const BoulaidFbx = () => {
    const [selectedPoint, setSelectedPoint] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const pointsOfInterest = [
        { id: 1, position: [1, 1, 1], info: 'Point 1' },
        { id: 2, position: [-1, 1, -1], info: 'Point 2' },
    ];

    const handlePointClick = (point, event) => {
        event.stopPropagation();
        setSelectedPoint(point);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedPoint(null);
    };

    return (
        <>
            <Canvas style={{ width: '100vw', height: '100vh' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <LazyFBXModel path="/models/novos/boulaid_reduzido.fbx" pointsOfInterest={pointsOfInterest} onPointClick={handlePointClick} />
                </Suspense>
                <OrbitControls />
                <CameraController selectedPoint={selectedPoint} />
            </Canvas>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <p>{selectedPoint.info}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default BoulaidFbx;
