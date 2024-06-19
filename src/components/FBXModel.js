// src/components/FBXModel.js
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const FBXModel = ({ path, pointsOfInterest, onPointClick }) => {
    const model = useLoader(FBXLoader, path);
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        }
    }, [model]);

    return <primitive ref={ref} object={model} />;
};

export default FBXModel;
