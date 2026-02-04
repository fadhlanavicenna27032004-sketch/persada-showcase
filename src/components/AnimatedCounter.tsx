import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

const AnimatedCounter = ({ value, className = "" }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract first number from value (e.g., "4K" -> 4, "20" -> 20, "7-in-1" -> 7)
  const match = value.match(/^(\d+)/);
  const numericValue = match ? parseInt(match[1]) : 0;
  const suffix = match ? value.slice(match[1].length) : value;
  
  const spring = useSpring(0, { 
    mass: 0.8, 
    stiffness: 50, 
    damping: 15 
  });
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toString()
  );
  
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      setDisplayValue(v);
    });
    return unsubscribe;
  }, [display]);

  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
