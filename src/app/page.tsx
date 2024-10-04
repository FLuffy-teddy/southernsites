import Video from "./components/video";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4xl">
        <div className="relative min-h-full min-w-full">
          <div className="absolute"></div>
        </div>
      </div>
    </div>
  );
}
