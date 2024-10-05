import { Button } from "@/components/ui/button";

interface singleType {
  Header: string;
  first: string;
  firstEmphasized: string;
  second: string;
  third: string;
  button: boolean;
}

export default function SingleCol(props: singleType) {
  return (
    <div className="max-w-[540px] py-24 flex flex-col justify-center items-center m-auto">
      <h2 className="text-4xl md:text-6xl pb-8">{props.Header}</h2>
      <p className="text-2xl text-center py-4">
        {props.first}
        <span className="text-primary text-3xl">{props.firstEmphasized}</span>
      </p>
      <p className="text-2xl text-center py-4">{props.second}</p>
      <p className="text-2xl text-center py-4">{props.third}</p>
      {props.button ? <Button variant={"secondary"}>Email Me</Button> : null}
    </div>
  );
}
