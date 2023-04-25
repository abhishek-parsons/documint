import { cva } from "cva";
import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  forFigma?: boolean;
}

const Logo: FC<LogoProps> = ({ forFigma }) => {
  return (
    <div className="flex items-center">
      <Image
        src={"/logo.png"}
        alt="D"
        width={32}
        height={20}
        className="mr-2"
      />
      <span className="mr-1 text-xl text-slate-900">Documint</span>
      {forFigma ? (
        <span className="text-xl text-slate-400">For Figma</span>
      ) : null}
    </div>
  );
};

Logo.displayName = "Logo";

export default Logo;
