

export default function HobbiesPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/mc.jpg')" }}>


      <div className="min-h-screen bg-black/50 flex flex-col justify-center items-center px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">My Hobbies</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          {[
            { title: "Gaming", desc: "I enjoy competitive and casual games." },
            { title: "Driving", desc: "I enjoy Driving to different places and its also serve as my therapy." },
            { title: "Music", desc: "Music helps me relax and focus." },
          ].map((hobby) => (
            <div key={hobby.title}
              className="p-6 bg-white/10 backdrop-blur rounded-xl 
              border border-white/30 shadow-lg hover:bg-white/20 transition">
              <h3 className="text-2xl font-bold mb-2">{hobby.title}</h3>
              <p className="opacity-90">{hobby.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
