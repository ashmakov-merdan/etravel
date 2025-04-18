"use client"
import { FC, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type CounterProps = {
  value: number
  direction?: "up" | "down"
  className?: string
}

const Counter: FC<CounterProps> = ({ value=0, direction, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(
    () =>
      springValue.on("change", (latest: number) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue]
  );
  return <span ref={ref} className={className} />
};

export default Counter;