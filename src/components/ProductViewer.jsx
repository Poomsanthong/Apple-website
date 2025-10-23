import React from "react"; // React library
import { useMacStore } from "../store"; // zustand store for state management
import clsx from "clsx"; // conditional class names
import { Canvas } from "@react-three/fiber"; // react-three-fiber for 3D rendering
import { useMediaQuery } from "react-responsive"; // media query for responsiveness
import StudioLights from "./three/StudioLights"; // lighting setup for 3D scene
import ModelSwitcher from "./three/ModelSwitcher"; // component to switch between models

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacStore(); // zustand store for state management
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" }); // mobile or tablet check
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === "#adb5db" && "active"
              )}
              onClick={() => setColor("#adb5db")}
            ></div>
            <div
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
              onClick={() => setColor("#2e2c2e")}
            ></div>
          </div>
          <div className="size-control">
            <div
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              onClick={() => setScale(0.06)}
            >
              <p>14"</p>
            </div>
            <div
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              onClick={() => setScale(0.08)}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }} // camera settings
      >
        <StudioLights /> {/* lighting setup */}
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
