const Intro: React.FC = () => {
  return (
    <div className="flex bg-green-300 ">
      {/* Left Div - Red */}
      <div className="flex-1 bg-red-500"></div>

      {/* Right Div - Blue */}
      <div className="flex-1 bg-blue-500"></div>
    </div>
  );
};
export default Intro;
