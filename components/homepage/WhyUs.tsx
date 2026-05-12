import {
  GraduationCap,
  Laptop,
  BadgeCheck,
  Users,
  Wallet,
  Headphones,
} from "lucide-react";

export default function WhyChoose() {
const features = [
  {
    icon: <Laptop size={30} />,
    title: "Flexible Learning",
    desc: "Live + recorded sessions with anytime access",
  },
  {
    icon: <Wallet size={30} />,
    title: "Affordable Fees",
    desc: "Flexible payment and financing options",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Industry Relevant",
    desc: "Career-oriented modern curriculum",
  },
  {
    icon: <GraduationCap size={30} />,
    title: "Expert Faculty",
    desc: "Academic excellence with expert mentors",
  },
  {
    icon: <Users size={30} />,
    title: "UGC Entitled",
    desc: "NAAC A+ accredited university credibility",
  },
  {
    icon: <Headphones size={30} />,
    title: "Student Support",
    desc: "Dedicated academic assistance system",
  },
];

  return (
    <section className="why-section">

      {/* HEADING */}
<div className="why-heading-wrapper">

  <div className="why-heading-glow" />

  <h2 className="why-title">
    Why Choose <span>PPSU Online?</span>
  </h2>

  <p className="why-desc">
    PPSU Online combines the academic depth
    of a university with the flexibility of modern
    digital learning — enabling you to learn anytime,
    anywhere at your own pace.
  </p>

</div>

      {/* FEATURES GRID */}
      <div className="why-grid">
        {features.map((item, index) => (
        <div
            key={index}
            className={`why-card-new`}
            >
            <div className="why-icon-new">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            </div>
        ))}
      </div>

      {/* CTA */}
      <button className="why-btn">
        Know More About PPSU Online
      </button>

    </section>
  );}