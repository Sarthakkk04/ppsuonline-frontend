const fees = [
  {
    program: "BBA (Online)",
    duration: "3 Years",
    semester: "₹20,000",
    total: "₹90,000",
  },
  {
    program: "BCA",
    duration: "3 Years",
    semester: "₹25,000",
    total: "₹1,00,000",
  },
  {
    program: "MBA / MBA (Specializations)",
    duration: "2 Years",
    semester: "₹32,500",
    total: "₹1,20,000",
  },
  {
    program: "M.Sc. Data Science",
    duration: "2 Years",
    semester: "₹32,500",
    total: "₹1,20,000",
  },
];

export default function FeeTable() {
  return (
    <section className="feeTableSection">

      <div className="sectionTag">
        Fee Structure
      </div>

      <h2 className="sectionTitle">
        Transparent Program Fees
      </h2>

      <div className="feeTableWrapper">

        <table className="feeTable">

          <thead>
            <tr>
              <th>Program</th>
              <th>Duration</th>
              <th>Fee / Semester</th>
              <th>Total Fee</th>
            </tr>
          </thead>

          <tbody>

            {fees.map((item, index) => (
              <tr key={index}>

                <td>{item.program}</td>

                <td>{item.duration}</td>

                <td>{item.semester}</td>

                <td>{item.total}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}