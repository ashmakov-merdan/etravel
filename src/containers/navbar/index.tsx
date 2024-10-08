"use client"
import Language from "@/components/language";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import { FC, useEffect, useRef, useState } from "react";

const OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
let OBSERVER: IntersectionObserver | null = null;

const Navbar: FC = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isTop, setTop] = useState(window.pageYOffset < 5);

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setTop(entry.isIntersecting)
    })
  };

  useEffect(() => {
    OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
    anchorRef.current && OBSERVER.observe(anchorRef.current)
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 shadow-sm border-b border-neutral-200 ${isTop ? "border-opacity-0" : "border-opacity-20 backdrop-blur-md"} border-opacity-20 z-10 transition-all`}>
        <div className="container mx-auto flex justify-between items-center py-4">
          <Logo />
          <Navigation />
          <Language />
        </div>
      </div>
      <div ref={anchorRef} className="h-1 absolute invisible" />
    </>
  )
};

export default Navbar;