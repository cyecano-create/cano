

export default function ContactPage() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/mc.jpg')" }}
    >
      

      <div className="min-h-screen bg-black/50 flex flex-col justify-center items-center px-6 py-20">
        <h1 className="text-5xl font-bold mb-10">Contact Me</h1>

        <div className="bg-white/10 backdrop-blur p-8 border border-white/30 rounded-xl shadow-lg w-full max-w-lg space-y-6 text-center">
          <p className="text-xl font-semibold"> Phone Number</p>
          <p className="text-lg opacity-90"> 09938372312</p>

          <p className="text-xl font-semibold mt-6"> Email</p>
          <p className="text-lg opacity-90">09cy24wency@email.com</p>
        </div>
      </div>
    </div>
  );
}
