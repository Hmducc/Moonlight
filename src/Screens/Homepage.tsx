import Cinema4D from "../assets/cinema4d.png";
import fb from "../assets/facebook.svg";
import afc from "../assets/GIF/afc.gif";
import mono from "../assets/GIF/mono.gif";
import tuborg2 from "../assets/GIF/tuborg2.gif";
import Houdini from "../assets/Houdini.png";
import ig from "../assets/instagram.svg";
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

        <div className=" home-item mt-16   lg:w-1500 md:w-765 items-center  h-screen flex flex-col">
          <div className="container  diamond-container flex-grow relative ">
            <div className="top-section ">
              <div className="left-half z-10 text-white flex justify-center items-center ">
                <div className="   mt-10 h-482 w-482">
                  <p className="text-70  ">Who are we?</p>
                  <p className="text-80 font-bold">
                    Your Best Marketing Partner.
                  </p>
                </div>
              </div>
              <div className="right-half text-white z-10 flex justify-center items-center">
                <div className=" mt-28  h-482 w-482 text-right">
                  <p className="text-5xl ">
                    Creating animated videos with visual effects
                  </p>
                  <button className="w-96 h-70 mt-10 manrope font-medium  bg-white text-black contact-button">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
            <div className="bottom-section ">
              <Brands></Brands>
            </div>
          </div>
        </div>

        <div id="About" className="home-item   lg:w-[1500px] md:w-[765px]">
          <div className="flex   justify-center mt-20 mb-20 h-[500px]">
            {/* Container with Two Equal Columns */}
            <div className="flex w-full">
              {/* Left Column */}
              <div className="flex-1  flex flex-wrap justify-center items-center gap-4 p-4">
                {/* Box 1 */}
                <div className="w-[240px] p-8 intro-box h-[175px] border border-gray-300  ">
                  <div className="text-white text-5xl manrope">2018</div>
                  <div className="text-white text-xl mt-1 manrope">
                    Year's Founder
                  </div>
                </div>

                {/* Box 2 */}
                <div className="w-[240px] p-8 intro-box h-[175px] border border-gray-300  ">
                  <div className="text-white text-5xl manrope">20+</div>
                  <div className="text-white text-xl mt-1 manrope">
                    Professionals
                  </div>
                </div>

                {/* Box 3 */}
                <div className="w-[240px] p-8 intro-box h-[175px] border border-gray-300  ">
                  <div className="text-white text-5xl manrope">500+</div>
                  <div className="text-white text-xl mt-1 manrope">
                    Videos Collab
                  </div>
                </div>

                {/* Box 4 */}
                <div className="w-[240px] p-6 intro-box h-[175px] border border-gray-300  ">
                  <div className="text-white text-5xl manrope">50+</div>
                  <div className="text-white text-xl mt-1 manrope">
                    Brand Connections
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1">
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
          className="home-item lg:h-[1500px] lg:w-1500  md:w-765 "
        >
          <div className="flex mt-20   text-5xl manrope text-white  justify-end mr-12">
            Services
          </div>
          <div className="flex justify-center gap-8 p-8 mt-6  ">
            {/* GIF Box 1 */}
            <div className="w-[450px]  h-[250px] overflow-hidden rounded-lg  ">
              <img
                src={mono}
                alt="Gif 1"
                className="object-cover gif-box w-full h-full"
              />
            </div>

            {/* GIF Box 2 */}
            <div className="w-[450px]  h-[250px] overflow-hidden rounded-lg ">
              <img
                src={afc}
                alt="Gif 2"
                className="object-cover gif-box w-full h-full"
              />
            </div>

            {/* GIF Box 3 */}
            <div className="w-[450px]  h-[250px] overflow-hidden rounded-lg ">
              <img
                src={tuborg2}
                alt="Gif 3"
                className="object-cover gif-box w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-center gap-8 p-8 mt-6  ">
            {/* Details Box 1 */}
            <div className="w-[450px]  h-[400px]  overflow-hidden  details-box text-white p-3 ">
              <div className="text-2xl">01</div>
              <div className="text-3xl mt-2 mb-3">CGI</div>
              <div className="text-xl">
                Computer Generated Imagery (CGI) services. creating top-tier 3D
                visualizations, animations, and visual effects (VFX) for various
                media such as images, films, and interactive applications.  We
                work for clients worldwide – corporations, mid-size enterprises,
                agencies and film productions
              </div>
            </div>

            {/* Details Box 2 */}
            <div className="w-[450px]  h-[400px]  overflow-hidden  details-box text-white p-3 ">
              <div className="text-2xl">02</div>
              <div className="text-3xl mt-2 mb-3">Color - Grading</div>
              <div className="text-xl">
                Elevate your visuals with our expert colour grading solutions.
                We enhance the mood, consistency, and overall aesthetic of your
                content, ensuring it stands out and captivates your audience.
              </div>
            </div>

            {/* Details Box 3 */}
            <div className="w-[450px]  h-[400px]  overflow-hidden  details-box text-white p-3 ">
              <div className="text-2xl">03</div>
              <div className="text-3xl mt-2 mb-3">Graphics</div>
              <div className="text-xl">
                Regardless of whether it’s 2D or 3D, our services excel in
                providing cutting-edge graphics and motion graphics to enhance
                the visual appeal of your content. Our expertise spans
                everything from typefaces and compositing shots to creating
                captivating animated sequences.
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8 p-8   ">
            {/* Details Box 1 */}
            <div className="w-[450px]  h-[400px]  overflow-hidden  details-box text-white p-3 ">
              <div className="text-2xl">04</div>
              <div className="text-3xl mt-2 mb-3">Post Production</div>
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
            <div className="w-[450px]  h-[400px]  overflow-hidden  details-box text-white p-3 ">
              <div className="text-2xl">05</div>
              <div className="text-3xl mt-2 mb-3">VFX</div>
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
          className="home-item  lg:w-1500  md:w-765 lg:h-[1500px] "
        >
          <div className="flex mt-20   text-5xl manrope text-white  justify-start ml-12">
            Software Proficiency
          </div>
          <div className="flex  text-xl manrope text-white  justify-start ml-12">
            At Moonlight Studio, we prfioritize technical skill and a methodical
            approach to post-production, ensuring that every project we
            undertake is executed with attention to detail and technical
            prowess.
          </div>
          {/*HOUDINI*/}
          <div className="flex home-software    justify-center mt-20  h-[350px]">
            <div className="flex w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-wrap justify-center items-center  ">
                <div className="w-[500px] h-[280px] bg-black flex justify-center items-center">
                  <img
                    src={Houdini}
                    className="object-contain h-[260px] w-[450px]"
                  ></img>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1  text-white p-6 manrope">
                <div className="text-3xl font-bold mb-5">Houdini</div>
                <div className="text-2xl">
                  Utilized for complex simulations, Houdini allows us to
                  accurately replicate physical phenomena such as fluids, smoke,
                  and fire, providing a high level of realism in our visual
                  effects.
                </div>
              </div>
            </div>
          </div>
          {/*CINEMA4D*/}
          <div className="flex home-software    justify-center  h-[350px]">
            <div className="flex w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-wrap justify-center items-center  ">
                <div className="w-[500px] h-[280px] bg-white flex justify-center items-center">
                  <img
                    src={Cinema4D}
                    className="object-contain h-[260px] w-[450px]"
                  ></img>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1  text-white p-6 manrope">
                <div className="text-3xl font-bold mb-5">Cinema 4D</div>
                <div className="text-2xl">
                  Chosen for its robust modeling capabilities and efficient
                  workflow, Cinema 4D aids us in creating detailed 3D models and
                  engaging animations.
                </div>
              </div>
            </div>
          </div>
          {/*UNREAL*/}
          <div className="flex home-software    justify-center  h-[350px]">
            <div className="flex w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-wrap justify-center items-center  ">
                <div className="w-[500px] h-[280px] bg-black flex justify-center items-center">
                  <img
                    src={Unreal}
                    className="object-contain h-[200px] w-[450px]"
                  ></img>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1  text-white p-6 manrope">
                <div className="text-3xl font-bold mb-5">Unreal Engine</div>
                <div className="text-2xl">
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
          className="home-item bg-red-300 lg:w-1500  md:w-765  "
        >
          <div className="flex justify-center mt-20 mb-20 h-500 ">
            <div className="text-white">52348972398457</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center  items-center space-x-12 lg:space-x-32 h-12 md:space-x-24 home-footer">
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
    </div>
  );
};

export default Homepage;
