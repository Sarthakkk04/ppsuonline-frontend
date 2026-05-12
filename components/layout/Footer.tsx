import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">

      {/* MAIN GRID */}
      <div className="footer-container">

        {/* LEFT INFO */}
        <div className="footer-col footer-brand">
          <img
            src="/logos/ppsu-logo.png"
            alt="PPSU"
            className="footer-logo"
          />

          <div className="footer-contact">

            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <p>
                NH48, GETCO, Near Biltech,
                Dhamdod Village, Mangrol,
                Kosamba, Surat 394125
              </p>
            </div>

            <div className="footer-contact-item">
              <FaPhoneAlt />
              <p>7778879189</p>
            </div>

            <div className="footer-contact-item">
              <FaEnvelope />
              <p>admission@ppsu.ac.in</p>
            </div>

          </div>
        </div>

        {/* PPSU ONLINE */}
        <div className="footer-col">
          <h3>PPSU ONLINE</h3>

          <ul>
            <li>Programs</li>
            <li>Admissions</li>
            <li>Learning Experience</li>
            <li>Student Support</li>
            <li>Careers & Outcomes</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
            <li>About Online</li>
            <li>Apply Now</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h3>Connect With Us</h3>

          <div className="footer-socials">
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
            <span><FaLinkedinIn /></span>
            <span><FaYoutube /></span>
            <span><FaWhatsapp /></span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 All Rights Reserved. P P Savani University, Surat
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Refund Policy</span>
        </div>
      </div>

    </footer>
  );
}