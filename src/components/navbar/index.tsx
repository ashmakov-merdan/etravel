"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Language from "../language";
import Logo from "../logo";
import Menu from "../menu";
import { Link } from "@/i18n/navigation";
import useWindowSize from "@/lib/hooks/useWindowSize";

const Navbar = () => {
  const size = useWindowSize();

  const LOGO_SIZE = typeof window !== 'undefined' && size.width < 1280 ? "500px" : "640px"

  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 200], ["100px", "0px"]);
  const logoX = useTransform(scrollY, [0, 300], ["50%", "0%"]);
  const logoLeft = useTransform(scrollY, [0, 300], ["1%", "0%"]); 
  const zIndex = useTransform(scrollY, [0, 3000], [1, 50]);
  const logoWidth = useTransform(scrollY, [0, 300], [LOGO_SIZE, "76px"]);

  return (
    <motion.div className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md" style={{ zIndex }}>
      <div className="px-4 py-3 relative container mx-auto grid max-lg:grid-cols-2 grid-cols-3 items-center">
      <motion.div 
          className="max-lg:hidden grid place-items-center absolute top-0 bottom-0 z-[-10]" 
          transition={{ type: "spring", stiffness: 500 }} 
          style={{ 
            y: logoY, 
            x: logoX,
            left: logoLeft,
            width: logoWidth 
          }}
        >
          <Link href={"/"}>
            <Logo size="" />
          </Link>
        </motion.div>

        <div>
          <Link className="lg:hidden" href={"/"}>
            <Logo size="w-[120px]" />
          </Link>
        </div>

        <Menu />

        <div className="">
          <Language />
        </div>
      </div>
    </motion.div>
  )
};

export default Navbar;