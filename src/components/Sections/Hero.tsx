import { FC } from "react";
import Button from "../UI/Button";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <main className="mt-12 flex flex-col items-center">
      <Button intent="primary">Hello</Button>
    </main>
  );
};

export default Hero;
