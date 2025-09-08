import { useParams } from "react-router-dom";
import StudyData from "../data/StudyData";
import externalNotesData from "../data/ExternalNotesData";

export default function ChapterPage() {
  const { classId, subjectId, subcategoryId, chapterId } = useParams();

  // Check if chapter exists in StudyData
  let chapterExists = false;
  if (subcategoryId) {
    chapterExists =
      StudyData[classId]?.[subjectId]?.[subcategoryId]?.chapters.includes(
        chapterId
      );
  } else {
    chapterExists =
      StudyData[classId]?.[subjectId]?.chapters.includes(chapterId);
  }

  // Find external notes file URL
  const classObj = externalNotesData.find(
    (cls) => cls.class.toLowerCase().replace(/\s+/g, "-") === classId
  );

  const subjectObj = classObj?.subjects.find(
    (sub) => sub.subject.toLowerCase().replace(/\s+/g, "-") === subjectId
  );

  const chapterObj = subjectObj?.chapters.find(
    (ch) => ch.chapter.toLowerCase().replace(/\s+/g, "-") === chapterId
  );

  const externalFileUrl = chapterObj?.fileUrl || null;

  if (!chapterExists && !externalFileUrl)
    return <div className="p-6 text-red-600">❌ Chapter not found</div>;

  // PDF fallback to public folder
  const pdfPath = subcategoryId
    ? `/notes/class${classId}/${subjectId}/${subcategoryId}/${chapterId}.pdf`
    : `/notes/class${classId}/${subjectId}/${chapterId}.pdf`;

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">
        📖 Class {classId} - {subjectId}{" "}
        {subcategoryId ? `- ${subcategoryId}` : ""} - {chapterId}
      </h2>

      <div className="mb-6">
        {externalFileUrl ? (
          <a
            href={externalFileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            📄 Open External Notes
          </a>
        ) : (
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            📄 Download Notes
          </a>
        )}
      </div>

      <p className="text-gray-700">
        ✅ Notes available for this chapter. Click above to download.
      </p>
    </div>
  );
}
