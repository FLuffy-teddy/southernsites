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
    <div
      className={`w-full flex justify-center ${
        props.Background ? "bg-black" : null
      }`}
    >
      <div
        className={`w-screen h-screen flex relative lg:min-h-[720px] items-center`}
      >
        <div className=" items-center bg-black/70 z-10 relative h-fit p-6 rounded-full border">
          <h2 className="text-4xl md:text-6xl text-white pl-6 pr-24">
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
          />
        </div>
      </div>
    </div>
  );
}
