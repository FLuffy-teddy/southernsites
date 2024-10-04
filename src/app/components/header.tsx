import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./themeswitch";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Image src="/logo.svg" alt="Logo" height="58" width="63" />
      <ModeToggle />
      <Button variant="outline">Contact</Button>
    </div>
  );
}
