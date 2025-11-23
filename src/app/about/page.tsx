export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white px-6 py-16 font-sans">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 drop-shadow-lg">
        About Me
      </h1>

      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-[0_0_25px_rgba(255,255,255,0.2)]">
        {/* Intro Section */}
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Hello! I'm <span className="font-bold text-red-400">Cy Wency Cano</span>,
          a passionate BSIT student at Naga College Foundation, Inc. I love learning
          new technologies, exploring creative ideas, and continuously improving my
          skills in development and design.
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-black/40 p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">Personal Details</h2>
            <ul className="space-y-2 text-gray-200">
              <li>• Name: Cy Wency E. Cano</li>
              <li>• Age: 20 </li>
              <li>• Course: Bachelor of Science in Information Technology</li>
              <li>• School: Naga College Foundation, Inc.</li>
               <li>• Crush: cha </li>
            </ul>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">Interests & Skills</h2>
            <ul className="space-y-2 text-gray-200">
              <li>• Driving cars</li>
              <li>• UI/UX Design</li>
              <li>• Photography</li>
              <li>• Gaming & Tech Exploration</li>
            </ul>
          </div>
        </div>

        {/* Closing */}
        <p className="text-center text-lg md:text-xl mt-12 text-gray-300">
          I’m excited to grow, build, and explore more in the world of cars & technology.
        </p>
      </div>
    </div>
  );
}
