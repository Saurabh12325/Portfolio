import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(
    () => window.innerWidth < 1024,
  );

  useEffect(() => {
    const onResize = () => setIsSmallScreen(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX,
      ringY = mouseY;
    let glowX = mouseX,
      glowY = mouseY;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px,${mouseY}px) translate(-50%,-50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      ring.style.transform = `translate(${ringX}px,${ringY}px) translate(-50%,-50%)`;

      glowX += (mouseX - glowX) * 0.07;
      glowY += (mouseY - glowY) * 0.07;
      glow.style.transform = `translate(${glowX}px,${glowY}px) translate(-50%,-50%)`;

      rafId = requestAnimationFrame(animate);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onIn = () => setHovered(true);
    const onOut = () => setHovered(false);

    const attach = () => {
      document
        .querySelectorAll(
          "a,button,[role='button'],input,textarea,select,label",
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", onIn);
          el.addEventListener("mouseleave", onOut);
        });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    attach();
    rafId = requestAnimationFrame(animate);

    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
      obs.disconnect();
    };
  }, [isSmallScreen]);

  if (isSmallScreen) return null;

  return (
    <>
      {/* Soft glow — slowest, farthest lag */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          width: hovered ? 120 : 80,
          height: hovered ? 120 : 80,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(203,81,81,0.18) 0%, transparent 70%)",
          transition: "width 0.4s ease, height 0.4s ease",
          filter: "blur(2px)",
        }}
      />

      {/* Ring — medium lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: clicked ? 24 : hovered ? 56 : 38,
          height: clicked ? 24 : hovered ? 56 : 38,
          borderRadius: "50%",
          border: `2px solid ${hovered ? "#cb5151" : "rgba(203,81,81,0.6)"}`,
          boxShadow: hovered
            ? "0 0 12px rgba(203,81,81,0.5), inset 0 0 8px rgba(203,81,81,0.1)"
            : "0 0 6px rgba(203,81,81,0.25)",
          backgroundColor: hovered ? "rgba(203,81,81,0.07)" : "transparent",
          transition:
            "width 0.22s ease, height 0.22s ease, border-color 0.2s, box-shadow 0.2s, background 0.2s",
        }}
      />

      {/* Dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: clicked ? 5 : hovered ? 10 : 10,
          height: clicked ? 5 : hovered ? 10 : 10,
          borderRadius: "50%",
          backgroundColor: "#cb5151",
          boxShadow:
            "0 0 8px rgba(203,81,81,0.9), 0 0 20px rgba(203,81,81,0.4)",
          transition: "width 0.12s, height 0.12s",
        }}
      />
    </>
  );
}
