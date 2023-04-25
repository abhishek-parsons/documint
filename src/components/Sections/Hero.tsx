import { FC } from "react";
import Button from "../UI/Button";
import Title from "../UI/Title";
import Image from "next/image";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <main className="mt-12 flex flex-col items-center mb-24 sm:p-20 md:p-0">
      <Title size="big" className="text-slate-900 mb-6 mt-24 text-center">
        Documentation has never been easier
      </Title>
      <p className="mb-16 text-xl text-center">
        Generate comprehensive component documentation with one click.
      </p>
      <Button hasIcon icon="figma" className="mb-12">
        Try For Free
      </Button>
      <Image
        src={"/automator-hero.gif"}
        alt="D"
        width={720}
        height={480}
        className="mr-2 rounded-xl shadow-xl"
      />
    </main>
  );
};

export default Hero;
