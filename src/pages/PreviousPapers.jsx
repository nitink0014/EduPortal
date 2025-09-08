const PreviousPapers = () => {
  const papers = [
    {
      class: 10,
      subject: "Math",
      year: 2022,
      url: "/pyq/class10/math2022.pdf",
    },
    {
      class: 10,
      subject: "Science",
      year: 2021,
      url: "/pyq/class10/science2021.pdf",
    },
    {
      class: 12,
      subject: "Physics",
      year: 2022,
      url: "/pyq/class12/physics2022.pdf",
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">
        📂 Previous Year Question Papers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {papers.map((p, index) => (
          <a
            key={index}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold">
              Class {p.class} - {p.subject}
            </h3>
            <p className="text-gray-600">Year: {p.year}</p>
            <p className="mt-2 text-blue-500 underline">Download PDF</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PreviousPapers;
