import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealUpProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: string;
}

const RevealUp = ({
  children,
  width = "fit-content",
  delay = 0.25,
  direction = "up",
}: RevealUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      if (direction === "up") {
        mainControls.start("visibleUp");
      } else {
        mainControls.start("visibleLeft");
      }
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hiddenUp: { opacity: 0, y: -75 },
          visibleUp: { opacity: 1, y: 0 },
          hiddenLeft: { opacity: 0, x: -75 },
          visibleLeft: { opacity: 1, x: 0 },
        }}
        initial={direction === "up" ? "hiddenUp" : "hiddenLeft"}
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealUp;
