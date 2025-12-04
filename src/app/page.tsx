import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Background Image (changeable) */}
      <Image
        src="/mc.jpg" // ← change background image here
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        quality={80}
        priority
      />

      {/* Navigation Menu */}
      <nav
        style={{
          position: "fixed",
          top: 20,
          right: 30,
          display: "flex",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        {["About", "Education", "Hobbies", "Contact"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
              padding: "10px 18px",
              borderRadius: "12px",
              border: "2px solid rgba(255,255,255,0.7)",
              backdropFilter: "blur(5px)",
              transition: "all 0.3s ease",
            }}
          >
            {item}
          </a>
        ))}

        {/* Login Button */}
        <a
          href="/login"
          style={{
            color: "#3c00ffff",
            textDecoration: "none",
            fontWeight: "700",
            padding: "10px 18px",
            borderRadius: "12px",
            border: "2px solid #3c00ffff",
            backdropFilter: "blur(5px)",
            transition: "all 0.3s ease",
          }}
        >
          Login
        </a>
      </nav>

      {/* Profile Box */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "50px",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2.5rem",
          backgroundColor: "rgba(0, 0, 0, 0.45)",
          padding: "2rem",
          borderRadius: "20px",
        }}
      >
        {/* Profile Picture */}
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "260px",
            height: "260px",
            boxShadow: "0 0 20px rgba(224, 7, 7, 0.4)",
            flexShrink: 0,
          }}
        >
          <Image src="/pfp-vs.jpg" alt="Your Name" width={260} height={260} />
        </div>

        {/* Text Section */}
        <div style={{ maxWidth: "500px", textAlign: "left" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Mr. Cy Wency Cano
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              marginBottom: "1.5rem",
            }}
          >
            Hi! I’m Cy Wency Cano, a BSIT student from Naga College Foundation,
            Inc. Welcome to my personal page!
          </p>

          <div style={{ display: "flex", gap: "1.5rem", fontSize: "1.1rem" }}>
            <a
              href="https://www.facebook.com/cywency.e.cano"
              target="_blank"
              style={{
                color: "#1877F2",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "2px solid #1877F2",
                backdropFilter: "blur(3px)",
              }}
            >
              Facebook
            </a>

            <a
              href="mailto:09cy24wency@gmail.com"
              style={{
                color: "#FF4C4C",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "2px solid #FF4C4C",
                backdropFilter: "blur(3px)",
              }}
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Gallery (9 images) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gap: "0.8rem",
          padding: "1rem",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(4px)",
        }}
      >
        {[
          "/9.jpg",
          "/1 (2).jpg",
          "/r2.jpg",
          "/3 (2).jpg",
          "/r.jpg",
          "/5 (2).jpg",
          "/6.jpg",
          "/7.jpg",
          "/8 (2).jpg",
        ].map((src, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "100px",
              borderRadius: "10px",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.6)",
            }}
          >
            <Image
              src={src}
              alt={`Gallery ${index}`}
              width={150}
              height={100}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
