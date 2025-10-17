// switch between models 14 and 16 -> PresentationControls
import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"; // to create refs for the models
import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacBookRef = useRef(); // refs for the two models 14 inch
  const largeMacBookRef = useRef(); // refs for the two models 16 inch

  const showLargeMacBook = scale === 0.08 || scale === 0.05; // 16-inch scales

  return (
    <>
      <PresentationControls>
        <group ref={largeMacBookRef}>
          <MacbookModel16 isMobile={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls>
        <group ref={smallMacBookRef}>
          <MacbookModel14 isMobile={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
