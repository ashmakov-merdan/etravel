"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Language from "../language";
import Logo from "../logo";
import Menu from "../menu";
import { Link } from "@/i18n/navigation";
import useWindowSize from "@/lib/hooks/useWindowSize";

const Navbar = () => {
  const size = useWindowSize();

  const LOGO_SIZE = size.width < 1280 ? "500px" : "660px"

  console.log(size.width)

  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 300], ["90%", "0%"]);
  const logoX = useTransform(scrollY, [0, 300], ["50%", "0%"]);
  const logoSize = useTransform(scrollY, [0, 300], [LOGO_SIZE, "120px"]);
  const zIndex = useTransform(scrollY, [0, 3000], [1, 50]);

  return (
    <motion.div className="px-4 py-6 xl:p-0 container mx-auto fixed top-0 left-0 right-0 grid max-lg:grid-cols-2 grid-cols-3 items-center bg-transparent" style={{ zIndex }}>
      <motion.div className="max-lg:hidden block absolute z-[-10]" transition={{ type: "spring", stiffness: 500 }} style={{ y: logoY, x: logoX, width: logoSize }}>
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
    </motion.div>
  )
};

export default Navbar;