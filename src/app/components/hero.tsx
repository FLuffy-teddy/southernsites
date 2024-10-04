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
        className={`lg:max-h-screen max-w-[1080px] relative lg:min-h-[720px]`}
      >
        <Image
          src={props.Image}
          alt={props.Alt}
          className={`${props.Filter ? "grayscale" : null}`}
        />
        {props.Header || props.EmphasizedHeader ? (
          <div className="flex flex-col items-center absolute left-0 top-1/4 md:top-1/2 bg-black/70 py-xl px-lg">
            <h2 className="text-4xl md:text-6xl text-white">
              {props.Header} {props.Header ? <br /> : null}
              <span className="text-primary text-5xl md:text-7xl font-bold text-white">
                {props.EmphasizedHeader}
              </span>
            </h2>
          </div>
        ) : null}
      </div>
    </div>
  );
}
