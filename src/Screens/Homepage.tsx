import React, { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fb from "../assets/facebook.svg";
import fb2 from "../assets/facebook2.svg";

import afc from "../assets/GIF/afc.gif";
import cvit from "../assets/GIF/cvit.gif";

import haohao from "../assets/GIF/Haohao-color.gif";

import fco from "../assets/GIF/fco3.gif";
import grab from "../assets/GIF/Grab-color.gif";
import ht2 from "../assets/GIF/ht2.gif";
import klook from "../assets/GIF/Klook-color.gif";
import mono from "../assets/GIF/mono.gif";
import ngocdung from "../assets/GIF/ngocdung.gif";
import pho from "../assets/GIF/pho2.gif";
import tuborg2 from "../assets/GIF/tuborg2.gif";
import xiaomi from "../assets/GIF/xiaomi.gif";
import ig from "../assets/instagram.svg";
import ig2 from "../assets/instagram2.svg";
import phone2 from "../assets/phone2.png";
import phone from "../assets/telephone.svg";
import vimeo from "../assets/vimeo.svg";
import vimeo2 from "../assets/vimeo2.svg";
import About from "./About";
import Brands from "./Brands";
import Customers from "./Customers";
import "./Homepage.css";
import Navbar from "./Navbar";
import Services from "./Services";

const Homepage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [isGifModalOpen, setIsGifModalOpen] = useState(false);
  const [activeGif, setActiveGif] = useState<string | null>(null);

  const openGifModal = (gif: string) => {
    setActiveGif(gif);
    setIsGifModalOpen(true);
  };

  const closeGifModal = () => {
    setIsGifModalOpen(false);
    setActiveGif(null);
  };

  return (
    <div className="home-bg overlay bg-scroll">
      <div className="flex flex-col items-center justify-center">
        <div className="h-16 flex-shrink-0 flex items-center justify-center home-nav md:h-20 fixed top-0 left-0 right-0 z-50  ">
          <div className="w-full max-w-[1500px]">
            <Navbar />
          </div>
        </div>

        <div className="  w-full md:w-full  mt-16   items-center md:h-1/2 lg:h-screen h-screen flex flex-col ">
          <div className="container w-full max-w-none  diamond-container  flex-grow relative  ">
            <div className="md:flex flex-col  md:flex-row  w-full md:h-3/4 lg:h-3/4 h-[1000px] ">
              <div className="flex-1 flex-wrap  h-[380px]  lg:h-full z-10 text-white lg:flex lg:justify-center lg:items-center ">
                <div className="  md:ml-5 ipad-pro:ml-14  lg:ml-0 md:mt-20 lg:mt-10 md:w-[400px] md:h-[400px] lg:h-482 lg:w-482">
                  <p className="lg:text-70  ml-3 lg:ml-0 text-[50px] manrope  ">
                    Who are we?
                  </p>
                  <p className="lg:text-80 font-bold  ml-3 lg:ml-0 text-[60px] manrope">
                    Your Best Marketing Partner.
                  </p>
                </div>
              </div>
              <div className="flex-1   md:h-[380px]  lg:h-full flex-wrap text-white z-10 lg:flex lg:justify-center lg:items-center">
                <div className=" lg:mt-28 md:mt-28 lg:h-482flex flex-col justify-center items-center lg:items-end lg:w-482 md:text-right  ">
                  <p className="lg:text-5xl ml-3  lg:ml-0 text-[35px] w-[320px] ipad-pro:w-[400px] lg:w-full ">
                    Creating animated videos with visual effects
                  </p>
                  <div className="flex justify-center items-center lg:justify-end ">
                    <button
                      className="lg:w-96 w-80 lg:h-70 h-14 lg:mt-10 mt-5 manrope font-medium bg-white text-black contact-button"
                      onClick={toggleModal} // Open modal on button click
                    >
                      Contact us
                    </button>

                    {isModalOpen && (
                      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
                        <div className="bg-gray-800 md:w-[80%] lg:w-[50%] p-8 rounded-xl shadow-xl relative">
                          {/* Close Button */}
                          <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                            onClick={toggleModal}
                          >
                            ✕
                          </button>

                          {/* Header Section */}
                          <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white manrope tracking-widest">
                              MOONLIGHT STUDIO
                            </h2>
                            <p className="text-gray-400 manrope mt-2">
                              Creating animated videos with visual effects
                            </p>
                          </div>

                          {/* Divider Line */}
                          <div className="border-t border-gray-700 mb-8"></div>

                          {/* Contact Info Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                            {/* Facebook */}
                            <div className="flex items-center text-left manrope  space-x-4 p-4 bg-gray-900 rounded-lg">
                              <img
                                src={fb2}
                                className="w-8 h-8"
                                alt="Facebook"
                              />
                              <div>
                                <a
                                  href="https://www.facebook.com/@moonlightstudiovfx"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-lg font-medium hover:underline"
                                >
                                  Moonlight Studio
                                </a>
                                <p className="text-sm text-gray-400">
                                  Facebook
                                </p>
                              </div>
                            </div>

                            {/* Instagram */}
                            <div className="flex items-center text-left manrope  space-x-4 p-4 bg-gray-900 rounded-lg">
                              <img
                                src={ig2}
                                className="w-8 h-8"
                                alt="Instagram"
                              />
                              <div>
                                <a
                                  href="https://www.instagram.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-lg font-medium hover:underline"
                                >
                                  @moonlightstudio
                                </a>
                                <p className="text-sm text-gray-400">
                                  Instagram
                                </p>
                              </div>
                            </div>

                            {/* Vimeo */}
                            <div className="flex items-center text-left manrope space-x-4 p-4 bg-gray-900 rounded-lg">
                              <img
                                src={vimeo2}
                                className="w-8 h-8"
                                alt="Vimeo"
                              />
                              <div>
                                <a
                                  href="https://vimeo.com/moonlightstudiovn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-lg font-medium hover:underline"
                                >
                                  Moonlight Studio
                                </a>
                                <p className="text-sm text-gray-400">Vimeo</p>
                              </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center text-left manrope  space-x-4 p-4 bg-gray-900 rounded-lg">
                              <img
                                src={phone2}
                                className="w-8 h-8 filter invert"
                                alt="Phone"
                              />
                              <div>
                                <p className="text-lg font-medium">
                                  0123456789
                                </p>
                                <p className="text-sm text-gray-400">Phone</p>
                              </div>
                            </div>
                          </div>

                          {/* Footer Section */}
                          <div className="mt-8 text-center">
                            <p className="text-gray-400 text-sm">
                              © {new Date().getFullYear()} Moonlight Studio. All
                              rights reserved.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-section  ">
              <Brands></Brands>
            </div>
          </div>
        </div>
        {/* ABOUT */}
        <About></About>
        <Services></Services>

        <Customers></Customers>

        <div
          id="Works"
          className="home-item  lg:w-full  md:w-765 lg:h-[550px]  "
        >
          <div className="flex lg:mt-20 mt-28 p-1 lg:p-0  text-5xl manrope text-white  lg:justify-start lg:mr-12">
            Some of our works
          </div>
          <Swiper
            scrollbar={{ hide: true }}
            modules={[Scrollbar]}
            className="mySwiper h-[350px]"
          >
            <SwiperSlide>
              <div className="flex justify-center gap-8 p-8 mt-6 w-full">
                {/* GIF Box 1 */}
                <div
                  className="w-[450px] h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("ht2")}
                >
                  <img
                    src={ht2}
                    alt="Gif 1"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 2 */}
                <div
                  className="w-[450px] hidden md:flex h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("grab")}
                >
                  <img
                    src={grab}
                    alt="Gif 2"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 3 */}
                <div
                  className="w-[450px] hidden lg:flex h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("fco")}
                >
                  <img
                    src={fco}
                    alt="Gif 3"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center gap-8 p-8 mt-6 w-full">
                {/* GIF Box 1 */}
                <div
                  className="w-[450px] h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("afc")}
                >
                  <img
                    src={afc}
                    alt="Gif 1"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 2 */}
                <div
                  className="w-[450px] hidden md:flex h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("tuborg2")}
                >
                  <img
                    src={tuborg2}
                    alt="Gif 2"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 3 */}
                <div
                  className="w-[450px] hidden lg:flex h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("cvit")}
                >
                  <img
                    src={cvit}
                    alt="Gif 3"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center gap-8 p-8 mt-6 w-full">
                {/* GIF Box 1 */}
                <div
                  className="w-[450px] h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("haohao")}
                >
                  <img
                    src={haohao}
                    alt="Gif 1"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 2 */}
                <div
                  className="w-[450px] hidden md:flex h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("mono")}
                >
                  <img
                    src={mono}
                    alt="Gif 2"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 3 */}
                <div
                  className="w-[450px] hidden lg:flex h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("klook")}
                >
                  <img
                    src={klook}
                    alt="Gif 3"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center gap-8 p-8 mt-6 w-full">
                {/* GIF Box 1 */}
                <div
                  className="w-[450px] h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("ngocdung")}
                >
                  <img
                    src={ngocdung}
                    alt="Gif 1"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 2 */}
                <div
                  className="w-[450px] hidden md:flex h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("pho")}
                >
                  <img
                    src={pho}
                    alt="Gif 2"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>

                {/* GIF Box 3 */}
                <div
                  className="w-[450px] hidden lg:flex h-[250px] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGifModal("xiaomi")}
                >
                  <img
                    src={xiaomi}
                    alt="Gif 3"
                    className="object-cover gif-box w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Fullscreen Modal */}
          {isGifModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
              onClick={closeGifModal}
            >
              <div className="relative w-full h-full flex justify-center items-center">
                <button
                  className="absolute top-5 right-5 text-white text-3xl z-50"
                  onClick={closeGifModal}
                >
                  ✕
                </button>
                <img
                  src={
                    activeGif === "ht2"
                      ? ht2
                      : activeGif === "grab"
                      ? grab
                      : activeGif === "fco"
                      ? fco
                      : activeGif === "afc"
                      ? afc
                      : activeGif === "cvit"
                      ? cvit
                      : activeGif === "tuborg2"
                      ? tuborg2
                      : activeGif === "haohao"
                      ? haohao
                      : activeGif === "mono"
                      ? mono
                      : activeGif === "klook"
                      ? klook
                      : activeGif === "ngocdung"
                      ? ngocdung
                      : activeGif === "pho"
                      ? pho
                      : xiaomi
                  }
                  alt="Fullscreen GIF"
                  className="object-contain w-full h-full p-4"
                />
              </div>
            </div>
          )}
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
