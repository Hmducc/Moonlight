import afc from "../assets/GIF/afc.gif";
import haohao from "../assets/GIF/Haohao-color.gif";
import ht2 from "../assets/GIF/ht2.gif";
import mono from "../assets/GIF/mono.gif";
import tuborg2 from "../assets/GIF/tuborg2.gif";
export default function Services() {
  return (
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
                Computer Generated Imagery (CGI) services. creating top-tier 3D
                visualizations, animations, and visual effects (VFX) for various
                media such as images, films, and interactive applications.  We
                work for clients worldwide – corporations, mid-size enterprises,
                agencies and film productions
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
              Elevate your visuals with our expert colour grading solutions. We
              enhance the mood, consistency, and overall aesthetic of your
              content, ensuring it stands out and captivates your audience.
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
              providing cutting-edge graphics and motion graphics to enhance the
              visual appeal of your content. Our expertise spans everything from
              typefaces and compositing shots to creating captivating animated
              sequences.
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
          <div className="lg:text-3xl text-2xl mt-2 mb-3">Post Production</div>
          <div className="text-xl">
            <ul className="list-disc ml-5">
              <p>Tracking and Matchmoving:</p>
              <li className="ml-8">
                Track camera movement and 3D geometry within the live-action
                plates.
              </li>
              <li className="ml-8">
                Match virtual elements (CGI) to the real-world camera motion.
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
        <div className="lg:w-[450px] w-[350px] h-[468px]    lg:h-[400px] lg:mt-0 mt-12  overflow-hidden  details-box text-white p-3  ">
          <div className="lg:text-2xl text-xl">05</div>
          <div className="lg:text-3xl text-2xl mt-2 mb-3">VFX</div>
          <div className="text-xl">
            <ul className="list-disc ml-5">
              <p>Compositing and Layering:</p>
              <li className="ml-8">
                Combine various elements (CGI, live-action, matte paintings).
              </li>
              <li className="ml-8">
                Adjust lighting, color, and depth to achieve seamless
                integration.
              </li>
              <p>Visual Effects Creation:</p>
              <li className="ml-8">
                Generate particle effects, explosions or other visual
                enhancements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
