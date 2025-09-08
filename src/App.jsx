import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PreviousPapers from "./pages/PreviousPapers";
import ClassPage from "./pages/ClassPage";
import SubjectPage from "./pages/SubjectPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import ChapterPage from "./pages/ChapterPage";
import Footer from "./components/Footer";
import YouTubePage from "./pages/YoutubePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:classId" element={<ClassPage />} />
        <Route path="/previous-papers" element={<PreviousPapers />} />
        <Route path="/contact" element={<Contact />} />
        {/* Subject page: shows chapters OR subcategories */}
        <Route
          path="/class/:classId/subject/:subjectId"
          element={<SubjectPage />}
        />

        {/* Subcategory page (for nested subjects like SocialScience, English, Hindi) */}
        <Route
          path="/class/:classId/subject/:subjectId/subcategory/:subcategoryId"
          element={<SubcategoryPage />}
        />

        {/* Chapter page: download notes */}
        <Route
          path="/class/:classId/subject/:subjectId/chapter/:chapterId"
          element={<ChapterPage />}
        />
        <Route
          path="/class/:classId/subject/:subjectId/subcategory/:subcategoryId/chapter/:chapterId"
          element={<ChapterPage />}
        />
        <Route path="/youtube" element={<YouTubePage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
