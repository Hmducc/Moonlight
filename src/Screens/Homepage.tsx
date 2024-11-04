import React, { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
import ig from "../assets/instagram.svg";
import phone from "../assets/telephone.svg";
import vimeo from "../assets/vimeo.svg";
import About from "./About";
import Brands from "./Brands";
import Customers from "./Customers";
import "./Homepage.css";
import Navbar from "./Navbar";
import Services from "./Services";
import Software from "./Software";
const Homepage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
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
                  <div className="flex justify-center items-center lg:justify-end">
                    <button
                      className="lg:w-96 w-80 lg:h-70 h-14 lg:mt-10 mt-5 manrope font-medium bg-white text-black contact-button"
                      onClick={toggleModal} // Open modal on button click
                    >
                      Contact us
                    </button>

                    {/* Modal */}
                    {isModalOpen && (
                      <div className="fixed inset-0 flex items-center  justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-black md:w-[90%] w-[80%] lg:w-[50%] z-50 h-auto p-6 rounded-lg shadow-lg relative">
                          <button
                            className="absolute top-2 right-2 text-white hover:text-gray-300"
                            onClick={toggleModal}
                          >
                            ✕
                          </button>
                          <div></div>
                          <h2 className="text-2xl font-semibold  mb-4 manrope text-white text-center">
                            MOONLIGHT STUDIO
                          </h2>
                          <div className="text-white text-left lg:h-10 justify-center  flex flex-col md:flex-row w-full">
                            <div className=" flex items-center  mt-3 lg:mt-0 justify-start md:justify-center flex-1 flex-row flex-wrap">
                              <a
                                href="https://www.facebook.com/@moonlightstudiovfx"
                                target="blank"
                              >
                                <img
                                  src={fb}
                                  className="w-5 h-5 filter invert "
                                  alt="Facebook"
                                />
                              </a>
                              <a
                                href="https://www.facebook.com/@moonlightstudiovfx"
                                className="ml-5"
                                target="blank"
                              >
                                Moonlight Studio
                              </a>
                            </div>
                            <div className=" flex-1 flex items-center mt-5 lg:mt-0 justify-start md:justify-center  flex-row flex-wrap">
                              <a
                                href="https://www.instagram.com"
                                target="blank"
                              >
                                <img
                                  src={ig}
                                  className="w-5 h-5 filter invert"
                                  alt="Instagram"
                                />
                              </a>
                              <a
                                href="https://www.instagram.com"
                                className="ml-5"
                              >
                                https://www.instagram.com
                              </a>
                            </div>
                          </div>
                          <div className=" text-left lg:h-10 justify-center  mt-5 lg:mt-0   flex flex-col md:flex-row w-full">
                            <div className=" flex-1 flex  items-center justify-start md:justify-center  flex-row flex-wrap">
                              <a
                                href="https://vimeo.com/moonlightstudiovn"
                                target="blank"
                              >
                                <img
                                  src={vimeo}
                                  className="w-5 h-5 filter invert"
                                  alt="Vimeo"
                                />
                              </a>
                              <a
                                href="https://vimeo.com/moonlightstudiovn"
                                className="ml-5"
                                target="blank"
                              >
                                Moonlight Studio
                              </a>
                            </div>
                            <div className="flex-1 flex items-center  mt-5 lg:mt-0 justify-start md:justify-center  flex-row flex-wrap">
                              <a>
                                <img
                                  src={phone}
                                  className="w-5 h-5 filter invert"
                                />
                              </a>
                              <p className="ml-5">0123456789</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
        <About></About>
        <Services></Services>
        <Software></Software>
        <Customers></Customers>

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
