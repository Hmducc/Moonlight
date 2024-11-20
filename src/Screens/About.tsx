export default function About() {
  return (
    <div
      id="About"
      className="   lg:w-full  md:w-[765px] h-[1350px] md:h-[750px]   lg:h-[670px]"
    >
      <div className="flex   justify-center mt-20 mb-20 lg:h-[500px] h-[1300px]  md:h-[630px]">
        {/* Container with Two Equal Columns */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Column */}
          <div className="flex-1 flex-row  lg:w-[100px] flex flex-wrap justify-center items-center md:gap-7 lg:gap-4 p-2 lg:p-4">
            <div className="">
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
              <div className="lg:w-[280px] w-[320px] h-[131px] p-2 lg:p-8  intro-box lg:h-[175px] border mt-5 border-gray-300">
                <div className="text-white text-5xl manrope ml-6 lg:ml-0">
                  20+
                </div>
                <div className="text-white text-xl mt-1 manrope ml-6 lg:ml-0">
                  Professionals
                </div>
              </div>
            </div>
            <div className="">
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
              <div className="lg:w-[280px] w-[320px] h-[131px] p-2 mt-5 lg:p-8 intro-box lg:h-[175px] border border-gray-300">
                <div className="text-white text-5xl manrope ml-6 lg:ml-0">
                  50+
                </div>
                <div className="text-white text-xl mt-1 manrope ml-6 lg:ml-0">
                  Brand Connections
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex justify-center md:items-center lg:items-start mt-5 p-3">
            <div className="flex p-4 ">
              <div>
                <div className="text-left text-[50px] text-white manrope">
                  Moonlight Studio
                </div>
                <div className="text-white text-xl mt-5 manrope">
                  Moonlight Studio, founded 2018, is a post production studio
                  HCMC based, focused on quality storytelling, striking visuals,
                  and innovative design.{" "}
                </div>
                <div className="text-white text-xl mt-5 manrope">
                  We’re known for our dedicated work in TV commercials and
                  digital film VFX, and we consider ourselves a team of
                  imaginative individuals who strive to make the intangible a
                  reality.{" "}
                </div>
                <div className="text-white text-xl mt-5 manrope">
                  Our proficiency in Computer-Generated Imagery (CGI) goes
                  beyond just completing tasks; we aim to continually improve
                  and refine our craft.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
