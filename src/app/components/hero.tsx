import Image, { StaticImageData } from "next/image";

interface HeroProps {
  Image: StaticImageData;
  Alt: string;
  Header?: string;
  EmphasizedHeader?: string;
  Subheader?: string;
  Button?: boolean;
  Background?: boolean;
  Filter?: boolean;
}

export default function Hero(props: HeroProps) {
  return (
    <div className={`w-full flex justify-center overflow-hidden`}>
      <div
        className={`w-screen h-screen flex relative lg:min-h-[720px] items-center`}
      >
        <div className=" items-center bg-primary/20 z-10 relative h-fit ml-24 rounded-full border transition-all">
          <h2 className="text-4xl md:text-6xl text-white py-6 px-24">
            {props.Header} <br />
            <span className="text-primary text-5xl md:text-7xl font-bold text-white">
              {props.EmphasizedHeader}
            </span>
          </h2>
        </div>
        <div className="absolute top-0 right-0 w-full h-full z-1">
          <Image
            src={props.Image}
            alt={props.Alt}
            className={`${props.Filter ? "grayscale" : null}`}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
