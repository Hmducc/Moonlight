import { Link } from "react-scroll";
import fb from "../assets/facebook.svg";
import ig from "../assets/instagram.svg";
import logo from "../assets/moon.png";
import phone from "../assets/telephone.svg";
import vimeo from "../assets/vimeo.svg";
import Brands from "./Brands";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="home-bg overlay bg-scroll">
      <div className="flex flex-col items-center justify-center">
        <div className=" home-item lg:w-1280 md:w-765  h-screen flex flex-col">
          <div className="h-16 bg-blue-300 flex-shrink-0 flex flex-row home-nav md:h-20 ">
            <div className="h-16  flex justify-center w-24 object-contain md:h-20 md:w-28 items-center bg-red-300 lg:h-24 lg:w-40 ">
              <img src={logo} alt="logo" className=".col-md-8" />
            </div>
            <button>
              <Link
                to="test123"
                smooth="true"
                duration={700}
                className="text-white"
              >
                123
              </Link>
            </button>
          </div>
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
          className="home-item bg-blue-300 lg:w-1280 md:w-765 mt-10 h-screen"
        >
          <div className="flex justify-center">
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
