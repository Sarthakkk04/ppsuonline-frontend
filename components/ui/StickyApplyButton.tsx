"use client";

export default function StickyApplyButton() {
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
      }}
    >
      <button
        style={{
          background: "linear-gradient(180deg, #B71C1C, #D32F2F)",
          color: "#fff",
          padding: "16px 12px",
          border: "none",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontWeight: "600",
          letterSpacing: "1.5px",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(180deg, #D32F2F, #B71C1C)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(180deg, #B71C1C, #D32F2F)")
        }
      >
        APPLY NOW
      </button>
    </div>
  );
}