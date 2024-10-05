import Fifty from "./components/fifty";
import Header from "./components/header";
import Hero from "./components/hero";
import SingleCol from "./components/single-col";
import { ModeToggle } from "./components/themeswitch";
import HeroImage from "./public/hero-image.jpg";
import LogoImage from "./public/logo.svg";
import FirstFiftyImage from "./public/Own-It.svg";
import "./json/fifty-json.js";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header Logo={LogoImage} />
      <Hero
        Image={HeroImage}
        Alt="Hero Image"
        Header="Designed for"
        EmphasizedHeader="Results"
      />
      <SingleCol
        Header="Results"
        first="I ensure every decision is directed to get you what you desire: "
        firstEmphasized="Getting Results"
        second="Whatever reason you have for building, I promise precision."
        third="Call or email for a free quote or comparison of your current website."
        button={true}
      />
      <Fifty
        Image={FirstFiftyImage}
        Alt="Own It"
        Header="Own It"
        Text="You control the process start to finish, and own the product once we are done."
        SubText="I am here to help you realize your vision for your website."
        Number="1)"
      />

      <div className="fixed right-5 bottom-5">
        <ModeToggle />
      </div>
    </div>
  );
}
