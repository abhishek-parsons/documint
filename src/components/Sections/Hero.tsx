import { FC } from "react";
import Button from "../UI/Button";
import Title from "../UI/Title";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <main className="mt-12 flex flex-col items-center">
      <Button intent="primary">Hello</Button>
      <Title size="small">Hello</Title>
    </main>
  );
};

export default Hero;
