import { cva } from "cva";
import { FC } from "react";

interface LogoProps {
  forFigma: boolean;
}

const Logo: FC<LogoProps> = ({ forFigma }) => {
  return (
    <div>
      <p>{`Docummint ${forFigma ? "For Figma" : ""}`}</p>
    </div>
  );
};

export default Logo;
