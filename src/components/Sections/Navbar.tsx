import { FC } from "react";
import Logo from "../UI/Logo";
import Button from "../UI/Button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="h-12 my-12 flex items-center justify-between">
      <Logo forFigma />
      <div className="flex">
        <Button intent={"link"} hasIcon icon="">
          Features
        </Button>
        <Button intent={"link"} hasIcon icon="">
          Install
        </Button>
        <Button intent={"link"} hasIcon icon="">
          Docs
        </Button>
        <Button hasIcon icon="figma">
          Try For Free
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
