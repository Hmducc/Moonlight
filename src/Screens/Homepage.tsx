import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import man from "../assets/3man.svg";
import chat from "../assets/chat.svg";
import Cinema4D from "../assets/cinema4d.png";
import fb from "../assets/facebook.svg";
import afc from "../assets/GIF/afc.gif";
import cvit from "../assets/GIF/cvit.gif";
import fco from "../assets/GIF/fco3.gif";
import grab from "../assets/GIF/Grab-color.gif";
import haohao from "../assets/GIF/Haohao-color.gif";
import ht2 from "../assets/GIF/ht2.gif";
import klook from "../assets/GIF/Klook-color.gif";
import mono from "../assets/GIF/mono.gif";
import ngocdung from "../assets/GIF/ngocdung.gif";
import pho from "../assets/GIF/pho2.gif";
import tuborg2 from "../assets/GIF/tuborg2.gif";
import xiaomi from "../assets/GIF/xiaomi.gif";
import golden from "../assets/golden.svg";
import handshake from "../assets/handshake.svg";
import Houdini from "../assets/Houdini.png";
import ig from "../assets/instagram.svg";
import plus from "../assets/plus.svg";
import phone from "../assets/telephone.svg";
import Unreal from "../assets/Unreal.png";
import vimeo from "../assets/vimeo.svg";
import Brands from "./Brands";
import "./Homepage.css";
import Navbar from "./Navbar";
const Homepage: React.FC = () => {
  return (
    <div className="home-bg overlay bg-scroll">
      <div className="flex flex-col items-center justify-center">
        <div className="h-16 flex-shrink-0 flex items-center justify-center home-nav md:h-20 fixed top-0 left-0 right-0 z-50  ">
          <div className="w-full max-w-[1500px]">
            <Navbar />
          </div>
        </div>

        <div className="  w-[358px] md:w-full  mt-16   items-center md:h-1/2 lg:h-screen h-screen flex flex-col ">
          <div className="container  diamond-container  flex-grow relative  ">
            <div className="md:flex flex-col  md:flex-row  w-full md:h-3/4 lg:h-3/4 h-[1000px] ">
              <div className="flex-1 flex-wrap  h-[380px]  lg:h-full z-10 text-white lg:flex lg:justify-center lg:items-center ">
                <div className=" md:ml-5  lg:ml-0 md:mt-20 lg:mt-10 md:w-[400px] md:h-[400px] lg:h-482 lg:w-482">
                  <p className="lg:text-70  ml-3 lg:ml-0 text-[50px] manrope  ">
                    Who are we?
                  </p>
                  <p className="lg:text-80 font-bold  ml-3 lg:ml-0 text-[60px] manrope">
                    Your Best Marketing Partner.
                  </p>
                </div>
              </div>
              <div className="flex-1   md:h-[380px]  lg:h-full flex-wrap text-white z-10 lg:flex lg:justify-center lg:items-center">
                <div className=" lg:mt-28 md:mt-28 lg:h-482flex flex-col justify-center items-center lg:items-end lg:w-482 lg:text-right">
                  <p className="lg:text-5xl ml-3  lg:ml-0 text-[35px] ">
                    Creating animated videos with visual effects
                  </p>
                  <div className=" flex justify-center items-center lg:justify-end ">
                    <button className="lg:w-96 w-80  lg:h-70 h-14 lg:mt-10 mt-5 manrope font-medium  bg-white text-black contact-button">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-section ">
              <Brands></Brands>
            </div>
          </div>
        </div>
        {/* ABOUT */}
        <div
          id="About"
          className="   lg:w-full  md:w-[765px] h-[1350px] md:h-[700px] lg:h-[670px]"
        >
          <div className="flex   justify-center mt-20 mb-20 lg:h-[500px] h-[1300px]  md:h-[630px]">
            {/* Container with Two Equal Columns */}
            <div className="flex flex-col md:flex-row w-full">
              {/* Left Column */}
              <div className="flex-1  lg:w-[100px] flex flex-wrap justify-center items-center md:gap-7 lg:gap-4 p-2 lg:p-4">
                {/* Box 1 */}
                <div className="lg:w-[280px] w-[320px] h-[131px] p-2 lg:p-8 intro-box lg:h-[175px] border border-gray-300">
                  <div className="text-white text-5xl manrope ml-6 lg:ml-0">
                    2018
                  </div>
                  <div className="text-white text-xl mt-1 manrope ml-6 lg:ml-0">
                    Year's Founder
                  </div>
                </div>

                {/* Box 2 */}
                <div className="lg:w-[280px] w-[320px] h-[131px] p-2 lg:p-8 intro-box lg:h-[175px] border border-gray-300">
                  <div className="text-white text-5xl manrope ml-6 lg:ml-0">
                    20+
                  </div>
                  <div className="text-white text-xl mt-1 manrope ml-6 lg:ml-0">
                    Professionals
                  </div>
                </div>

                {/* Box 3 */}
                <div className="lg:w-[280px] w-[320px] h-[131px] p-2 lg:p-8 intro-box lg:h-[175px] border border-gray-300">
                  <div className="text-white text-5xl manrope ml-6 lg:ml-0">
                    500+
                  </div>
                  <div className="text-white text-xl mt-1 manrope ml-6 lg:ml-0">
                    Videos Collab
                  </div>
                </div>

                {/* Box 4 */}
                <div className="lg:w-[280px] w-[320px] h-[131px] p-2 lg:p-8 intro-box lg:h-[175px] border border-gray-300">
                  <div className="text-white text-5xl manrope ml-6 lg:ml-0">
                    50+
                  </div>
                  <div className="text-white text-xl mt-1 manrope ml-6 lg:ml-0">
                    Brand Connections
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1  flex justify-center p-3">
                <div className="flex p-4 ">
                  <div>
                    <div className="text-left text-[50px] text-white manrope">
                      Moonlight Studio
                    </div>
                    <div className="text-white text-xl mt-5 manrope">
                      Moonlight Studio, founded 2018, is a post production
                      studio focused on quality storytelling, striking visuals,
                      and innovative design.{" "}
                    </div>
                    <div className="text-white text-xl mt-5 manrope">
                      Moonlight Studio, founded 2018, is a post production
                      studio focused on quality storytelling, striking visuals,
                      and innovative design.{" "}
                    </div>
                    <div className="text-white text-xl mt-5 manrope">
                      Moonlight Studio, founded 2018, is a post production
                      studio focused on quality storytelling, striking visuals,
                      and innovative design.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="Services"
          className="home-item   md:h-[1600px] lg:h-[1500px] lg:w-full  md:w-765 "
        >
          <div className="flex mt-20 p-1 lg:p-0 mr-12 md:mr-3 text-5xl manrope text-white  md:justify-end ">
            Services
          </div>
          <div className="md:flex  md:flex-row md:h-[900px] md:items-center  gap-8 justify-center lg:mt-6 lg:p-8 p-2">
            <div className="md:w-1/3 md:h-full ">
              <div className="md:w-full w-[340px] h-[286px]  lg:h-[250px] overflow-hidden rounded-lg  ">
                <img
                  src={mono}
                  alt="Gif 1"
                  className="object-cover gif-box w-full h-full"
                />
              </div>
              <div>
                <div className=" md:w-full h-[420px] w-[350px]  md:h-[560px] lg:h-[400px] lg:mt-20 mt-12  overflow-hidden  details-box text-white p-3 ">
                  <div className="lg:text-2xl text-xl">01</div>
                  <div className="lg:text-3xl text-2xl mt-2 mb-3">CGI</div>
                  <div className="text-xl ">
                    Computer Generated Imagery (CGI) services. creating top-tier
                    3D visualizations, animations, and visual effects (VFX) for
                    various media such as images, films, and interactive
                    applications.  We work for clients worldwide – corporations,
                    mid-size enterprises, agencies and film productions
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3  md:h-full ">
              <div className="mt-12 md:mt-0 lg:mt-0 md:w-full w-[340px] h-[286px]  lg:h-[250px] overflow-hidden rounded-lg ">
                <img
                  src={afc}
                  alt="Gif 1"
                  className="object-cover gif-box w-full h-full"
                />
              </div>
              <div className="md:w-full w-[350px] h-[420px]   lg:h-[400px] lg:mt-20 mt-12  overflow-hidden  details-box text-white p-3 ">
                <div className="lg:text-2xl text-xl">02</div>
                <div className="lg:text-3xl text-2xl mt-2 mb-3">
                  Color - Grading
                </div>
                <div className="text-xl ">
                  Elevate your visuals with our expert colour grading solutions.
                  We enhance the mood, consistency, and overall aesthetic of
                  your content, ensuring it stands out and captivates your
                  audience.
                </div>
              </div>
            </div>
            <div className="md:w-1/3 md:h-full  ">
              <div className="mt-12 md:mt-0 lg:mt-0 md:w-full w-[340px] h-[286px]  lg:h-[250px] overflow-hidden rounded-lg ">
                <img
                  src={tuborg2}
                  alt="Gif 1"
                  className="object-cover gif-box w-full h-full"
                />
              </div>
              <div className="md:w-full w-[350px] h-[420px] md:h-[550px]   lg:h-[400px] lg:mt-20 mt-12  overflow-hidden  details-box text-white p-3 ">
                <div className="lg:text-2xl text-xl">03</div>
                <div className="lg:text-3xl text-2xl mt-2 mb-3">Graphics</div>
                <div className="text-xl ">
                  Regardless of whether it’s 2D or 3D, our services excel in
                  providing cutting-edge graphics and motion graphics to enhance
                  the visual appeal of your content. Our expertise spans
                  everything from typefaces and compositing shots to creating
                  captivating animated sequences.
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex  md:flex-row md:items-center justify-center gap-8 lg:p-8 p-2    ">
            {/* Details Box 1 */}
            <div className=" md:hidden  lg:mt-0 lg:w-[450px] w-[340px] h-[286px]  lg:h-[250px] overflow-hidden rounded-lg ">
              <img
                src={haohao}
                alt="Gif 1"
                className="object-cover gif-box w-full h-full"
              />
            </div>
            <div className="lg:w-[450px] w-[350px] h-[460px]   lg:h-[400px] lg:mt-0 mt-12  overflow-hidden  details-box text-white p-3 ">
              <div className="lg:text-2xl text-xl">04</div>
              <div className="lg:text-3xl text-2xl mt-2 mb-3">
                Post Production
              </div>
              <div className="text-xl">
                <ul className="list-disc ml-5">
                  <p>Tracking and Matchmoving:</p>
                  <li className="ml-8">
                    Track camera movement and 3D geometry within the live-action
                    plates.
                  </li>
                  <li className="ml-8">
                    Match virtual elements (CGI) to the real-world camera
                    motion.
                  </li>
                  <p>Rotoscoping and Matte Painting:</p>
                  <li className="ml-8">
                    Rotoscope or create masks to isolate specific areas in the
                    footage.
                  </li>
                </ul>
              </div>
            </div>

            {/* Details Box 2 */}
            <div className=" md:hidden  mt-12 lg:mt-0 lg:w-[450px] w-[340px] h-[286px]  lg:h-[250px] overflow-hidden rounded-lg ">
              <img
                src={ht2}
                alt="Gif 1"
                className="object-cover gif-box w-full h-full"
              />
            </div>
            <div className="lg:w-[450px] w-[350px] h-[320px]    lg:h-[400px] lg:mt-0 mt-12  overflow-hidden  details-box text-white p-3  ">
              <div className="lg:text-2xl text-xl">05</div>
              <div className="lg:text-3xl text-2xl mt-2 mb-3">VFX</div>
              <div className="text-xl">
                Elevate your visuals with our expert colour grading solutions.
                We enhance the mood, consistency, and overall aesthetic of your
                content, ensuring it stands out and captivates your audience.
              </div>
            </div>
          </div>
        </div>

        <div
          id="Software"
          className="home-item  lg:w-full  md:h-[1100px]  md:w-765 lg:h-[1360px] "
        >
          <div className="flex mt-20 p-1 lg:p-0 text-5xl manrope text-white  justify-start lg:ml-12">
            Software Proficiency
          </div>
          <div className="flex p-1 lg:p-0  text-xl manrope text-white  justify-start lg:ml-12">
            At Moonlight Studio, we prfioritize technical skill and a methodical
            approach to post-production, ensuring that every project we
            undertake is executed with attention to detail and technical
            prowess.
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
                  Utilized for complex simulations, Houdini allows us to
                  accurately replicate physical phenomena such as fluids, smoke,
                  and fire, providing a high level of realism in our visual
                  effects.
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
                      Support the implementation of Animatics for Production
                      House pitching (last-round), or support Animation demo for
                      the pre-production phase.
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 w-1/2 flex flex-wrap  justify-center items-center  ">
                  <div className="home-customers g:flex md:flex md:flex-col lg:flex-row items-center h-[350px]  lg:h-[200px] w-[510px]">
                    <div className="home-circle lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] flex justify-center items-center">
                      <img
                        src={handshake}
                        className="lg:h-[110px] h-[70px]"
                      ></img>
                    </div>
                    <div className="absolute md:relative lg:absolute lg:ml-[160px] h-[200px] w-[340px] mt-5 lg:mt-0 lg:h-[200px] lg:w-[350px] home-rectangle flex justify-center items-center text-white text-xl p-4">
                      Both parties are responsible for securing Priority
                      information together, and commit that the content of the
                      collaboration will not be disclosed to any third party in
                      any form
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-item  lg:w-full  md:w-765 lg:h-[550px]  ">
          <div className="flex lg:mt-20 mt-28 p-1 lg:p-0  text-5xl manrope text-white  lg:justify-start lg:mr-12">
            Some of our works
          </div>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper h-[350px]"
          >
            <SwiperSlide>
              <div className="flex justify-center gap-8 p-8 mt-6 w-full ">
                {/* GIF Box 1 */}
                <div className="w-[450px]  h-[250px] overflow-hidden rounded-lg  ">
                  <img
                    src={ht2}
                    alt="Gif 1"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 2 */}
                <div className="w-[450px] hidden md:flex h-[250px] overflow-hidden rounded-lg ">
                  <img
                    src={grab}
                    alt="Gif 2"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 3 */}
                <div className="w-[450px]  hidden lg:flex  h-[250px] overflow-hidden rounded-lg ">
                  <img
                    src={fco}
                    alt="Gif 3"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center gap-8 p-8 mt-6  w-full ">
                {/* GIF Box 1 */}
                <div className="w-[450px]  h-[250px] overflow-hidden rounded-lg  ">
                  <img
                    src={cvit}
                    alt="Gif 1"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 2 */}
                <div className="w-[450px]  hidden md:flex h-[250px] overflow-hidden rounded-lg ">
                  <img
                    src={tuborg2}
                    alt="Gif 2"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 3 */}
                <div className="w-[450px]  hidden lg:flex h-[250px] overflow-hidden rounded-lg ">
                  <img
                    src={afc}
                    alt="Gif 3"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center gap-8 p-8 mt-6 w-full  ">
                {/* GIF Box 1 */}
                <div className="w-[450px]  h-[250px] overflow-hidden rounded-lg  ">
                  <img
                    src={haohao}
                    alt="Gif 1"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 2 */}
                <div className="w-[450px]  hidden md:flex h-[250px] overflow-hidden rounded-lg ">
                  <img
                    src={mono}
                    alt="Gif 2"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 3 */}
                <div className="w-[450px]  hidden lg:flex h-[250px] overflow-hidden rounded-lg ">
                  <img
                    src={klook}
                    alt="Gif 3"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center gap-8 p-8 mt-6 w-full ">
                {/* GIF Box 1 */}
                <div className="w-[450px]  hidden md:flex h-[250px] overflow-hidden rounded-lg  ">
                  <img
                    src={ngocdung}
                    alt="Gif 1"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 2 */}
                <div className="w-[450px]  hidden lg:flex h-[250px] overflow-hidden rounded-lg ">
                  <img
                    src={pho}
                    alt="Gif 2"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 3 */}
                <div className="w-[450px]  h-[250px] overflow-hidden rounded-lg ">
                  <img
                    src={xiaomi}
                    alt="Gif 3"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center   items-center space-x-12 lg:space-x-32 h-12 md:space-x-24 home-footer">
        <a href="https://www.facebook.com/@moonlightstudiovfx">
          <img src={fb} className="w-5 h-5 filter invert" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com">
          <img src={ig} className="w-5 h-5 filter invert" alt="Instagram" />
        </a>
        <a href="https://vimeo.com/moonlightstudiovn">
          <img src={vimeo} className="w-5 h-5 filter invert" alt="Vimeo" />
        </a>
        <a>
          <img src={phone} className="w-5 h-5 filter invert" alt="Phone" />
        </a>
      </div>
      <div className="text-white flex w-full h-10 justify-center items-center md:text-base text-sm mt-5  manrope">
        Designed and Developed by Hoang Anh Gaming
      </div>
    </div>
  );
};

export default Homepage;
