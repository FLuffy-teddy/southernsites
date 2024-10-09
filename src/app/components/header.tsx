import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  Logo: StaticImageData;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex justify-between items-center px-6 fixed top-0 w-screen z-10 bg-background">
      <Image src={props.Logo} alt="Logo" width="63" />
      <Button>Contact</Button>
    </div>
  );
}
