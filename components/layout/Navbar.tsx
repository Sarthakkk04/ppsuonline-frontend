"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔶 TOP BAR */}
      <div
        style={{
          background: "#F15A29",
          color: "#fff",
          fontSize: "14px",
          padding: "10px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "18px" }}>
          <a href="/ppsuNewsletter.pdf" target="_blank">
            PPSU Newsletter
          </a>
          <span>|</span>
          <a href="/SchoolEligibilityCri.pdf" target="_blank">
            Eligibility Criteria
          </a>
        </div>

        <div>
          Admission Helpline - 7778879189 
        </div>
      </div>

      {/* 🔷 MAIN NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: scrolled ? "#FFF7F0" : "transparent",
          transition: "all 0.3s ease",
          backdropFilter: scrolled ? "blur(6px)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 48px",
          }}
        >
          {/* LOGO */}
          <img
            src="/logos/ppsu-logo.png"
            alt="PPSU"
            style={{ height: "48px" }}
          />

        {/* NAV + CTA WRAPPER */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

        {/* DESKTOP NAV */}
        <nav
            className="desktop-nav"
            style={{
            display: "flex",
            gap: "28px",
        }}
        >
            <a className="nav-link" href="/">Home</a>
            <span className="nav-link">About ▾</span>
            <span className="nav-link">Programs ▾</span>
            <a className="nav-link" href="/admissions">Admissions</a>
            <a className="nav-link" href="/contact">Contact</a>
        </nav>

        {/* DESKTOP APPLY BUTTON */}
        <button className="apply-btn">
            Apply Now
        </button>

        {/* HAMBURGER ICON */}
        <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        style={{
            display: "none",
            flexDirection: "column",
            gap: "4px",
            cursor: "pointer",
        }}
        >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </div>

        </div>
        </div>
      </header>

{menuOpen && (
  <div
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "75%",
      height: "100vh",
      background: "#FFF7F0",
      zIndex: 9999,
      padding: "30px 24px",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      boxShadow: "-10px 0 25px rgba(0,0,0,0.1)",
      animation: "slideIn 0.3s ease",
    }}
  >
    {/* CLOSE BUTTON */}
    <div
      onClick={() => setMenuOpen(false)}
      style={{
        fontSize: "22px",
        marginBottom: "30px",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      ✕
    </div>

    {/* MENU ITEMS */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        fontSize: "16px",
        fontWeight: "500",
        color: "#0D1B2A",
      }}
    >
      <a href="/">Home</a>
      <span>About</span>
      <span>Programs</span>
      <a href="/admissions">Admissions</a>
      <a href="/contact">Contact</a>

      {/* CTA */}
      <button
        style={{
          marginTop: "20px",
          background: "#B71C1C",
          color: "#fff",
          padding: "12px",
          borderRadius: "999px",
          border: "none",
          fontWeight: "600",
        }}
      >
        Apply Now
      </button>
    </div>
  </div>
)}

    </>
  );
}