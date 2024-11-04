import man from "../assets/3man.svg";
import chat from "../assets/chat.svg";
import golden from "../assets/golden.svg";
import handshake from "../assets/handshake.svg";
import plus from "../assets/plus.svg";

export default function Customers() {
  return (
    <div
      id="Customers"
      className="home-item  lg:w-full  md:w-765 lg:h-[1020px]  "
    >
      <div className="home-item   lg:w-full md:w-[765px]">
        <div className="flex mt-20 p-1 lg:p-0  text-5xl manrope text-white  lg:justify-end lg:mr-12">
          Customers Priority
        </div>
        <div className="flex  justify-center mt-5  md:h-[380px] items-center  h-[700px] lg:h-[250px]">
          {/* Container with Two Equal Columns */}
          <div className="flex flex-col  md:flex-row w-full">
            {/* Left Column */}
            <div className="flex-1 flex w-1/2 flex-wrap  justify-center items-center  ">
              <div className="home-customers lg:flex md:flex md:flex-col lg:flex-row items-center h-[350px]  lg:h-[200px] w-[510px]">
                <div className="home-circle lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] flex justify-center items-center">
                  <img
                    src={plus}
                    className="lg:h-[100px] h-[50px]  stroke-white object-contain"
                  ></img>
                </div>
                <div className="absolute md:relative lg:absolute lg:ml-[160px] h-[200px] w-[340px] mt-5 lg:mt-0 lg:h-[200px] lg:w-[350px] home-rectangle flex justify-center items-center text-white text-xl p-4">
                  Arrange suitable quality personnel for jobs.
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex w-1/2 flex-wrap  justify-center items-center  ">
              <div className="home-customers lg:flex md:flex md:flex-col lg:flex-row items-center h-[350px]  lg:h-[200px] w-[510px]">
                <div className="home-circle lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] flex justify-center items-center">
                  <img
                    src={man}
                    className="lg:h-[100px] h-[50px]  stroke-white object-contain"
                  ></img>
                </div>
                <div className="absolute md:relative lg:absolute lg:ml-[160px] h-[200px] w-[340px] mt-5 lg:mt-0 lg:h-[200px] lg:w-[350px] home-rectangle flex justify-center items-center text-white text-xl p-4">
                  Strengthen supplementary personnel - serving specialized
                  quality job requirements (motion control, simulation, roto
                  scoping,...)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:h-[270px] lg:flex lg:justify-center lg:items-center">
          <div className="flex-1   flex flex-wrap justify-center items-center  ">
            <div className="home-customers lg:flex md:flex md:flex-col lg:flex-row items-center  h-[280px]  lg:h-[200px] w-[510px]">
              <div className="home-circle-star lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] flex justify-center items-center">
                <img src={golden} className="lg:h-[100px] h-[50px]"></img>
              </div>
              <div className="absolute md:relative lg:absolute lg:ml-[160px] h-[120px] w-[340px] mt-5 lg:mt-0 lg:h-[200px] lg:w-[350px] home-rectangle flex justify-center items-center text-white text-xl p-4">
                Priority is given to serving jobs requirement ASAP.
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center lg:mt-5  h-[600px] md:h-[380px] lg:h-[250px]">
          {/* Container with Two Equal Columns */}
          <div className="flex flex-col   md:flex-row w-full">
            {/* Left Column */}
            <div className="flex-1 w-1/2  flex flex-wrap justify-center items-center  ">
              <div className="home-customers lg:flex md:flex md:flex-col lg:flex-row items-center  h-[350px]  lg:h-[200px] w-[510px]">
                <div className="home-circle lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] flex justify-center items-center">
                  <img
                    className="lg:h-[100px] h-[60px] stroke-white object-contain"
                    src={chat}
                  ></img>
                </div>
                <div className="absolute md:relative lg:absolute lg:ml-[160px] h-[200px] w-[340px] mt-5 lg:mt-0 lg:h-[200px] lg:w-[350px] home-rectangle flex justify-center items-center text-white text-xl p-4">
                  Support the implementation of Animatics for Production House
                  pitching (last-round), or support Animation demo for the
                  pre-production phase.
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 w-1/2 flex flex-wrap  justify-center items-center  ">
              <div className="home-customers g:flex md:flex md:flex-col lg:flex-row items-center h-[350px]  lg:h-[200px] w-[510px]">
                <div className="home-circle lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] flex justify-center items-center">
                  <img src={handshake} className="lg:h-[110px] h-[70px]"></img>
                </div>
                <div className="absolute md:relative lg:absolute lg:ml-[160px] h-[200px] w-[340px] mt-5 lg:mt-0 lg:h-[200px] lg:w-[350px] home-rectangle flex justify-center items-center text-white text-xl p-4">
                  Both parties are responsible for securing Priority information
                  together, and commit that the content of the collaboration
                  will not be disclosed to any third party in any form
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
