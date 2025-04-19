"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";

const benefits = [
  "Meningkatkan Stamina",
  "100% Herbal Alami",
  "Tanpa Efek Samping",
  "Hasil Permanen",
];

function CoffeeCupModel({ rotation }) {
  const cupRef = useRef();
  const { scene } = useGLTF("/assets/3d/duck.glb"); // Using duck as placeholder for coffee cup

  // Apply the external rotation to the model
  useEffect(() => {
    if (cupRef.current) {
      cupRef.current.rotation.y = rotation * 0.2;
    }
  }, [rotation]);

  // Add subtle floating animation
  useFrame((state) => {
    if (cupRef.current) {
      cupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <primitive
      ref={cupRef}
      object={scene}
      scale={2}
      position={[0, 0, 0]}
      rotation={[-0.2, 0, -0.1]}
    />
  );
}

export default function CompositionSection() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-12">
      <div className="max-w-2xl mx-auto relative aspect-square">
        {/* 3D Coffee Cup */}
        <div className="absolute inset-1/4 z-10">
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
              />
              {/* <CoffeeCupModel rotation={rotation} /> */}
              <Environment preset="sunset" />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>

        {/* Rotating Container */}
        <div
          className="w-full h-full absolute inset-0"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Benefit Circles */}
          {benefits.map((benefit, index) => {
            const angle = (index * 360) / benefits.length;
            const radius = 40; // percentage of container width
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-[#B79237] flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-darkBlue border-2 border-[#B79237]" />
                  </div>
                  <p className="text-xs font-montserrat text-white text-center w-24 whitespace-normal">
                    {benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Static Center Circle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-24 h-24 rounded-full bg-[#B79237] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-darkBlue border-2 border-[#B79237] flex items-center justify-center">
              <p className="text-xs font-montserrat text-white text-center px-2">
                manfaat & komposisi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
