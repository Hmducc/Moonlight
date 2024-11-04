import Cinema4D from "../assets/cinema4d.png";
import Houdini from "../assets/Houdini.png";
import Unreal from "../assets/Unreal.png";

export default function Software() {
  return (
    <div
      id="Software"
      className="home-item  lg:w-full  md:h-[1100px]  md:w-765 lg:h-[1360px] "
    >
      <div className="flex mt-20 p-1 lg:p-0 text-5xl manrope text-white  justify-start lg:ml-12">
        Software Proficiency
      </div>
      <div className="flex p-1 lg:p-0  text-xl manrope text-white  justify-start lg:ml-12">
        At Moonlight Studio, we prfioritize technical skill and a methodical
        approach to post-production, ensuring that every project we undertake is
        executed with attention to detail and technical prowess.
      </div>
      {/*HOUDINI*/}
      <div className="flex home-software    justify-center mt-20  lg:h-[350px]">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Column */}
          <div className="flex-1 flex flex-wrap justify-center items-center  ">
            <div className="w-[400px] h-[230px] lg:w-[400px] lg:h-[230px] md:w-[300px] md:h-[200px] bg-black flex justify-center items-center">
              <img
                src={Houdini}
                className="object-contain h-[260px] w-[250px] lg:h-[260px] lg:w-[250px] md:h-[240px] md:w-[230px]"
              ></img>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1  text-white p-2 lg:p-6 manrope">
            <div className="text-3xl font-bold lg:mb-5 lg:mt-5 mt-3 mb-3">
              Houdini
            </div>
            <div className="lg:text-2xl text-xl">
              Utilized for complex simulations, Houdini allows us to accurately
              replicate physical phenomena such as fluids, smoke, and fire,
              providing a high level of realism in our visual effects.
            </div>
          </div>
        </div>
      </div>
      {/*CINEMA4D*/}
      <div className="flex home-software    justify-center mt-10 lg:mt-0  lg:h-[350px]">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Column */}
          <div className="flex-1 flex flex-wrap justify-center items-center  ">
            <div className="w-[400px] h-[230px] lg:w-[400px] lg:h-[230px] md:mb-5 lg:mb-0 md:w-[300px] md:h-[200px] bg-white flex justify-center items-center">
              <img
                src={Cinema4D}
                className="object-contain h-[260px] w-[250px] lg:h-[260px] lg:w-[250px] md:h-[240px] md:w-[230px]"
              ></img>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1  text-white p-2 lg:p-6 manrope">
            <div className="text-3xl font-bold lg:mb-5 lg:mt-5 mt-3 mb-3 md:mt-0 md:mb-0">
              Cinema 4D
            </div>
            <div className="lg:text-2xl text-xl">
              Chosen for its robust modeling capabilities and efficient
              workflow, Cinema 4D aids us in creating detailed 3D models and
              engaging animations.
            </div>
          </div>
        </div>
      </div>
      {/*UNREAL*/}
      <div className="flex home-software  items-center  justify-center mt-10 lg:mt-0  lg:h-[350px]">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Column */}
          <div className="flex-1 flex flex-wrap justify-center items-center  ">
            <div className="w-[400px] h-[230px] lg:w-[400px] lg:h-[230px] md:mb-5 lg:mb-0 md:w-[300px] md:h-[200px] bg-black flex justify-center items-center">
              <img
                src={Unreal}
                className="object-contain h-[200px] w-[200px] ld:h-[200px] md:w-[150px] md:h-[150px] lg:w-[200px]"
              ></img>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1  text-white p-2 lg:p-6 manrope">
            <div className="text-3xl font-bold lg:mb-5 lg:mt-5 mt-3 mb-3 md:mt-0 md:mb-0">
              Unreal Engine
            </div>
            <div className="lg:text-2xl text-xl">
              Leveraged for virtual production, Unreal Engine enables us to
              integrate live-action footage with CGI, creating dynamic and
              interactive environments with real-time rendering.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
