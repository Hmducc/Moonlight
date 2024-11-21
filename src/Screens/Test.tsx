export default function App() {
  return (
    <div className="text-white w-screen h-screen m-0 p-0 overflow-hidden">
      <div className="w-screen h-screen relative">
        <iframe
          src="https://player.vimeo.com/video/852628482?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0"
          title="Vimeo video"
          allow="autoplay"
          className="absolute top-1/2 left-1/2 w-[1920px] h-[1080px] transform -translate-x-1/2 -translate-y-1/2"
        ></iframe>
      </div>
    </div>
  );
}
