import { useParams, Link } from "react-router-dom";
import studyData from "../data/StudyData";

export default function SubjectPage() {
  const { classId, subjectId } = useParams();
  const subject = studyData[classId]?.[subjectId];

  if (!subject)
    return (
      <div className="p-6 text-red-600 font-bold text-center text-lg">
        ❌ Subject not found
      </div>
    );

  const isNested = Object.values(subject).every(
    (value) => typeof value === "object" && value.hasOwnProperty("chapters")
  );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-800">
        📘 Class {classId} - {subjectId}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isNested
          ? Object.keys(subject).map((subCat) => (
              <Link
                key={subCat}
                to={`/class/${classId}/subject/${subjectId}/subcategory/${subCat}`}
                className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-200 text-center"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {subCat}
                </span>
              </Link>
            ))
          : subject.chapters.map((chap) => (
              <Link
                key={chap}
                to={`/class/${classId}/subject/${subjectId}/chapter/${chap}`}
                className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-200 text-center"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {chap}
                </span>
              </Link>
            ))}
      </div>
    </div>
  );
}
