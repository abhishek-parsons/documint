import { FC } from "react";
import Button from "../UI/Button";
import Title from "../UI/Title";
import Logo from "../UI/Logo";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <main className="mt-12 flex flex-col items-center">
      <Button intent="primary">Hello</Button>
      <Title size="small">Hello</Title>
      <Logo forFigma />
    </main>
  );
};

export default Hero;
