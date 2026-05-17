"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Orb 1 - top left */}
      <div
        className="orb orb-purple"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          left: "-150px",
          animationDelay: "0s",
          animationDuration: "10s",
        }}
      />

      {/* Orb 2 - center right */}
      <div
        className="orb orb-cyan"
        style={{
          width: "500px",
          height: "500px",
          top: "30%",
          right: "-100px",
          animationDelay: "3s",
          animationDuration: "12s",
        }}
      />

      {/* Orb 3 - bottom center */}
      <div
        className="orb orb-orange"
        style={{
          width: "400px",
          height: "400px",
          bottom: "10%",
          left: "40%",
          animationDelay: "6s",
          animationDuration: "9s",
          opacity: 0.08,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/50 to-[#050510]" />
    </div>
  );
}
