import Header from "./components/header";
import Hero from "./components/hero";
import HeroImage from "./public/hero-image.jpg";
import LogoImage from "./public/logo.svg";

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
    </div>
  );
}
