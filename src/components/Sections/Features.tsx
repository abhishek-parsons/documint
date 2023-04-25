import { FC } from "react";
import Title from "../UI/Title";
import { Figma, Code, Layout, Sliders } from "react-feather";
import Button from "../UI/Button";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <div className="mt-12 flex flex-col items-center bg-slate-200 text-slate-800 rounded-3xl">
      <Title size="small" className="mb-6 mt-12">
        Packed with features to get you started!
      </Title>
      <div className="flex justify-around mt-24 mb-24 px-12">
        <div className="px-6">
          <Figma size={48} className="mb-8" />
          <p className="text-xl font-semibold">Works with Figma</p>
          <p className="mt-4 font-normal opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            assumenda alias quaerat repellendus est officiis iste iusto nihil
            quisquam, ad minus doloremque id. Nesciunt at necessitatibus nam
            blanditiis aspernatur rerum.
          </p>
        </div>
        <div className="px-6">
          <Code size={48} className="mb-8" />
          <p className="text-xl font-semibold">Dev Documentation</p>
          <p className="mt-4 font-normal opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            assumenda alias quaerat repellendus est officiis iste iusto nihil
            quisquam, ad minus doloremque id. Nesciunt at necessitatibus nam
            blanditiis aspernatur rerum.
          </p>
        </div>
        <div className="px-6">
          <Layout size={48} className="mb-8" />
          <p className="text-xl font-semibold">Auto Layout Ouput</p>
          <p className="mt-4 font-normal opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            assumenda alias quaerat repellendus est officiis iste iusto nihil
            quisquam, ad minus doloremque id. Nesciunt at necessitatibus nam
            blanditiis aspernatur rerum.
          </p>
        </div>
        <div className="px-6">
          <Sliders size={48} className="mb-8" />
          <p className="text-xl font-semibold">Configurable Properties</p>
          <p className="mt-4 font-normal opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            assumenda alias quaerat repellendus est officiis iste iusto nihil
            quisquam, ad minus doloremque id. Nesciunt at necessitatibus nam
            blanditiis aspernatur rerum.
          </p>
        </div>
      </div>
      <Button hasIcon icon="figma" className="mb-12">
        Try For Free
      </Button>
    </div>
  );
};

export default Features;
