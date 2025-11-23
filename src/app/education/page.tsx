

export default function EducationPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/mc.jpg')" }}>
      

      <div className="min-h-screen bg-black/50 flex flex-col justify-center items-center px-6 py-20">
        <h1 className="text-5xl font-bold mb-10">Education</h1>

        <div className="space-y-6 max-w-2xl w-full">
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur border border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold">Naga College Foundation</h2>
            <p className="text-lg opacity-90">Bachelor of Science in Information Technology</p>
            <p className="opacity-80 text-sm mt-1">2023 - Present</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10 backdrop-blur border border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold">Senior High School</h2>
            <p className="text-lg opacity-90">ICT Strand</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10 backdrop-blur border border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold">Junior High School</h2>
            <p className="text-lg opacity-90">General Education</p>
          </div>
        </div>
      </div>
    </div>
  );
}
