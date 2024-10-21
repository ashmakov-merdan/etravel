"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Language from "../language";
import Logo from "../logo";
import Menu from "../menu";
import { Link } from "@/i18n/navigation";

const Navbar = () => {
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 300], ["90%", "0%"]);
  const logoX = useTransform(scrollY, [0, 300], ["50%", "0%"]);
  const logoSize = useTransform(scrollY, [0, 300], ["660px", "120px"]);
  const zIndex = useTransform(scrollY, [0, 3000], [1, 50]);

  return (
    <motion.div className="container mx-auto fixed top-0 left-0 right-0 grid grid-cols-3 items-center bg-transparent" style={{ zIndex }}>
      <motion.div className="absolute z-[-10]" transition={{ type: "spring", stiffness: 500 }} style={{ y: logoY, x: logoX, width: logoSize }}>
        <Link href={"/"}>
          <Logo size="" />
        </Link>
      </motion.div>
      <div />
      <Menu />
      <Language />
    </motion.div>
  )
};

export default Navbar;