import { useParams, Link } from "react-router-dom";
import studyData from "../data/StudyData";

export default function SubcategoryPage() {
  const { classId, subjectId, subcategoryId } = useParams();
  const chapters = studyData[classId]?.[subjectId]?.[subcategoryId]?.chapters;

  if (!chapters || chapters.length === 0)
    return (
      <div className="p-6 text-red-600 font-bold text-center text-lg">
        ❌ No chapters found in this subcategory
      </div>
    );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-800">
        📘 Class {classId} - {subjectId} - {subcategoryId}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {chapters.map((chap) => (
          <Link
            key={chap}
            to={`/class/${classId}/subject/${subjectId}/subcategory/${subcategoryId}/chapter/${chap}`}
            className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-200 text-center"
          >
            {chap}
          </Link>
        ))}
      </div>
    </div>
  );
}
