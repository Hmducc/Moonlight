export default function App() {
  return (
    <div className="flex justify-center mt-20 mb-20 h-[500px] bg-blue-300">
      {/* Container with Two Equal Columns */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Column */}
        <div className="flex-1 flex flex-wrap justify-center items-center gap-4 p-4">
          {/* Box 1 */}
          <div className="w-[240px] p-8 intro-box h-[175px] border border-gray-300">
            <div className="text-white text-5xl manrope">2018</div>
            <div className="text-white text-xl mt-1 manrope">
              Year's Founder
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-[240px] p-8 intro-box h-[175px] border border-gray-300">
            <div className="text-white text-5xl manrope">20+</div>
            <div className="text-white text-xl mt-1 manrope">Professionals</div>
          </div>

          {/* Box 3 */}
          <div className="w-[240px] p-8 intro-box h-[175px] border border-gray-300">
            <div className="text-white text-5xl manrope">500+</div>
            <div className="text-white text-xl mt-1 manrope">Videos Collab</div>
          </div>

          {/* Box 4 */}
          <div className="w-[240px] p-6 intro-box h-[175px] border border-gray-300">
            <div className="text-white text-5xl manrope">50+</div>
            <div className="text-white text-xl mt-1 manrope">
              Brand Connections
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 p-4">
          <div>
            <div className="text-left text-[50px] text-white manrope">
              Moonlight Studio
            </div>
            <div className="text-white text-xl mt-5 manrope">
              Moonlight Studio, founded 2018, is a post production studio
              focused on quality storytelling, striking visuals, and innovative
              design.
            </div>
            <div className="text-white text-xl mt-5 manrope">
              Moonlight Studio, founded 2018, is a post production studio
              focused on quality storytelling, striking visuals, and innovative
              design.
            </div>
            <div className="text-white text-xl mt-5 manrope">
              Moonlight Studio, founded 2018, is a post production studio
              focused on quality storytelling, striking visuals, and innovative
              design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
