// src/pages/ClassPage.jsx
import { Link, useParams } from "react-router-dom";
import studyData from "../data/StudyData";

export default function ClassPage() {
  const { classId } = useParams();
  const classSubjects = studyData[classId];

  if (!classSubjects)
    return (
      <div className="p-6 text-red-600 font-bold text-center text-lg">
        ❌ Class not found
      </div>
    );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
        📚 Class {classId} - Subjects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(classSubjects).map((subjectKey) => (
          <Link
            key={subjectKey}
            to={`/class/${classId}/subject/${subjectKey}`}
            className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-200 text-center"
          >
            <span className="text-xl font-semibold text-gray-800">
              {subjectKey.replace(/([A-Z])/g, " $1").trim()}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
