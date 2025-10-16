import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -5]}
            rotation-y={Math.PI / 2}
            scale={10}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            rotation-y={Math.PI / 2}
            scale={10}
          />
        </group>
      </Environment>

      <spotLight
        position={[-2, 10, 5]}
        intensity={Math.PI * 2}
        angle={0.15}
        decay={0}
      />
      <spotLight
        position={[0, -25, 10]}
        intensity={Math.PI * 2}
        angle={0.15}
        decay={0}
      />
      <spotLight
        position={[0, 15, 5]}
        intensity={Math.PI * 1.5}
        angle={0.15}
        decay={0.1}
      />
    </group>
  );
};

export default StudioLights;
