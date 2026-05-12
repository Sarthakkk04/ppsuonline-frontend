export default function ExplorePrograms() {
  const programs = [
    { title: "ONLINE BBA", img: "/programs/bba.png" },
    { title: "ONLINE MBA", img: "/programs/mba.png" },
    { title: "ONLINE BCA", img: "/programs/bca.png" },
  ];

  return (
    <section className="program-section">

      {/* HEADING */}
      <h2 className="program-title">
        Explore Our Most <span>Popular Programs</span>
      </h2>

      {/* CARDS */}
      <div className="program-card-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card-new" style={{ position: "relative" }}>

            {/* IMAGE */}
            <img src={program.img} alt={program.title} />

            {/* OVERLAY */}
            <div className="program-overlay"></div>

            {/* CONTENT */}
            <div className="program-content-new">
              <h3>{program.title}</h3>

              <div className="program-buttons">
                <button className="btn-primary">Enquire Now</button>
                <button className="btn-secondary">Download Brochure</button>
                <button className="btn-light">Know More</button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}