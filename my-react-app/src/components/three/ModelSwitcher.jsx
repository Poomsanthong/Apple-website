// switch between models 14 and 16 -> PresentationControls
import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"; // to create refs for the models
import React from "react";
import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import { gsap } from "gsap"; // animation library
import { useGSAP } from "@gsap/react"; // GSAP hook for React

const ANIMATION_DURATION = 1; // duration for model switch animation
const OFFSET_DISTANCE = 5; // distance to offset models during switch

const fadeMeshes = (group, opacity) => {
  // helper function to fade meshes in/out
  if (!group) return; // safety check
  group.traverse((child) => {
    // traverse all child meshes
    if (child.isMesh) {
      // only affect mesh objects
      child.material.opacity = true; // ensure material supports opacity
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION }); // animate opacity
    }
  });
};

const moveGroup = (group, x) => {
  // helper function to move model group
  if (!group) return; // safety check

  gsap.to(group.position, { x, duration: ANIMATION_DURATION }); // animate position
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacbookRef = useRef(); // refs for the two models 14 inch
  const largeMacbookRef = useRef(); // refs for the two models 16 inch

  const showLargeMacbook = scale === 0.08 || scale === 0.05; // 16-inch scales

  useGSAP(() => {
    // GSAP animation effect on scale change
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE); // move 14-inch out of view
      moveGroup(largeMacbookRef.current, 0); // move 16-inch into view

      fadeMeshes(smallMacbookRef.current, 0); // fade out 14-inch
      fadeMeshes(largeMacbookRef.current, 1); // fade in 16-inch
    } else {
      moveGroup(smallMacbookRef.current, 0); // move 14-inch into view
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE); // move 16-inch out of view

      fadeMeshes(smallMacbookRef.current, 1); // fade in 14-inch
      fadeMeshes(largeMacbookRef.current, 0); // fade out 16-inch
    }
  }, [scale]);
  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
