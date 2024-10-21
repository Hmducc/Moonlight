import fb from "../assets/facebook.svg";
import ig from "../assets/instagram.svg";
import logo from "../assets/moon.png";
import phone from "../assets/telephone.svg";
import vimeo from "../assets/vimeo.svg";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="home-bg overlay bg-scroll">
      <div className="flex justify-center">
        <div className=" home-item lg:w-1280  h-screen flex flex-col">
          <div className="h-16 flex-shrink-0 home-nav md:h-20 ">
            <div className="h-16  flex justify-center w-24 object-contain lg:h-24 lg:w-40 ">
              <img src={logo} alt="logo" className=".col-md-8" />
            </div>
          </div>
          <div className=" manrope md:text-6xl  sm:text-4xl  text-white text-2xl font-medium flex justify-center items-center flex-grow">
            COMING SOON!
          </div>
          <div className="flex justify-center  items-center space-x-12 lg:space-x-32 h-12 home-footer">
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
      </div>
    </div>
  );
};

export default Homepage;
