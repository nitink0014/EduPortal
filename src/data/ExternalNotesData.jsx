const externalNotesData = [
  {
    class: "Class 10",
    subjects: [
      {
        subject: "Physics",
        chapters: [
          {
            chapter: "Light – Reflection and Refraction",
            fileUrl: "https://example.com/physics-light",
          },
          {
            chapter: "Electricity",
            fileUrl: "https://example.com/physics-electricity",
          },
          {
            chapter: "Magnetic Effects of Electric Current",
            fileUrl: "https://example.com/physics-magnetic",
          },
          {
            chapter: "Sources of Energy",
            fileUrl: "https://example.com/physics-energy",
          },
        ],
      },
      {
        subject: "Chemistry",
        chapters: [
          {
            chapter: "Chemical Reactions and Equations",
            fileUrl: "https://example.com/chemistry-reactions",
          },
          {
            chapter: "Acids, Bases and Salts",
            fileUrl: "https://example.com/chemistry-acids-bases",
          },
          {
            chapter: "Metals and Non-metals",
            fileUrl: "https://example.com/chemistry-metals-nonmetals",
          },
          {
            chapter: "Carbon and its Compounds",
            fileUrl: "https://example.com/chemistry-carbon",
          },
          {
            chapter: "Periodic Classification of Elements",
            fileUrl: "https://example.com/chemistry-periodic",
          },
        ],
      },
      {
        subject: "Mathematics",
        chapters: [
          {
            chapter: "Real Numbers",
            fileUrl: "https://example.com/math-real-numbers",
          },
          {
            chapter: "Polynomials",
            fileUrl: "https://example.com/math-polynomials",
          },
          {
            chapter: "Pair of Linear Equations in Two Variables",
            fileUrl: "https://example.com/math-linear-equations",
          },
          {
            chapter: "Quadratic Equations",
            fileUrl: "https://example.com/math-quadratic-equations",
          },
          {
            chapter: "Arithmetic Progressions",
            fileUrl: "https://example.com/math-ap",
          },
          {
            chapter: "Triangles",
            fileUrl: "https://example.com/math-triangles",
          },
          {
            chapter: "Coordinate Geometry",
            fileUrl: "https://example.com/math-coordinate",
          },
          {
            chapter: "Introduction to Trigonometry",
            fileUrl: "https://example.com/math-trigonometry",
          },
          {
            chapter: "Some Applications of Trigonometry",
            fileUrl: "https://example.com/math-trigonometry-apps",
          },
          { chapter: "Circles", fileUrl: "https://example.com/math-circles" },
          {
            chapter: "Constructions",
            fileUrl: "https://example.com/math-constructions",
          },
        ],
      },
      {
        subject: "Biology",
        chapters: [
          {
            chapter: "Life Processes",
            fileUrl: "https://example.com/biology-life-processes",
          },
          {
            chapter: "Control and Coordination",
            fileUrl: "https://example.com/biology-control-coordination",
          },
          {
            chapter: "How do Organisms Reproduce?",
            fileUrl: "https://example.com/biology-reproduction",
          },
          {
            chapter: "Heredity and Evolution",
            fileUrl: "https://example.com/biology-heredity-evolution",
          },
          {
            chapter: "Our Environment",
            fileUrl: "https://example.com/biology-environment",
          },
          {
            chapter: "Management of Natural Resources",
            fileUrl: "https://example.com/biology-resources",
          },
        ],
      },
      {
        subject: "History",
        chapters: [
          {
            chapter: "The Rise of Nationalism in Europe",
            fileUrl: "https://example.com/history-nationalism-europe",
          },
          {
            chapter: "Nationalism in India",
            fileUrl: "https://example.com/history-nationalism-india",
          },
          {
            chapter: "The Making of a Global World",
            fileUrl: "https://example.com/history-global-world",
          },
          {
            chapter: "The Age of Industrialisation",
            fileUrl: "https://example.com/history-industrialisation",
          },
        ],
      },
      {
        subject: "Geography",
        chapters: [
          {
            chapter: "Resources and Development",
            fileUrl: "https://example.com/geography-resources-development",
          },
          {
            chapter: "Forest and Wildlife Resources",
            fileUrl: "https://example.com/geography-forest-wildlife",
          },
          {
            chapter: "Water Resources",
            fileUrl: "https://example.com/geography-water",
          },
          {
            chapter: "Agriculture",
            fileUrl: "https://example.com/geography-agriculture",
          },
          {
            chapter: "Minerals and Energy Resources",
            fileUrl: "https://example.com/geography-minerals-energy",
          },
          {
            chapter: "Manufacturing Industries",
            fileUrl: "https://example.com/geography-industries",
          },
          {
            chapter: "Lifelines of National Economy",
            fileUrl: "https://example.com/geography-lifelines",
          },
        ],
      },
      {
        subject: "Economics",
        chapters: [
          {
            chapter: "Development",
            fileUrl: "https://example.com/economics-development",
          },
          {
            chapter: "Sectors of the Indian Economy",
            fileUrl: "https://example.com/economics-sectors",
          },
          {
            chapter: "Money and Credit",
            fileUrl: "https://example.com/economics-money-credit",
          },
        ],
      },
      {
        subject: "Hindi",
        chapters: [
          {
            chapter: "काव्य भाग 1 - जीवन की खोज",
            fileUrl: "https://example.com/hindi-kavya-jeevan-khoj",
          },
          {
            chapter: "काव्य भाग 2 - प्रकृति का सौंदर्य",
            fileUrl: "https://example.com/hindi-kavya-prakriti-saundarya",
          },
          {
            chapter: "गद्य भाग - संवाद और व्याख्यान",
            fileUrl: "https://example.com/hindi-gadya-samvad-vyakhyan",
          },
          {
            chapter: "रचनात्मक लेखन - निबंध और पत्र लेखन",
            fileUrl: "https://example.com/hindi-rchnatmak-lekhan",
          },
        ],
      },
      {
        subject: "English",
        chapters: [
          {
            chapter: "First Flight (Prose) - A Letter to God",
            fileUrl: "https://example.com/english-first-flight-letter-to-god",
          },
          {
            chapter: "First Flight (Prose) - Nelson Mandela",
            fileUrl: "https://example.com/english-first-flight-nelson-mandela",
          },
          {
            chapter: "First Flight (Poetry) - Dust of Snow",
            fileUrl: "https://example.com/english-first-flight-dust-of-snow",
          },
          {
            chapter: "First Flight (Poetry) - Fire and Ice",
            fileUrl: "https://example.com/english-first-flight-fire-and-ice",
          },
          {
            chapter: "Footprints Without Feet (Prose) - A Triumph of Surgery",
            fileUrl:
              "https://example.com/english-footprints-triumph-of-surgery",
          },
          {
            chapter: "Footprints Without Feet (Prose) - The Midnight Visitor",
            fileUrl: "https://example.com/english-footprints-midnight-visitor",
          },
          {
            chapter: "Footprints Without Feet (Poetry) - A Tiger in the Zoo",
            fileUrl: "https://example.com/english-footprints-tiger-in-zoo",
          },
          {
            chapter:
              "Footprints Without Feet (Poetry) - How to Tell Wild Animals",
            fileUrl:
              "https://example.com/english-footprints-how-to-tell-wild-animals",
          },
        ],
      },
    ],
  },
];

export default externalNotesData;
