"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CursorGloss = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        x: x,
        y: y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="hidden md:block"
    />
  );
};