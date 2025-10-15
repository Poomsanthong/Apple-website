import React, { useEffect, useRef } from "react";

export const Hero = () => {
  const videoRef = useRef(null);

  // Set playback rate to 2x when the component opens
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Pro title" />
      </div>

      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
      ></video>

      <button>Buy</button>
      <p>From $1999 or $83.29/mo. for 24 months</p>
    </section>
  );
};
