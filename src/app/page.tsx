import Fifty from "./components/fifty";
import Header from "./components/header";
import Hero from "./components/hero";
import SingleCol from "./components/single-col";
import { ModeToggle } from "./components/themeswitch";
import HeroImage from "./public/hero-image.jpg";
import LogoImage from "./public/logo.svg";
import first from "./public/Own-It.svg";
import second from "./public/SEO.svg";
import third from "./public/Take-Control.svg";
import fourth from "./public/Future-Proof.svg";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header Logo={LogoImage} />
      <Hero
        Image={HeroImage}
        Alt="Hero Image"
        Header="Websites with"
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
        Image={first}
        Alt="Own It"
        Header="Own It"
        Text="You control the process start to finish, and own the product once we are done."
        SubText="I am here to help you realize your vision for your website."
        Number="1)"
        Switch={false}
      />
      <Fifty
        Image={second}
        Alt="SEO"
        Header="SEO"
        Text="Don't waste time paying for clicks on Facebook. Utilize a great SEO score to push your content to the customers you want."
        Number="2)"
        Switch={true}
      />
      <Fifty
        Image={third}
        Alt="Take Control"
        Header="Take Control"
        Text="Tired of drag-and-drop builders constricting what you want?"
        SubText="With custom code you get exactly what you want and nothing more, keeping you lightweight, fast, and most importantly, giving you what you envision"
        Number="3)"
        Switch={false}
      />
      <Fifty
        Image={fourth}
        Alt="Future Proof"
        Header="Future Proof"
        Text="With a website your internet profile exists apart from any social media site, meaning you don't have to jump through their hoops in order to run your business"
        Number="4)"
        Switch={true}
      />
      <Skills />
      <Contact />

      <div className="fixed right-5 bottom-5">
        <ModeToggle />
      </div>
    </div>
  );
}
