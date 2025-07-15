import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import StudentDashboard from "./components/Dashboard/Student/StudentDashboard";
import InstructorDashboard from "./components/Dashboard/Instructor/InstructorDashboard";
import CourseList from "./components/Courses/CourseList";
import CourseDetails from "./components/Courses/CourseDetails";
import CoursePlayer from "./components/Courses/CoursePlayer";
import ProfileSettings from "./components/Common/ProfileSettings";
import CourseEditor from "./components/Dashboard/Instructor/CourseEditor";
import LessonEditor from "./components/Dashboard/Instructor/LessonEditor";
import EnrollmentList from "./components/Dashboard/Instructor/EnrollmentList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetails />} />

        {/* Student */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses/:courseId/player" element={<CoursePlayer />} />
        <Route path="/student/profile" element={<ProfileSettings />} />

        {/* Instructor */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/courses/new" element={<CourseEditor />} />
        <Route path="/instructor/courses/:id/edit" element={<CourseEditor />} />
        <Route path="/instructor/courses/:courseId/lessons/:lessonId/edit" element={<LessonEditor />} />
        <Route path="/instructor/courses/:courseId/enrollments" element={<EnrollmentList />} />
        <Route path="/instructor/profile" element={<ProfileSettings />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
