"use client"
import Language from "../language";
import Logo from "../logo";
import Menu from "../menu";
import { Link } from "@/i18n/navigation";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md z-50">
      <div className="px-4 py-3 relative container mx-auto grid max-lg:grid-cols-2 grid-cols-3 items-center">
        <div>
          <Link href={"/"}>
            <Logo size="w-[80px]" />
          </Link>
        </div>
        <Menu />
        <div className="">
          <Language />
        </div>
      </div>
    </div>
  )
};

export default Navbar;