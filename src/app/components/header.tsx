import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./themeswitch";

interface HeaderProps {
  Logo: StaticImageData;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex justify-between">
      <Image src={props.Logo} alt="Logo" height="58" width="63" />
      <ModeToggle />
      <Button variant="outline">Contact</Button>
    </div>
  );
}
