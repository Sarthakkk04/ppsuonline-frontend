"use client";

import Image from "next/image";

export default function Accreditations() {
const logos = [
  { img: "/accreditations/ugc.jpg", name: "University Grants Commission" },
  { img: "/accreditations/aicte.jpg", name: "All India Council for Technical Education" },
  { img: "/accreditations/gscpt.jpg", name: "Gujarat State Council for Physiotherapy" },
  { img: "/accreditations/logo4.png", name: "NAAC A+ Accreditation" },
  { img: "/accreditations/logo5.jpg", name: "Council for Architecture" },
  { img: "/accreditations/logo6.jpg", name: "Indian Nursing Council" },
  { img: "/accreditations/logo7.jpg", name: "Gujarat Nursing Council" },
  { img: "/accreditations/logo8.jpg", name: "Pharmacy Council of India" },
  { img: "/accreditations/logo9.png", name: "National Commission for Homoeopathy" },
];

  return (
    <section className="accreditation-section">

      {/* HEADING */}
      <h2 className="accreditation-title">
        Accreditations and Affiliations from <span>Governing Bodies</span>
      </h2>

      {/* SCROLLER */}
      <div className="accreditation-slider">
        <div className="accreditation-track">

        {[...logos, ...logos].map((item, index) => (
        <div className="accreditation-item" key={index}>
            
            <div className="logo-box">
            <Image src={item.img} alt={item.name} width={100} height={100} />
            </div>

            <p className="logo-label">{item.name}</p>

        </div>
        ))}

        </div>
      </div>

    </section>
  );
}