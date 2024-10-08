import { FC } from "react";
import { Menu, MenuButton } from "@headlessui/react";
import { LanguageIcon } from "@heroicons/react/16/solid";

const Language: FC = () => {
  return (
    <Menu>
      <MenuButton>
        <LanguageIcon className="size-5"/>
      </MenuButton>
    </Menu>
  )
};

export default Language;