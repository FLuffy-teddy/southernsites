import Image, { StaticImageData } from "next/image";

interface fiftyType {
  Switch?: boolean;
  Image: string | StaticImageData;
  Alt: string;
  Header: string;
  Text: string;
  SubText?: string;
  Number?: string;
}

export default function Fifty(props: fiftyType) {
  return (
    <div className={`flex w-screen justify-center items-center p-24`}>
      <div
        className={`flex gap-4 items-baseline justify-center h-fit w-1/2 ${
          props.Switch ? " order-1" : ""
        }`}
      >
        {props.Number ? (
          <h2 className="text-7xl text-primary">{props.Number}</h2>
        ) : null}
        <div className="w-1/2 flex flex-col gap-6">
          <h3 className="text-5xl leading-tight text-primary underline underline-offset-4">
            {props.Header}
          </h3>
          <p className="text-xl">{props.Text}</p>
          {props.SubText ? <p className="text-xl">{props.SubText}</p> : null}
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image src={props.Image} width={440} height={440} alt={props.Alt} />
      </div>
    </div>
  );
}
