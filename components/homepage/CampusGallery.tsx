export default function CampusGallery() {

  const images = [
    "/gallery/campus1.jpg",
    "/gallery/campus2.jpg",
    "/gallery/campus3.jpg",
    "/gallery/campus4.jpg",
    "/gallery/campus5.jpg",
    "/gallery/campus6.jpg",
  ];

  return (

    <section className="campusSection">

      {/* HEADING */}

      <div className="campusHeading">

        <h2 className="campusTitle">
          Creating a World-Class <span>Academic Ecosystem</span>
        </h2>

        <p className="campusDesc">
          Experience innovation, collaboration,
          vibrant student culture and immersive
          academic excellence at PPSU Online.
        </p>

      </div>

      {/* MARQUEE */}

      <div className="campusMarquee">

        <div className="campusTrack">

          {[...images, ...images].map((img, index) => (

            <div
              className="campusCard"
              key={index}
            >

              <img
                src={img}
                alt="Campus"
                className="campusImage"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}