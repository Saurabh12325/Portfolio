import React, { useMemo } from "react";
import { motion } from "framer-motion";

const NUM_STARS = 180;
const NUM_SHOOTING = 5;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: NUM_STARS }, (_, i) => ({
        id: i,
        x: rand(0, 100),
        y: rand(0, 100),
        r: rand(0.6, 2),
        delay: rand(0, 4),
        duration: rand(2.5, 5),
      })),
    []
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: NUM_SHOOTING }, (_, i) => ({
        id: i,
        startX: rand(10, 70),
        startY: rand(5, 40),
        delay: i * 3.2 + rand(0, 2),
      })),
    []
  );

  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {stars.map((s) => (
        <motion.circle
          key={s.id}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="white"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {shootingStars.map((s) => (
        <motion.line
          key={`sh-${s.id}`}
          x1={`${s.startX}%`}
          y1={`${s.startY}%`}
          x2={`${s.startX + 12}%`}
          y2={`${s.startY + 6}%`}
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.9, 0],
            x1: [`${s.startX}%`, `${s.startX + 20}%`],
            y1: [`${s.startY}%`, `${s.startY + 10}%`],
            x2: [`${s.startX + 12}%`, `${s.startX + 32}%`],
            y2: [`${s.startY + 6}%`, `${s.startY + 16}%`],
          }}
          transition={{
            duration: 1.1,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 7 + rand(0, 5),
            ease: "easeIn",
          }}
        />
      ))}
    </svg>
  );
}

export default StarField;
