import Image from "next/image";
import Video from "./components/video";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Video />
      <div className="px-4xl">
        <div className="relative min-h-full min-w-full">
          <div className="absolute"></div>
        </div>
      </div>
    </div>
  );
}
