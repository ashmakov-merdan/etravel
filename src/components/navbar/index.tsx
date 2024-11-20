"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Language from "../language";
import Logo from "../logo";
import Menu from "../menu";
import { Link } from "@/i18n/navigation";

const Navbar = () => {
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 1000], [0, 1]);
  const zIndex = useTransform(scrollY, [0, 3000], [1, 50]);

  return (
    <motion.div className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md" style={{ zIndex }}>
      <div className="px-4 py-3 relative container mx-auto grid max-lg:grid-cols-2 grid-cols-3 items-center">
        <div>
          <Link className="" href={"/"}>
            <Logo size="w-[80px]" />
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