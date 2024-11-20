import { Container } from "react-bootstrap";
export default function App() {
  return (
    <div className=" text-white w-screen h-screen">
      Hello world
      <div className="w-screen h-screen">
        <iframe
          src="https://player.vimeo.com/video/852628482?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
          title="Vimeo video"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-[1000px] bg-red-300 h-[1000px]"
        ></iframe>
      </div>
    </div>
  );
}
