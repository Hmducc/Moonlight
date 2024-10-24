import fb from "../assets/facebook.svg";
import ig from "../assets/instagram.svg";
import phone from "../assets/telephone.svg";
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

        <div className=" home-item mt-16  lg:w-1500 md:w-765 items-center  h-screen flex flex-col">
          <div className="container diamond-container flex-grow relative ">
            <div className="top-section">
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
        <div
          id="test123"
          className="home-item bg-blue-300 lg:w-1500  md:w-765  "
        >
          <div className="flex justify-center mt-20 mb-20 h-500 bg-green-300">
            <div className="text-white bg-red-300">52348972398457</div>
          </div>
        </div>
        <div id="test" className="home-item bg-blue-300 lg:w-1500  md:w-765  ">
          <div className="flex justify-center mt-20 mb-20 h-500 bg-green-300">
            <div className="text-white bg-red-300">52348972398457</div>
          </div>
        </div>
        <div id="test" className="home-item bg-blue-300 lg:w-1500  md:w-765  ">
          <div className="flex justify-center mt-20 mb-20 h-500 bg-green-300">
            <div className="text-white bg-red-300">52348972398457</div>
          </div>
        </div>
        <div id="test" className="home-item bg-blue-300 lg:w-1500  md:w-765  ">
          <div className="flex justify-center mt-20 mb-20 h-500 bg-green-300">
            <div className="text-white bg-red-300">52348972398457</div>
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
