import { FC } from "react";
import Button from "../UI/Button";
import Logo from "../UI/Logo";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="h-12 my-32 flex items-center justify-between">
      <Logo />
      <div className="flex">
        <Button intent={"link"} hasIcon icon="">
          Support
        </Button>
        <Button intent={"link"} hasIcon icon="">
          Contact
        </Button>
        <Button intent={"link"} hasIcon icon="">
          Privacy
        </Button>
        <Button intent={"link"} hasIcon icon="">
          Terms
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
