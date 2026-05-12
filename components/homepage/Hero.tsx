export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "90vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
        
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/drone-view.webm" type="video/webm" />
      </video>

      {/* 🔳 LIGHT OVERLAY (optional subtle) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.15)",
          zIndex: 2,
        }}
      />

    </section>
  );
}